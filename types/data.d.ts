/**
 * Generics
 */
interface TimeStampedObject {
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
}

interface Address {
  street: string;
  street2?: string;
  locality: string;
  province: string;
  postalCode: string;
  country: string;
}

interface Name {
  given: string;
  surname: string;
}

/**
 * App Data Specific
 */
export interface Customer {
  id: string;
  name: Name;
  email: string;
  phone: string;
  projects: Project[];
}

export interface Project extends TimeStampedObject {
  id: string;
  address: Address;
  customer?: Customer;
  customerId?: string;
  projectInfo?: {};
}

export interface Application extends TimeStampedObject {
  id: string;
  project?: Project;
  projectId?: string;
  status?: string;
  rebateId?: string;
  rebate?: Rebate;
  history?: HistoryItem[];
}

export interface HistoryItem {
  id: string;
  target: string;
  action: string;
  source: string;
  metadata: {};
  createdAt: Date | string;
}

export interface FieldMapItem {
  displayName: string;
  type: string;
  formField: string;
  projectField: string;
  required: boolean;
}

interface Requirement {
  id: string;
  type: string;
  property: string;
  value: string;
  [key: string]: any;
}

export interface Rebate {
  id: string;
  name: string;
  effectiveDate: Date;
  endingDate?: Date;
  submissionType: string;
  fieldMap: FieldMapItem[];
  requirements?: Requirement[];
}
