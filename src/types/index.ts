export interface Career {
  company: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface MusinsaProject {
  title: string;
  period: string;
  skills: string[];
  heading: string;
  role: string;
  contributionRate: string;
  results: string[];
}

export interface MusinsaYearGroup {
  year: string;
  projects: MusinsaProject[];
}

export interface ProjectItem {
  title: string;
  href?: string;
  heading?: string;
  context?: string[];
  role?: string[];
  results?: string[];
  contributionRate?: string;
  news?: string;
}

export interface ProjectGroup {
  yearLabel: string;
  projects: ProjectItem[];
}

export interface WorkEntry {
  period: string;
  company: string;
  role: string;
  href?: string;
  musinsaGroups?: MusinsaYearGroup[];
  groups?: ProjectGroup[];
  projects?: ProjectItem[];
}
