
import type { ReactNode } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface AiIdea {
    title: string;
    description: string;
}
