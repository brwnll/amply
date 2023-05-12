import { Application } from "../../../types/data";
import { subDays } from "date-fns";

export default [
  {
    id: "APP-123456",
    status: "Not Submitted",
    projectId: "PRO-123456",
    rebateId: "REB-123456",
    documentId: "X37kPFErpzCu6m3r4njPDQ",
    createdAt: subDays(new Date(), 5),
    updatedAt: subDays(new Date(), 1),
  },
  {
    id: "APP-100000",
    status: "Submitted",
    projectId: "PRO-123456",
    rebateId: "REB-100000",
    createdAt: subDays(new Date(), 5),
    updatedAt: subDays(new Date(), 2),
  },
  {
    id: "APP-999999",
    status: "Not Submitted",
    projectId: "PRO-000000",
    rebateId: "REB-123456",
    createdAt: subDays(new Date(), 9),
    updatedAt: subDays(new Date(), 9),
  },
] as Application[];
