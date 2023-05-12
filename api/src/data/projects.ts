import { Project } from "../../../types/data";

const customers = [
  {
    id: "CUS-123456",
    name: {
      given: "John",
      surname: "Doe",
    },
    email: "jdoe@example.com",
    phone: "555-555-5555",
  },
  {
    id: "CUS-999999",
    name: {
      given: "Dustin",
      surname: "Brownell",
    },
    email: "dbrownell@gmail.com",
    phone: "555-555-5555",
  },
  {
    id: "CUS-000000",
    name: {
      given: "Eric",
      surname: "Fitz",
    },
    email: "efitz@amply.energy",
    phone: "555-555-5555",
  },
  {
    id: "CUS-000001",
    name: {
      given: "Ed",
      surname: "Smith",
    },
    email: "esmith@amply.energy",
    phone: "555-555-5555",
  },
];

export default [
  {
    id: "PRO-123456",
    customerId: "CUS-123456",
    customer: customers.find((customer) => customer.id === "CUS-123456"),
    address: {
      street: "77 South St",
      locality: "Freeport",
      province: "ME",
      postalCode: "04032",
      country: "USA",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    projectInfo: {
      approvedVendor: true,
      heatingSeason: true,
      sixMonths: true,
      installedChecklist: true,
      ownersManual: true,
      userTips: true,
      homeownerTaught: true,
      increasedCosts: true,
      businessOwned: true,
    },
  },
  {
    id: "PRO-000000",
    customerId: "CUS-999999",
    customer: customers.find((customer) => customer.id === "CUS-999999"),
    address: {
      street: "1 Apple Lane",
      locality: "Cupertino",
      province: "CA",
      postalCode: "98765",
      country: "USA",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    projectInfo: {
      approvedVendor: true,
      heatingSeason: true,
      sixMonths: true,
      installedChecklist: true,
      ownersManual: true,
      userTips: true,
    },
  },
] as Project[];
