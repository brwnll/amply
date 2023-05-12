import { v4 } from "uuid";
import { subDays } from "date-fns";

export default [
  {
    id: v4(),
    target: "APP-100000",
    action: "Project completed",
    source: "Contractor",
    metadata: {},
    createdAt: subDays(new Date(), 15),
  },
  {
    id: v4(),
    target: "APP-100000",
    action: "PDF Submitted",
    source: "Dustin Brownell",
    metadata: {},
    createdAt: subDays(new Date(), 13),
  },
  {
    id: v4(),
    target: "APP-100000",
    action: "Fields Updated",
    source: "Dustin Brownell",
    metadata: {
      fields: [{}],
    },
    createdAt: subDays(new Date(), 13),
  },
  {
    id: v4(),
    target: "APP-100000",
    action: "PDF Created",
    source: "System",
    metadata: {},
    createdAt: subDays(new Date(), 13),
  },
  {
    id: v4(),
    target: "APP-100000",
    action: "Form Mailed",
    source: "Dustin Brownell",
    metadata: {},
    createdAt: subDays(new Date(), 12),
  },
  {
    id: v4(),
    target: "APP-123456",
    action: "Project completed",
    source: "Eric Fitz",
    metadata: {},
    createdAt: subDays(new Date(), 3),
  },
  {
    id: v4(),
    target: "APP-123456",
    action: "Project details updated",
    source: "Ed Smith",
    metadata: {},
    createdAt: subDays(new Date(), 2),
  },
];
