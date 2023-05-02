import { CausalRecordManager } from "./causalRecordManager";
import { getKeyPressListener } from "./getKeyPressListener";
import { KeyPressHandler } from "./keyPressHandler";
import { runServer } from "./runServer";
import { runTestServer } from "./runTestServer";
import {
  checkExistDevClientApp,
  downloadDevClientApp,
  getExpoConfig,
} from "../common";

async function generate() {
  const expoConfig = getExpoConfig();

  if (!(await checkExistDevClientApp(expoConfig))) {
    await downloadDevClientApp(expoConfig);
  }

  const { socket } = await runServer();

  const causalRecordManager = new CausalRecordManager();

  const keyPressHandler = new KeyPressHandler(
    getKeyPressListener(causalRecordManager)
  );
  keyPressHandler.startInterceptingKeyStrokes();
  runTestServer(socket, (socketForApp) => {
    keyPressHandler.onPress = getKeyPressListener(
      causalRecordManager,
      socketForApp
    );
    causalRecordManager.addMessageListener(socketForApp);
  });
}

generate();
