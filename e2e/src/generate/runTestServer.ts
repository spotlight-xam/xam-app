// import ora from "ora";
import detox from "detox/internals";
import ws from "ws";

import { printUsage, printItem } from "./log";
import { config } from "./testServerConfig";

const { openApp } = require("../../utils/openApp");

export async function runTestServer(
  socket: ws.Server<ws.WebSocket>,
  onConnect: (socketForApp: ws.WebSocket) => void
) {
  socket.on("connection", (socketForApp) => {
    onConnect(socketForApp);
    printItem("Connected app!");
    // spinnerForConnect.start();
    // spinnerForConnect.succeed("Connected app!");
    printUsage();

    printItem("Not Recording! Press s to start");
    // spinnerForRecord.start();
    // spinnerForRecord.stopAndPersist();
    // spinnerForRecord.color = "yellow";
  });

  await detox.init({ argv: { configuration: "ios" } });
  await openApp();
  printItem(`Waiting app connect on ${config.host}:${config.port}`);
  await device.reloadReactNative();

  // const spinnerForConnect = ora({
  //   discardStdin: false,
  //   text: `Waiting app connect on ${config.host}:${config.port}`,
  // }).start();
  // spinnerForConnect.color = "yellow";

  // const spinnerForRecord = ora({
  //   discardStdin: false,
  //   text: "Not Recording! Press s to start",
  // });
}
