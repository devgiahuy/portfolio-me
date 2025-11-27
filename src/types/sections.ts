export type NavItem = {
  id: string;
  label: string;
};

export type SectionBaseProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export type HeroSectionProps = {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  githubUrl: string;
  email: string;
  phone: string;
};

export type AboutSectionProps = SectionBaseProps & {
  description: string;
  location: string;
  university: string;
  languages: string;
  status: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type SkillsSectionProps = SectionBaseProps & {
  categories: SkillCategory[];
  iconStacks: { label: string; short: string }[];
};

export type Project = {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  teamSize?: string;
  githubUrl: string;
  codeSnippet?: string;
};

export type ProjectsSectionProps = SectionBaseProps & {
  projects: Project[];
};

export type TechExperienceItem = {
  label: string;
  level: string;
  score: number;
  maxScore?: number;
  duration: string;
};

export type TechStackExperienceGraphSectionProps = SectionBaseProps & {
  items: TechExperienceItem[];
};

export type EducationSectionProps = SectionBaseProps & {
  school: string;
  degree: string;
  time: string;
  gpa: string;
};

export type ContactSectionProps = SectionBaseProps & {
  email: string;
  githubUrl: string;
};
