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
    printUsage();
    printItem("Not Recording! Press s to start");
  });

  await detox.init({ argv: { configuration: "ios" } });
  await openApp();
  printItem(`Waiting app connect on ${config.host}:${config.port}`);
  await device.reloadReactNative();
}
