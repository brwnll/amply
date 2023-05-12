import objectPath from "object-path";
import { Application } from "../../../types/data";

const PDF_URL_BASE = "https://api.pandadoc.com/public/v1/documents";
// Don't put API keys like this
const API_KEY = "15bbe4f559e456b9cd33e3fd1cad1487ceb4ee7b";

interface createRebatePDFProps {
  application: Application;
  fields?: { [key: string]: { value: string | boolean } };
}
export async function createRebatePDF({ application }: createRebatePDFProps) {
  const fields = {};
  for (const field of application.rebate.fieldMap) {
    fields[field.formField] = {
      value: objectPath.get(application, field.projectField),
    };
  }

  const body = {
    name: "Sample Heat Pump Rebate Application",
    template_uuid: "NxDoLrYATyKsCAtChZ62oT",
    recipients: [
      {
        email: application.project.customer.email,
        first_name: "Dustin",
        last_name: "Brownell",
        role: "Client",
      },
    ],
    fields,
    metadata: {
      applicationId: application.id,
    },
    tags: ["created_via_api", "test_document"],
  };

  const response = await fetch(PDF_URL_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `API-KEY ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  return await response.json();
}
