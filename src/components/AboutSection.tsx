import type { AboutSectionProps } from "../types/sections";

function AboutSection({
  id,
  title,
  subtitle,
  description,
  location,
  university,
  // languages,
  status,
}: AboutSectionProps) {
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

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <div className="rounded-3xl border border-slate-200 bg-cardLight p-6 text-base text-slate-700 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark dark:text-slate-200">
            {description}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark">
            <dl className="space-y-4 text-base">
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
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
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Location
                </dt>
                <dd className="font-medium text-slate-900 dark:text-slate-50">
                  {location}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
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
                    <path d="M22 12h-4" />
                    <path d="M2 12h4" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M5 19 2 22" />
                    <path d="m19 5 3-3" />
                    <path d="m5 5-3-3" />
                    <path d="m19 19 3 3" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  University
                </dt>
                <dd className="font-medium text-slate-900 dark:text-slate-50">
                  {university}
                </dd>
              </div>
              {/* <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
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
                    <path d="M9 4v2" />
                    <path d="M15 4v2" />
                    <rect width="16" height="16" x="4" y="3" rx="2" ry="2" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                  Languages
                </dt>
                <dd className="font-medium text-slate-900 dark:text-slate-50">
                  {languages}
                </dd>
              </div> */}
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
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
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <path d="M12 12h.01" />
                    <path d="M7 12h.01" />
                    <path d="M17 12h.01" />
                  </svg>
                  Status
                </dt>
                <dd>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {status}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
