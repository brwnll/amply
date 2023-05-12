import express from "express";

import type { Request, Response } from "express";

const router = express.Router();

// Mock Data
import mockApplications from "../data/applications";
import mockProjects from "../data/projects";
import mockRebates from "../data/rebates";
import mockHistory from "../data/history";

// Faking a table/data join
for (let application of mockApplications) {
  application.project = mockProjects.find(
    (project) => project.id === application.projectId
  );
  application.rebate = mockRebates.find(
    (rebate) => rebate.id === application.rebateId
  );
  application.history = mockHistory.filter(
    (historyItem) => historyItem.target === application.id
  );
}

const listApplications = (req: Request, res: Response) => {
  res.json(mockApplications);
};

const getApplication = (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).send("Missing id");
  }

  res.json(mockApplications.find((app) => app.id === req.params.id));
};

router.get("/", listApplications);
router.get("/:id", getApplication);

export default router;
