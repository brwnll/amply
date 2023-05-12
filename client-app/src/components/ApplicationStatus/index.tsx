import { h } from "preact";

export default function ApplicationStatus({ status }) {
  switch (status) {
    case "Submitted":
      return <span class="badge text-bg-success">Submitted</span>;
    case "Not Submitted":
      return <span class="badge text-bg-secondary">Not Submitted</span>;
    case "Missing Required Field(s)":
      return <span class="badge text-bg-danger">Missing Fields</span>;
    case "Ready to Submit":
      return <span class="badge text-bg-info">Ready to Submit</span>;
    default:
      return <span class="badge text-bg-secondary">{status}</span>;
  }
}
