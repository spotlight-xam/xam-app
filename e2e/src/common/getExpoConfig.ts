import { getConfig } from "@expo/config";
import { config } from "dotenv";
import ora from "ora";

config();

const spinner = ora();

export interface ExpoConfig {
  token: string;
  owner: string;
  repo: string;
  version: string;
}
export function getExpoConfig(): ExpoConfig {
  spinner.start("Read app config...");

  const token = process.env["GITHUB_API_TOKEN"]!;

  const { exp, pkg } = getConfig(process.cwd());

  const repo = pkg.name;
  const owner = exp.owner!;
  const version = `v${exp.version}`;

  spinner.succeed(
    `Read app config\n› owner: ${owner}\n› repo: ${repo}\n› version: ${version}\n`
  );

  return { token, repo, owner, version };
}
