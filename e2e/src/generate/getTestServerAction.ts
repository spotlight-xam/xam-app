import ws from "ws";

import { CausalRecordManager } from "./causalRecordManager";
import { printItem } from "./log";

export function getTestServerAction(
  causalRecordManager: CausalRecordManager,
  socketForApp: ws.WebSocket
) {
  return {
    start: () => {
      printItem("start Record");
      socketForApp.send("start");
    },
    pause: () => {
      printItem("pause Record");
      socketForApp.send("pause");
    },
    generate: async () => {
      printItem("generate Test");
      printItem("Generate test code...");

      await causalRecordManager.generate();
      printItem("Generate test code success!");
    },
    end: () => socketForApp.send("end"),
  };
}
