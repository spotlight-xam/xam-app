import decompress from "decompress";
import { https } from "follow-redirects";
import * as fs from "fs";
import ora from "ora";
import * as path from "path";

import { ExpoConfig } from "./getExpoConfig";

const spinner = ora();

const devClientFolderPath = path.join(process.cwd(), "e2e/dev-client");

async function unzipperDevClientApp(): Promise<boolean> {
  const zipFiles = fs
    .readdirSync(devClientFolderPath)
    .filter((file) => file.endsWith(".zip") || file.endsWith(".tar.gz"));

  if (!zipFiles.length) return true;

  await Promise.all(
    zipFiles.map(async (file) => {
      await decompress(
        path.join(devClientFolderPath, file),
        devClientFolderPath
      );
      fs.rmSync(path.join(devClientFolderPath, file));
    })
  );

  return unzipperDevClientApp();
}

export async function downloadDevClientApp(expoConfig: ExpoConfig) {
  const { token, owner, repo, version } = expoConfig;

  const options = {
    headers: { Authorization: `token ${token}`, "User-Agent": "request" },
  };

  spinner.start("Check dev-client in github release");

  const releaseUri = `https://api.github.com/repos/${owner}/${repo}/releases/tags/${version}`;

  const res = await new Promise<{
    assets: { url: string; browser_download_url: string; name: string }[];
  }>((resolve) => {
    https.get(releaseUri, options, (res) => {
      let response = "";
      res.on("data", (chunk) => (response += chunk));
      res.on("end", () => resolve(JSON.parse(response)));
    });
  });

  if (!res?.assets?.length) {
    throw new Error("No assets found");
  }

  fs.rmSync(devClientFolderPath, { recursive: true, force: true });

  await Promise.all(
    res.assets.map(async (asset) => {
      spinner.start("Download dev-client in github release");

      if (!fs.existsSync(devClientFolderPath))
        fs.mkdirSync(devClientFolderPath);

      const filePath = path.join(devClientFolderPath, asset.name);

      const file = fs.createWriteStream(filePath);

      return new Promise((resolve, reject) => {
        https
          .get(asset.browser_download_url, options, (response) => {
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              resolve(true);
            });
          })
          .on("error", (error) => reject(error));
      });
    })
  );

  spinner.start("Unzipping...");

  await unzipperDevClientApp();

  await Promise.all(
    fs.readdirSync(devClientFolderPath).map(
      (file) =>
        new Promise((resolve, reject) => {
          const { ext } = path.parse(file);

          fs.rename(
            path.join(devClientFolderPath, file),
            path.join(devClientFolderPath, `xam${ext}`),
            (err) => {
              if (err) reject(err);
              resolve(true);
            }
          );
        })
    )
  );

  const config = { version, releaseUri, date: new Date().toISOString() };

  fs.writeFileSync(
    path.join(devClientFolderPath, "config.json"),
    JSON.stringify(config)
  );

  spinner.succeed("Download succeed");
}
