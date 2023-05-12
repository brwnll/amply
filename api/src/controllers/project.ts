import express from "express";

import type { Request, Response } from "express";

const router = express.Router();

import mockProjects from "../data/projects";

const listProjects = (req: Request, res: Response) => {
  res.json(mockProjects);
};

router.get("/", listProjects);

export default router;
