import {
  checkExistDevClientApp,
  downloadDevClientApp,
  getExpoConfig,
} from "../common";

async function start() {
  const expoConfig = getExpoConfig();

  if (!(await checkExistDevClientApp(expoConfig))) {
    await downloadDevClientApp(expoConfig);
  }
}

start();
