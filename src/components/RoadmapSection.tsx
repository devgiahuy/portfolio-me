import { useLanguage } from "../hooks/useLanguage";
import { roadmapItems } from "../data/roadmapItem";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RoadmapSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

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

      // Animate timeline
      gsap.from(timelineRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate timeline items
      const timelineItems = timelineRef.current?.querySelectorAll("li");
      if (timelineItems) {
        gsap.from(timelineItems, {
          opacity: 0,
          x: -20,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Animate summary card
      gsap.from(summaryRef.current, {
        opacity: 0,
        x: 40,
        scale: 0.95,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: summaryRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="career-roadmap"
      className="border-b border-slate-200/70 bg-backgroundLight py-14 dark:border-slate-800 dark:bg-backgroundDark"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              ref={titleRef}
              className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50"
            >
              {t("roadmap.title")}
            </h2>
            <p
              ref={subtitleRef}
              className="mt-1 text-lg text-slate-600 dark:text-slate-300"
            >
              {t("roadmap.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Timeline */}
          <ol
            ref={timelineRef}
            className="relative space-y-4 rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark"
          >
            <div className="pointer-events-none absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent dark:from-neonPurple dark:via-neonCyan"></div>

            {roadmapItems.map((item) => (
              <li key={item.title} className="relative pl-8">
                <div
                  className={`absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white ${item.color} shadow-sm dark:border-slate-900`}
                ></div>
                <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  {t(item.title)}
                </p>
                <p className="mt-1 text-base text-slate-600 dark:text-slate-300">
                  {t(item.description)}
                </p>
              </li>
            ))}
          </ol>

          {/* Summary card */}
          <div
            ref={summaryRef}
            className="rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark"
          >
            <h3 className="mb-3 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              {t("roadmap.summaryTitle")}
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300">
              {t("roadmap.summaryDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
