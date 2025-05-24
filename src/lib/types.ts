import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Achievement {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  imageHint?: string;
}

export interface Skill {
  id:string;
  name: string;
  proficiency: number; // 0-100
  icon?: LucideIcon;
}

export interface ResearchPublication {
  id: string;
  title: string;
  venue: string; // e.g., "Journal of Amazing Discoveries", "International Conference on AI"
  date: string; // e.g., "Published Oct 2023", "Presented May 2024"
  description: string;
  link?: string; // URL to the paper or abstract
  icon?: LucideIcon; // e.g., FileText, BookOpenText
  tags?: string[]; // e.g., ["AI", "Machine Learning", "NLP"]
}
