import { Router } from "express";

import { chart, } from "../controllers/market.controller.js";

const router = Router();

router.get("/chart/:symbol", chart);

export default router;