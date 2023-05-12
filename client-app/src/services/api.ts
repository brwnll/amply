const BASE_URL = "http://localhost:3000";

import type { Application, Project, Rebate } from "../../../types/data";

/**
 * In a production environment, we could separate these out as the
 * needs grow, also we would need to write generic base wrappers to handle
 * the fetching, retrying, and error handling for all requests.
 */

/**
 * Applications
 */
export async function getApplications(): Promise<Application[]> {
  const response = await fetch(`${BASE_URL}/applications`);
  return await response.json();
}

export async function getApplication(id: string): Promise<Application> {
  const response = await fetch(`${BASE_URL}/applications/${id}`);
  return await response.json();
}

/**
 * Projects
 * */
export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${BASE_URL}/projects`);
  return await response.json();
}

/**
 * Rebates
 */
/**
 * Projects
 * */
export async function getRebates(): Promise<Rebate[]> {
  const response = await fetch(`${BASE_URL}/rebates`);
  return await response.json();
}
