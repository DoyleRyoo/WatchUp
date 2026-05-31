import express from "express";

import {
  getHoldings,
  createHolding,
  deleteHolding,
} from "../controllers/stock.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getHoldings);

router.post("/", createHolding);

router.delete("/:id", deleteHolding);

export default router;