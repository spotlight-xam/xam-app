import { downloadDevClientApp, getExpoConfig } from "../common";

async function start() {
  const expoConfig = getExpoConfig();
  await downloadDevClientApp(expoConfig);
}

start();
