// types/incident.ts
export interface Incident {
    id: string;
    assignTo: string; // This will be the escalation ID
    title: string;
    priority: string;
    description: string;
  }