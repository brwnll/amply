// External modules
import objectPath from "object-path";

// Types
import type {
  Address,
  Application,
  Customer,
  Project,
  Rebate,
} from "../../../types/data";

export function getCustomerFullName(customer: Customer) {
  return `${customer.name.given} ${customer.name.surname}`;
}

export function getAddressReference(address: Address) {
  return `${address.street}, ${address.locality}`;
}

export function getApplicationState(
  application: Application,
  showCompletionPercentage = false
) {
  // First possibility, everything is done, no need to do further digging
  if (application.status === "Submitted") {
    return application.status;
  }

  // Don't have all needed components
  if (!application.rebate) {
    return "Missing Rebate";
  }

  if (!application.project) {
    return "Missing Project";
  }

  // Second possibility, application has not been submitted, but all required fields are complete
  // so the application is ready to submit
  if (application.status === "Not Submitted") {
    // Iterate over each required field and check if it is set on the project
    const requiredFields = application.rebate.fieldMap.filter(
      (fieldMap) => fieldMap.required
    );
    const missingFields = requiredFields.filter(
      (fieldMap) => !objectPath.get(application, fieldMap.projectField)
    );

    if (!showCompletionPercentage) {
      return application.status;
    }

    if (missingFields.length > 0) {
      return `${Math.round(
        (missingFields.length / requiredFields.length) * 100
      )}% Data Captured`;
    }

    // If we've made it here, all required fields are passed
    return "Ready to Submit";
  }

  // Show given status if nothing else applies
  return application.status;
}

// This would eventually live on the server side in the Application/Rebate
// service which could take a given project and return all available rebates
export function getAvailableRebates(project: Project, rebates: Rebate[]) {
  const availableRebates = [];
  for (const rebate of rebates) {
    // If rebate has no requirements, it is available
    if (!rebate.requirements || !rebate.requirements.length) {
      availableRebates.push(rebate);
      continue;
    }

    // If it has requirements, check if the project meets them
    const requirementsMet = rebate.requirements.every((requirement) => {
      return (
        objectPath.get(project, requirement.property) === requirement.value
      );
    });

    if (requirementsMet) {
      availableRebates.push(rebate);
    }
  }

  return availableRebates;
}
