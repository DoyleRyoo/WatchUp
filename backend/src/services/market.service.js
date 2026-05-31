import { spawn } from "child_process";
import stockCache from "../cache/stockCache.js";

const TTL = 60 * 1000;

export async function getMarketData(symbol, period = "1mo") {
  console.log(
    "Service Symbol:",
    symbol
  );
  return new Promise(
    (resolve, reject) => {
      const python = spawn("python", [
        "src/python/stock_fetcher.py",
        "history",
        symbol,
        period,
      ]);

      let result = "";

      python.stdout.on(
        "data",
        (data) => { result += data.toString(); }
      );

      python.stderr.on(
        "data",
        (err) => { console.error(err.toString()); }
      );

      python.on("close", () => {
        try {
          resolve(JSON.parse(result));
        } catch {
          reject(new Error("Chart Parse Error"));
        }
      });
    }
  );
}