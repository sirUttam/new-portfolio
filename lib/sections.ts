import type { ContactLink, ProjectItem, SkillGroup, TechCloudItem } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Stack',
    description: 'Robust APIs, services, and cloud-ready server-side systems.',
    badges: [
      { name: 'FastAPI', icon: 'FastAPI' },
      { name: 'Python', icon: 'Python' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'REST APIs', icon: 'Api' }
    ]
  },
  {
    title: 'Data Stack',
    description: 'Analysis, modeling, and production-ready ML tools.',
    badges: [
      { name: 'Pandas', icon: 'Code2' },
      { name: 'NumPy', icon: 'Hash' },
      { name: 'Scikit-Learn', icon: 'Activity' },
      { name: 'Matplotlib', icon: 'ChartLine' }
    ]
  },
  {
    title: 'Tools Stack',
    description: 'Developer workflows optimized for reliability and velocity.',
    badges: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'VS Code', icon: 'Monitor' },
      { name: 'Linux', icon: 'Terminal' }
    ]
  },
  {
    title: 'Web Stack',
    description: 'Modern web delivery with strong frontend architecture.',
    badges: [
      { name: 'Next.js', icon: 'Layers' },
      { name: 'TypeScript', icon: 'Type' },
      { name: 'Tailwind', icon: 'Sparkles' },
      { name: 'JavaScript', icon: 'Zap' }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Edge AI Analytics',
    description: 'Secure inference pipelines with fast API endpoints and observability.',
    tech: ['FastAPI', 'PostgreSQL', 'Dockerless', 'Python'],
    githubUrl: 'https://github.com/username/edge-ai-analytics',
    demoUrl: 'https://example.com/edge-ai-analytics'
  },
  {
    title: 'Production Data Stack',
    description: 'Data transformation suite with streaming and model-ready outputs.',
    tech: ['Pandas', 'NumPy', 'Scikit-Learn', 'Python'],
    githubUrl: 'https://github.com/username/production-data-stack',
    demoUrl: 'https://example.com/production-data-stack'
  },
  {
    title: 'Developer Dashboard',
    description: 'A refined web experience for monitoring deployed services and metrics.',
    tech: ['Next.js', 'Tailwind', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/username/developer-dashboard',
    demoUrl: 'https://example.com/developer-dashboard'
  },
  {
    title: 'API Performance Suite',
    description: 'Benchmarking platform for backend endpoints and API reliability.',
    tech: ['FastAPI', 'PostgreSQL', 'Python', 'REST'],
    githubUrl: 'https://github.com/username/api-performance-suite',
    demoUrl: 'https://example.com/api-performance-suite'
  },
  {
    title: 'Model Deployment Flow',
    description: 'Scalable model serving architecture with automated validation.',
    tech: ['Python', 'Scikit-Learn', 'FastAPI', 'SQL'],
    githubUrl: 'https://github.com/username/model-deployment-flow',
    demoUrl: 'https://example.com/model-deployment-flow'
  },
  {
    title: 'Insight Portal',
    description: 'Interactive analytics portal built for business-facing engineering teams.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'JavaScript'],
    githubUrl: 'https://github.com/username/insight-portal',
    demoUrl: 'https://example.com/insight-portal'
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/username',
    icon: 'Github'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/username',
    icon: 'Linkedin'
  },
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: 'Mail'
  }
];

export const techCloud: TechCloudItem[] = [
  { label: 'Python', glowDelay: 0.1, glowDuration: 2.6 },
  { label: 'FastAPI', glowDelay: 0.35, glowDuration: 2.8 },
  { label: 'TypeScript', glowDelay: 0.7, glowDuration: 2.4 },
  { label: 'JavaScript', glowDelay: 1.05, glowDuration: 2.7 },
  { label: 'Next.js', glowDelay: 1.4, glowDuration: 2.5 },
  { label: 'Tailwind CSS', glowDelay: 1.75, glowDuration: 2.9 },
  { label: 'PostgreSQL', glowDelay: 2.1, glowDuration: 2.6 },
  { label: 'SQL', glowDelay: 2.45, glowDuration: 2.8 },
  { label: 'Pandas', glowDelay: 2.8, glowDuration: 2.4 },
  { label: 'NumPy', glowDelay: 3.15, glowDuration: 2.7 },
  { label: 'Scikit-Learn', glowDelay: 3.5, glowDuration: 2.9 },
  { label: 'Matplotlib', glowDelay: 3.85, glowDuration: 2.5 },
  { label: 'Git', glowDelay: 4.2, glowDuration: 2.6 },
  { label: 'GitHub', glowDelay: 4.55, glowDuration: 2.8 },
  { label: 'Linux', glowDelay: 4.9, glowDuration: 2.4 },
  { label: 'Docker', glowDelay: 5.25, glowDuration: 2.7 },
  { label: 'REST APIs', glowDelay: 5.6, glowDuration: 2.9 },
  { label: 'C', glowDelay: 5.95, glowDuration: 2.5 },
  { label: 'C++', glowDelay: 6.3, glowDuration: 2.6 },
  { label: 'VS Code', glowDelay: 6.65, glowDuration: 2.8 }
];
