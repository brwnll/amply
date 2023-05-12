import express from "express";

import type { Request, Response } from "express";

const router = express.Router();

import mockRebates from "../data/rebates";

const listRebates = (req: Request, res: Response) => {
  res.json(mockRebates);
};

router.get("/", listRebates);

export default router;
