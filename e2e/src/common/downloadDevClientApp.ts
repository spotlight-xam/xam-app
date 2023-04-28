import { https } from "follow-redirects";
import * as fs from "fs";
import ora from "ora";
import * as path from "path";
import * as unzipper from "unzipper";

import { ExpoConfig } from "./getExpoConfig";

const spinner = ora();

export async function downloadDevClientApp(expoConfig: ExpoConfig) {
  const { token, owner, repo, version } = expoConfig;

  const options = {
    headers: { Authorization: `token ${token}`, "User-Agent": "request" },
  };

  spinner.start("Check dev-client in github release");

  const res = await new Promise<{
    assets: { url: string; browser_download_url: string; name: string }[];
  }>((resolve) => {
    https.get(
      `https://api.github.com/repos/${owner}/${repo}/releases/tags/${version}`,
      options,
      (res) => {
        let response = "";
        res.on("data", (chunk) => (response += chunk));
        res.on("end", () => resolve(JSON.parse(response)));
      }
    );
  });

  if (!res?.assets?.length) {
    throw new Error("No assets found");
  }

  const devClientFolderPath = path.join(process.cwd(), "e2e/dev-client");

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

              if (asset.name.endsWith(".zip")) {
                spinner.start("Unzipping...");

                fs.createReadStream(path.join(devClientFolderPath, asset.name))
                  .pipe(
                    unzipper.Extract({ path: path.join(devClientFolderPath) })
                  )
                  .on("close", () => {
                    fs.rmSync(path.join(devClientFolderPath, asset.name));
                    resolve(true);
                  })
                  .on("error", (error) => reject(error));
              } else {
                resolve(true);
              }
            });
          })
          .on("error", (error) => reject(error));
      });
    })
  );

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

  spinner.succeed("Download succeed");
}
