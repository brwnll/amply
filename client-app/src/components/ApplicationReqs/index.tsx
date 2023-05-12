// External modules
import { h } from "preact";
import objectPath from "object-path";

// Types
import type { Application, FieldMapItem } from "../../../../types/data";

interface ApplicationReqsProps {
  application?: Application;
  fieldMap?: FieldMapItem[];
}

export default function ApplicationReqs({
  application,
  fieldMap,
}: ApplicationReqsProps) {
  if (!application) {
    return null;
  }

  if (!fieldMap) {
    return (
      <div class="alert alert-success">This rebate has no required data.</div>
    );
  }

  return (
    <section>
      <hr />
      <table class="table">
        <tr>
          <th>Field</th>
          <th>Filled</th>
          <th>Required</th>
        </tr>
        {fieldMap.map((fieldItem) => (
          <tr key={fieldItem.formField}>
            <td>{fieldItem.displayName}</td>
            <td>
              {objectPath.get(application, fieldItem.projectField)
                ? objectPath.get(application, fieldItem.projectField) === true
                  ? "✅"
                  : objectPath.get(application, fieldItem.projectField)
                : "❌"}
            </td>
            <td>{fieldItem.required ? "✅" : "❌"}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}
