// import { kacpta } from "@client/api";

import { BaseEventEmitterEvents } from "../webSocket";

export interface MessageOfWebSocketForReceive extends BaseEventEmitterEvents {
  pong: {
    event: "pong";
    data: {
      PONG: true;
    };
  };

  error: {
    event: "error";
    data: {
      event: string;
      message: string;
    };
  };
}
