import type { SkillCategory } from "../types/sections";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks / Libraries",
    items: ["React", "Next.js"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "GitHub Actions", "Figma"],
  },
  {
    title: "Soft Skills",
    items: ["Teamwork", "Communication", "Self-learning", "Time Management"],
  },
];

export const iconStacks = [
  { label: "React", short: "R" },
  { label: "TypeScript", short: "TS" },
  { label: "Next.js", short: "N" },
  { label: "TailwindCSS", short: "Tw" },
  { label: "Zustand", short: "Z" },
  { label: "React Query", short: "RQ" },
  { label: "Git / GitHub", short: "G" },
  { label: "Figma", short: "Fg" },
];
