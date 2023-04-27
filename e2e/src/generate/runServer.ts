import * as http from "http";
import * as ws from "ws";

import { printItem } from "./log";
import { config } from "./testServerConfig";

export async function runServer() {
  const httpServer = http.createServer();

  const socketServer = new ws.Server({ server: httpServer });

  return new Promise<{ server: http.Server; socket: ws.Server<ws.WebSocket> }>(
    (resolve, reject) => {
      httpServer.on("error", (error) => {
        reject(error);
        socketServer.emit("end");
      });

      httpServer.listen(config.port, config.host, () => {
        console.clear();
        printItem(
          `Test http server started on ${config.host}:${config.port}\n`
        );
        resolve({ server: httpServer, socket: socketServer });
      });

      httpServer.timeout = 0;

      httpServer.on("close", () => {
        socketServer.emit("end");
      });
    }
  );
}
