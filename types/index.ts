export type SkillBadge = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  badges: SkillBadge[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: string;
};

export type TechCloudItem = {
  label: string;
  glowDelay: number;
  glowDuration: number;
};
