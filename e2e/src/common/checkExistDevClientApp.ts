import * as fs from "fs";
import ora from "ora";
import * as path from "path";

import { ExpoConfig } from "./getExpoConfig";

const spinner = ora();

const devClientFolderPath = path.join(process.cwd(), "e2e/dev-client");

interface DevClientConfig {
  version: string;
  releaseUri: string;
  date: string;
}
export async function checkExistDevClientApp(expoConfig: ExpoConfig) {
  spinner.start("Check exist dev-client...");

  const configFilePath = path.join(devClientFolderPath, "config.json");

  if (!fs.existsSync(configFilePath)) {
    spinner.fail("Not exist dev-client!");
    return false;
  }

  const config: DevClientConfig = JSON.parse(
    fs.readFileSync(configFilePath).toString()
  );

  spinner.succeed(
    `Read dev-client config\n› version: ${config.version}\n› releaseUri: ${config.releaseUri}\n› date: ${config.date}\n`
  );

  if (expoConfig.version !== config.version) {
    spinner.fail("Invalid version!");
    return false;
  }

  spinner.succeed("Exist dev-client!");
  return true;
}
