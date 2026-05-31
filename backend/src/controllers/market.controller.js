import { getMarketData } from "../services/market.service.js";

export async function chart(req, res) {
  try {
    const { symbol } = req.params;
    const { period = "1mo", } = req.query;

    const data = await getMarketData(symbol, period);

    console.log(
      "Controller Symbol:",
      symbol
    );

    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to load chart", });
  }
}