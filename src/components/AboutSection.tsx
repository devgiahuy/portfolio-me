import { useLanguage } from "../hooks/useLanguage";
import type { AboutSectionProps } from "../types/sections";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutSection({ id }: AboutSectionProps) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descCardRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and subtitle
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate cards with stagger
      gsap.from([descCardRef.current, infoCardRef.current], {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate info items inside the card
      const infoItems = infoCardRef.current?.querySelectorAll("dl > div");
      if (infoItems) {
        gsap.from(infoItems, {
          opacity: 0,
          x: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoCardRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id={id}
      className="border-b border-slate-200/70 bg-backgroundLight py-14 dark:border-slate-800 dark:bg-backgroundDark"
    >
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              ref={titleRef}
              className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50"
            >
              {t("about.title")}
            </h2>
            <p
              ref={subtitleRef}
              className="mt-1 text-lg text-slate-600 dark:text-slate-300"
            >
              {t("about.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <div
            ref={descCardRef}
            className="p-6 text-base border rounded-3xl border-slate-200 bg-cardLight text-slate-700 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark dark:text-slate-200"
          >
            {t("about.description")}
          </div>
          <div
            ref={infoCardRef}
            className="p-6 border rounded-3xl border-slate-200 bg-cardLight shadow-cardSoft dark:border-slate-800 dark:bg-cardDark"
          >
            <dl className="space-y-4 text-base">
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
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
                  {t("about.info.location")}
                </dt>
                <dd className="font-medium text-slate-900 dark:text-slate-50">
                  {t("about.info.locationValue")}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
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
                  {t("about.info.university")}
                </dt>
                <dd className="font-medium text-slate-900 dark:text-slate-50">
                  {t("about.info.universityValue")}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
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
                  {t("about.info.status")}
                </dt>
                <dd>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {t("about.info.statusValue")}
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
