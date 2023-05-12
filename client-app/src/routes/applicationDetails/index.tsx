// External modules
import { h } from "preact";
import { Link } from "preact-router";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import toast from "react-hot-toast";

// Internal modules
import ApplicationReqs from "../../components/ApplicationReqs";
import { getApplicationState, getCustomerFullName } from "../../services/util";
import { createRebatePDF } from "../../services/pdf";
import { getApplication } from "../../services/api";

const ApplicationDetails = ({ applicationId }: { applicationId: string }) => {
  const {
    data: application,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["application", applicationId],
    queryFn: () => getApplication(applicationId),
  });

  function handleCreatePDF(application) {
    toast.promise(createRebatePDF({ application }), {
      loading: "Creating PDF...",
      success: "PDF Created",
      error: "Failed to create PDF",
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div>
      <Link href="/">&laquo; Back to List</Link>
      <h1>
        {application.id}: {getApplicationState(application)}
      </h1>
      <h3>Customer</h3>
      <ul class="list-group">
        <li class="list-group-item">
          {getCustomerFullName(application.project.customer)}
        </li>
        <li class="list-group-item">{application.project.customer.email}</li>
      </ul>
      <h3>Rebate Fields</h3>
      <blockquote>
        Field completion is reflected from the data on the project.
      </blockquote>

      <ApplicationReqs
        application={application}
        fieldMap={application.rebate?.fieldMap}
      />

      <button
        onClick={() => handleCreatePDF(application)}
        class="btn btn-primary"
      >
        Create PDF
      </button>

      <h3>History</h3>
      {application.history.length === 0 && <p>No history recorded</p>}
      <ul class="list-group">
        {application.history
          .sort(
            (a, b) =>
              new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
          )
          .map((historyItem) => (
            <li key={historyItem.id} class="list-group-item">
              <div class="fw-bold">{historyItem.action}</div>
              <small>
                {format(new Date(historyItem.createdAt), "MM/dd/yyyy h:ma")} by{" "}
                {historyItem.source}
              </small>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ApplicationDetails;
