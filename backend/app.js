import express from "express";
import cors from "cors";

import stockRoutes from "./src/routes/stock.routes.js";
import { admin } from "./src/firebase/firebaseAdmin.js";
import marketRoutes from "./src/routes/market.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);

app.use("/api/market", marketRoutes);

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Watch-Up Backend Running",
    timestamp: new Date().toISOString(),
  });
});

app.get(
  "/api/health/firebase",
  async (req, res) => {
    try {
      await admin.auth().listUsers(1);

      return res.status(200).json({
        success: true,
        firebase: "connected",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        firebase: "failed",
        message: error.message,
      });
    }
  }
);

export default app;