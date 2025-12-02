import { useLanguage } from "../hooks/useLanguage";
import type { EducationSectionProps } from "../types/sections";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function EducationSection({
  id,
  school,
  degree,
  time,
  gpa,
}: EducationSectionProps) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

      // Animate card
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate timeline elements
      gsap.from(dotRef.current, {
        scale: 0,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(lineRef.current, {
        height: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate content
      const contentElements = cardRef.current?.querySelectorAll("h3, p");
      if (contentElements) {
        gsap.from(contentElements, {
          opacity: 0,
          x: 20,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              ref={titleRef}
              className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50"
            >
              {t("education.title")}
            </h2>
            <p
              ref={subtitleRef}
              className="mt-1 text-lg text-slate-600 dark:text-slate-300"
            >
              {t("education.subtitle")}
            </p>
          </div>
        </div>

        <div
          ref={cardRef}
          className="relative rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark"
        >
          <div
            ref={lineRef}
            className="absolute left-[1.85rem] top-1/2 h-24 -translate-y-1/2 border-l border-dashed border-emerald-400/70"
          />
          <div className="flex items-start gap-4">
            <div className="relative mt-1">
              <span
                ref={dotRef}
                className="flex h-3 w-3 items-center justify-center rounded-full border border-emerald-400 bg-emerald-400 shadow-cardSoft"
              />
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
