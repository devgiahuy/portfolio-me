import React from "react";
import type { ProjectsSectionProps } from "../types/sections";

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  id,
  title,
  subtitle,
  projects,
}) => {
  return (
    <section
      id={id}
      className="border-b border-slate-200/70 bg-backgroundLight py-14 dark:border-slate-800 dark:bg-backgroundDark"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-lg text-slate-600 dark:text-slate-300">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-lg dark:border-slate-800 dark:bg-cardDark dark:hover:border-neonPurple/80 dark:hover:shadow-cardNeon"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary dark:text-neonPurple">
                    {project.role}
                  </p>
                </div>
                {project.teamSize && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    Team size: {project.teamSize}
                  </span>
                )}
              </div>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-neonPurple/15 dark:group-hover:text-neonPurple"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.codeSnippet && (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100">
                  <div className="mb-1 flex items-center justify-between text-[0.7rem] text-slate-500 dark:text-slate-400">
                    <span>// snippet</span>
                    <span>TypeScript</span>
                  </div>
                  <pre className="font-mono text-xs">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              )}

              <div className="mt-5 flex justify-between items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80 dark:text-neonPurple dark:hover:text-neonPurple/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-4.3 1.5-4.3-2.5-6-3" />
                    <path d="M15 19c4.3 1.5 4.3-2.5 6-3" />
                    <path d="M9 22c1 .5 2 .5 3 0 1 .5 2 .5 3 0" />
                    <path d="M9 2C5 2 3 4 3 8c0 5 3 9 9 9s9-4 9-9c0-4-2-6-6-6" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
