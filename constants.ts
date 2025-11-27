import { 
  Palette, 
  Globe, 
  Megaphone, 
  BarChart, 
  Video, 
  Search,
  Lightbulb,
  ClipboardList,
  Rocket,
  Headphones
} from 'lucide-react';
import { Service, Advantage, ProcessStep, Project, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Branding & Identity',
    description: 'Logo design, visual identity systems, and brand strategy that leaves a lasting impression.',
    icon: Palette
  },
  {
    id: '2',
    title: 'Web Design & Dev',
    description: 'Custom, responsive websites built for performance, conversion, and user experience.',
    icon: Globe
  },
  {
    id: '3',
    title: 'Social Media Marketing',
    description: 'Engaging content creation and community management across all major platforms.',
    icon: Megaphone
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: 'PPC, email marketing, and comprehensive campaigns to drive traffic and leads.',
    icon: BarChart
  },
  {
    id: '5',
    title: 'Video & Animation',
    description: 'High-quality motion graphics and video production to tell your story dynamically.',
    icon: Video
  },
  {
    id: '6',
    title: 'SEO & Analytics',
    description: 'Data-driven strategies to improve visibility and rank higher on search engines.',
    icon: Search
  },
];

export const ADVANTAGES: Advantage[] = [
  { id: '1', title: 'Strategy-Driven', description: 'Every pixel and post is backed by data and strategic planning.' },
  { id: '2', title: 'Creative & Clean', description: 'We believe in minimalist, impactful design that communicates clearly.' },
  { id: '3', title: 'Result-Oriented', description: 'We focus on KPIs that matter: ROI, conversion, and growth.' },
  { id: '4', title: 'Mobile-First', description: 'Optimized experiences for every device, from smartphone to desktop.' },
];

export const PROCESS: ProcessStep[] = [
  {
    id: '1',
    stepNumber: '01',
    title: 'Discovery',
    description: 'We listen to your goals, analyze your market, and brainstorm ideas.',
    icon: Lightbulb
  },
  {
    id: '2',
    stepNumber: '02',
    title: 'Strategy & Planning',
    description: 'We build a roadmap and timeline to ensure smooth execution.',
    icon: ClipboardList
  },
  {
    id: '3',
    stepNumber: '03',
    title: 'Execution',
    description: 'Our creative team brings the vision to life with precision.',
    icon: Palette
  },
  {
    id: '4',
    stepNumber: '04',
    title: 'Delivery & Support',
    description: 'Launch, monitor, and refine for sustained success.',
    icon: Rocket
  },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Neon Horizon', category: 'Branding', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: '2', title: 'Urban Coffee Co.', category: 'Web Design', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: '3', title: 'TechFlow App', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: '4', title: 'Summit Gear', category: 'Social Media', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: '5', title: 'EcoLife', category: 'Packaging', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: '6', title: 'Future Finance', category: 'Digital Marketing', imageUrl: 'https://picsum.photos/600/400?random=6' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "XooX Media transformed our online presence. Their design team is simply world-class.",
    author: "Sarah Jenkins",
    role: "CMO",
    company: "TechStream"
  },
  {
    id: '2',
    quote: "Professional, timely, and incredibly creative. They understood our vision from day one.",
    author: "David Chen",
    role: "Founder",
    company: "StartUp Inc"
  },
  {
    id: '3',
    quote: "The ROI on our latest campaign was double what we expected. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Director",
    company: "Global Ventures"
  }
];
