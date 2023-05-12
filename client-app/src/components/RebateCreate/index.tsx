// External modules
import { h } from "preact";
import { useState } from "preact/hooks";
import { useQuery } from "@tanstack/react-query";
import { format, set } from "date-fns";

// Internal modules
import ApplicationReqs from "../ApplicationReqs";
import { getAvailableRebates } from "../../services/util";
import { getProjects, getRebates } from "../../services/api";

// Types
import type { Project, Rebate } from "../../../../types/data";

export default function RebateCreate() {
  const [newProject, setNewProject] = useState<Project | null>(null);
  const [newRebate, setNewRebate] = useState<Rebate | null>(null);
  const { data: projects, error: projectError } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const { data: rebates } = useQuery({
    queryKey: ["rebates"],
    queryFn: getRebates,
  });

  return (
    <section>
      <h3>Add Rebate</h3>
      {projectError && <div>Error: {projectError}</div>}
      <div class="mb-3">
        <label class="form-label">Select Project</label>
        <select
          class="form-control"
          onChange={(e) => {
            const project = projects.find(
              (project) => project.id === (e.target as HTMLButtonElement).value
            );
            setNewProject(project);
          }}
        >
          <option value="">Available Projects</option>
          {projects &&
            projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.customer.name.surname} - {project.address.street}
              </option>
            ))}
        </select>
      </div>

      {newProject && (
        <div class="mb-3">
          <label class="form-label">
            {getAvailableRebates(newProject, rebates).length} of{" "}
            {rebates.length} Available Rebates for Given Address
          </label>
          <select
            class="form-control"
            onChange={(e) => {
              const rebate = rebates.find(
                (rebate) => rebate.id === (e.target as HTMLButtonElement).value
              );
              setNewRebate(rebate);
            }}
          >
            <option value="">Select Rebate</option>
            {getAvailableRebates(newProject, rebates).map((rebate) => (
              <option key={rebate.id} value={rebate.id}>
                {rebate.name} (
                {format(new Date(rebate.effectiveDate), "MM/dd/yyyy")})
              </option>
            ))}
          </select>

          {newRebate && (
            <ApplicationReqs
              application={{ id: "new", project: newProject }}
              fieldMap={newRebate.fieldMap}
            />
          )}
          <div class="mb-3">
            <a class="btn btn-primary">+ Create New Rebate</a>
          </div>
        </div>
      )}
    </section>
  );
}
