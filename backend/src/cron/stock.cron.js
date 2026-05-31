import cron from "node-cron";

import { getMarketData } from "../services/market.service.js";

import { getIO } from "../socket/socket.js";

const WATCH_LIST = [
  "AAPL",
  "TSLA",
  "NVDA",
  "MSFT"
];

export function startStockCron() {
  cron.schedule("* * * * *", async () => {
    try {
      const data = await getMarketData();

      getIO().emit("market:update", data);

    } catch (err) {
      console.error(err);
    }
  });
}