// types/dashboard.types.ts

export interface ManagerDashboard {
  activeProjects: number;
  activeSprints: number;
  avgVelocity: number;
  atRiskProjects: number;
  completedProjects: number;
}

export interface TeamLeadDashboard {
  teamPerformance: number;
  teamMembers: number;
  openIssues: number;
  resolvedIssues: number;
  upcomingDeadlines: string[];
}

export interface EmployeeDashboard {
  progress: number;
  assignedTasks: string[];
  completedTasks: number;
  badges: string[];
  lastLogin: string;
}

export type DashboardData = {
  name: any;
  role: "admin" | "tutor" | "student";
  dashboard: ManagerDashboard | TeamLeadDashboard | EmployeeDashboard;
};
