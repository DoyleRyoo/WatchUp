import http from "http";

import app from "./app.js";

import { initSocket } from "./src/socket/socket.js";

import { startStockCron } from "./src/cron/stock.cron.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

initSocket(server);

startStockCron();

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});