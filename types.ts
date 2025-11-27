import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
