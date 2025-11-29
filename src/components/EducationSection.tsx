import { useLanguage } from "../hooks/useLanguage";
import type { EducationSectionProps } from "../types/sections";

function EducationSection({
  id,
  school,
  degree,
  time,
  gpa,
}: EducationSectionProps) {
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
              {t("education.title")}
            </h2>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-300">
              {t("education.subtitle")}
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark">
          <div className="absolute left-[1.85rem] top-1/2 h-24 -translate-y-1/2 border-l border-dashed border-emerald-400/70" />
          <div className="flex items-start gap-4">
            <div className="relative mt-1">
              <span className="flex h-3 w-3 items-center justify-center rounded-full border border-emerald-400 bg-emerald-400 shadow-cardSoft" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                {degree}
              </h3>
              <p className="mt-1 text-base font-medium text-primary dark:text-neonPurple">
                {school}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {time}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                GPA: {gpa}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
