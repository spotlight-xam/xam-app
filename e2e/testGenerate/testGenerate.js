const http = require("http");
const _WebSocket = require("ws");

const KeyPressHandler = require("./KeyPressHandler");
const onPressAsync = require("./onPressAsync.js");

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

// WebSocket 서버 생성
const wss = new _WebSocket.Server({ server });

// const keyPressHandler = new KeyPressHandler(onPressAsync);
// const listener = keyPressHandler.createInteractionListener();
// // addInteractionListener(listener);
// keyPressHandler.startInterceptingKeyStrokes();

// WebSocket 연결이 수립되면 호출됨
wss.on("connection", (ws) => {
  console.log("Client connected");

  // 메시지를 수신하면 로그로 출력
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });

  // 에러가 발생하면 로그로 출력
  ws.on("error", (error) => {
    console.error(`WebSocket error: ${error}`);
  });

  // 연결이 종료되면 호출됨
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// HTTP 서버 시작
const port = 9091;
server.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});
