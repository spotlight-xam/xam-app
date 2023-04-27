import ws from "ws";

import { CausalRecordManager } from "./causalRecordManager";
import { getTestServerAction } from "./getTestServerAction";
import { printUsage } from "./log";

const CTRL_C = "\u0003";
const CTRL_D = "\u0004";
const CTRL_L = "\u000C";

export function getKeyPressListener(
  causalRecordManager: CausalRecordManager,
  socketForApp?: ws.WebSocket
) {
  const testServerAction =
    socketForApp && causalRecordManager
      ? getTestServerAction(causalRecordManager, socketForApp)
      : null;

  return async (key: string) => {
    switch (key) {
      case CTRL_C:
      case CTRL_D: {
        testServerAction?.end();
        return process.exit();
      }
      case CTRL_L:
        return console.clear();
      case "?":
        return printUsage();
    }

    if (socketForApp) {
      switch (key) {
        case "s": {
          testServerAction?.start();
          return;
        }
        case "p": {
          testServerAction?.pause();
          return;
        }
        case "g":
          await testServerAction?.generate();
          testServerAction?.end();
          return process.exit();
        case "e":
          testServerAction?.end();
          process.exit();
      }
    }
  };
}
