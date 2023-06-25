import { BaseEventEmitterEvents } from "../webSocket";

export interface MessageOfWebSocketForSend extends BaseEventEmitterEvents {
  // Check Socket Connection
  ping: {
    event: "ping";
    data: "";
  };
}
