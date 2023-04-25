const https = require("https");
const fs = require("fs");

const packageInfo = require("../package.json");

const token = "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";
const owner = packageInfo.author.name;
const repo = packageInfo.name;
const version = packageInfo.version;

const options = {
  headers: {
    Authorization: `token ${token}`,
    "User-Agent": "request",
  },
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, options, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("File downloaded successfully.");
          resolve();
        });
        file.on("end", () => {
          console.log("File downloaded end.");
        });
      })
      .on("error", (error) => {
        console.error(`Error downloading file: ${error}`);
        reject(error);
      });
  });
};

const getFileUrl = () => {
  https
    .get(
      `https://api.github.com/repos/${owner}/${repo}/releases/tags/${version}`,
      options,
      (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", async () => {
          const json = JSON.parse(data);
          if (!json.assets?.length) {
            throw new Error("No assets found");
          }

          for (let i = 0; i < json.assets.length; i++) {
            let asset = json.assets[i];
            let dest;
            let targetPath;
            if ("android_artifact.zip" === asset.name) {
              dest = "./download/android_artifact.zip";
              targetPath = "./download/android_artifact";
            }
            if ("ios_artifact.zip" === asset.name) {
              dest = "./download/ios_artifact.zip";
              targetPath = "./download/ios_artifact";
            }
            if (dest) {
              await downloadFile(asset.url, dest);
              await unzipFile(dest, targetPath);
            }
          }
        });
      }
    )
    .on("error", (error) => {
      console.error(`Error getting the release: ${error}`);
    });
};

getFileUrl();
