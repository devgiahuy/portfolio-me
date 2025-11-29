import { useLanguage } from "../hooks/useLanguage";
import type { TechStackExperienceGraphSectionProps } from "../types/sections";

function TechStackExperienceGraphSection({
  id,
  items,
}: TechStackExperienceGraphSectionProps) {
  const { t } = useLanguage();
  return (
    <section
      id={id}
      className="border-b border-slate-200/70 bg-backgroundLight py-14 dark:border-slate-800 dark:bg-backgroundDark"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              {t("techExperience.title")}
            </h2>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-300">
              {t("techExperience.subtitle")}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => {
              const max = item.maxScore ?? 5;
              const percent = (item.score / max) * 100;
              return (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900 dark:text-slate-50">
                        {item.label}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {item.level}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {item.duration}
                    </span>
                  </div>
                  <div className="relative h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all dark:from-neonPurple dark:via-neonCyan dark:to-neonPurple"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackExperienceGraphSection;
