import { https } from "follow-redirects";
import * as fs from "fs";
import * as path from "path";
import * as unzipper from "unzipper";

const devClientFolderPath = path.join(process.cwd(), "e2e/dev-client");

function unzipDevClientApp(name: string) {
  fs.createReadStream(path.join(devClientFolderPath, name))
    .pipe(
      unzipper.Extract({
        path: path.join(devClientFolderPath, name.replace(".zip", "")),
      })
    )
    .on("error", (error) => console.log("unzipDevClientApp error: ", error));
}

export async function downloadDevClientApp() {
  const token = process.env["GITHUB_API_TOKEN"];
  const owner = "spotlight-xam";
  const repo = "xam-app";
  const version = "v1.0.0";

  const options = {
    headers: { Authorization: `token ${token}`, "User-Agent": "request" },
  };

  const res = await new Promise<{
    assets: { url: string; browser_download_url: string; name: string }[];
  }>((resolve) => {
    https.get(
      `https://api.github.com/repos/${owner}/${repo}/releases/tags/${version}`,
      options,
      (res) => {
        let response = "";
        res.on("data", (chunk) => {
          response += chunk;
        });
        res.on("end", () => {
          resolve(JSON.parse(response));
          console.log(response);
        });
      }
    );
  });

  if (!res?.assets?.length) {
    throw new Error("No assets found");
  }

  res.assets.map((asset) => {
    if (!fs.existsSync(devClientFolderPath)) fs.mkdirSync(devClientFolderPath);

    const filePath = path.join(devClientFolderPath, asset.name);

    const file = fs.createWriteStream(filePath);

    console.log({
      url: asset.url,
      browser_download_url: asset.browser_download_url,
    });

    https
      .get(asset.browser_download_url, options, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("File downloaded successfully.");
          if (asset.name.endsWith(".zip")) {
            unzipDevClientApp(asset.name);
            console.log("~ for zip");
          }
        });
        file.on("end", () => {
          console.log("File downloaded end.");
        });
      })
      .on("error", (error) => {
        console.error(`Error downloading file: ${error}`);
      });
  });
}
