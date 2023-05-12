import express from "express";
import cors from "cors";

// Routes
import applicationRouter from "./controllers/application";
import projectRouter from "./controllers/project";
import rebateRouter from "./controllers/rebate";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Amply Rebate API");
});

app.use("/applications", applicationRouter);
app.use("/projects", projectRouter);
app.use("/rebates", rebateRouter);

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
