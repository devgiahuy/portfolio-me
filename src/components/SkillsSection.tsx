import React from "react";
import type { SkillsSectionProps } from "../types/sections";

const SkillsSection: React.FC<SkillsSectionProps> = ({
  id,
  title,
  subtitle,
  categories,
  iconStacks,
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

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group rounded-3xl border border-slate-200 bg-cardLight p-5 shadow-cardSoft transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg dark:border-slate-800 dark:bg-cardDark dark:hover:border-neonPurple/70 dark:hover:shadow-cardNeon"
              >
                <h3 className="mb-2 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 transition group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-neonPurple/15 dark:group-hover:text-neonPurple"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Icon grid */}
          <div className="rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark">
            <h3 className="mb-4 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Core Frontend Stack
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {iconStacks.map((stack) => (
                <div
                  key={stack.label}
                  className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white/80 p-3 text-center text-xs shadow-cardSoft transition hover:-translate-y-0.5 hover:border-primary/70 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-neonPurple/80 dark:hover:shadow-cardNeon"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary group-hover:bg-primary/20 group-hover:text-primary dark:bg-neonPurple/15 dark:text-neonPurple dark:group-hover:bg-neonPurple/20">
                    {stack.short}
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    {stack.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              Focused on building reliable UI architecture, reusable components,
              and smooth developer workflows with modern tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
