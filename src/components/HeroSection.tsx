import { useLanguage } from "../hooks/useLanguage";
import type { HeroSectionProps } from "../types/sections";
import { FaGithub, FaReact } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function HeroSection({
  id,

  githubUrl,
  email,
  phone,
}: HeroSectionProps) {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const floatingIconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate badge
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
      });

      // Animate title with word reveal
      if (titleRef.current) {
        const titleText = titleRef.current.textContent || "";
        const words = titleText.split(" ");
        titleRef.current.innerHTML = "";

        words.forEach((word, index) => {
          const span = document.createElement("span");
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.textContent = word;
          titleRef.current!.appendChild(span);

          if (index < words.length - 1) {
            titleRef.current!.appendChild(document.createTextNode(" "));
          }
        });

        const spans = titleRef.current.querySelectorAll("span");
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
        });
      }

      // Animate role and subtitle
      gsap.from(roleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1,
        ease: "power3.out",
      });

      // Animate code card
      gsap.from(codeCardRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.8,
        delay: 1.2,
        ease: "back.out(1.7)",
      });

      // Animate CTAs
      gsap.from(ctaRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.4,
        ease: "power3.out",
      });

      // Animate avatar
      gsap.from(avatarRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.5)",
      });

      // Animate floating tech icons
      floatingIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.from(icon, {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            delay: 1.5 + index * 0.15,
            ease: "back.out(2)",
          });

          // Continuous floating animation
          gsap.to(icon, {
            y: -15,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5 + index * 0.15,
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={heroRef}
      id={id}
      className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-backgroundLight via-backgroundLight to-white pb-16 pt-10 dark:border-slate-800 dark:from-backgroundDark dark:via-backgroundDark dark:to-backgroundDark"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl dark:bg-neonPurple/30" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-secondary/20 blur-3xl dark:bg-neonCyan/30" />
        <div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl dark:bg-neonPurple/20" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        {/* Text */}
        <div className="flex-1 space-y-6">
          <div
            ref={badgeRef}
            className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-cardSoft backdrop-blur-sm dark:border-neonPurple/40 dark:bg-slate-900/70 dark:text-slate-200 dark:shadow-cardNeon"
          >
            <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t("hero.availability")}
          </div>

          <div>
            <h1
              ref={titleRef}
              className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50"
            >
              {t("hero.name")}
            </h1>
            <p
              ref={roleRef}
              className="mt-2 text-xl font-medium text-primary dark:text-neonPurple"
            >
              {t("hero.role")}
            </p>
            <p
              ref={subtitleRef}
              className="mt-4 text-lg text-slate-700 dark:text-slate-300"
            >
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 sm:w-full lg:w-screen max-w-[50rem]">
            {/* Terminal card */}
            {/* <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-sm shadow-cardSoft backdrop-blur-sm dark:border-slate-800 dark:bg-cardDark/80 dark:shadow-cardNeon w-full">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                  portfolio@huy: ~
                </span>
              </div>
              <pre className="font-mono text-[11px] sm:text-xs leading-relaxed text-slate-800 dark:text-slate-200 overflow-x-auto">
                <code className="block">
                  <div className="mb-1">
                    <span className="text-emerald-500">$</span>{" "}
                    <span className="text-slate-800 dark:text-slate-100">
                      npm create huy-portfolio
                    </span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 mb-1">
                    › Initializing frontend intern...
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    › Deploying to production{" "}
                    <span className="text-amber-400">🚀</span>
                  </div>
                </code>
              </pre>
            </div> */}

            {/* Code snippet */}
            <div
              ref={codeCardRef}
              className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-4 text-sm shadow-cardSoft backdrop-blur-sm dark:border-neonPurple/40 dark:from-neonPurple/20 dark:via-slate-900 dark:to-neonCyan/10 dark:shadow-cardNeon"
            >
              <div className="mb-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span>{t("hero.code.comment")}</span>
                <span>{t("hero.code.language")}</span>
              </div>
              <pre className="font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-50 overflow-x-auto">
                <code>
                  {`const developer = {
  name: "Ngo Gia Huy",
  role: "Frontend Intern",
  stack: ["React", "TypeScript", "Next.js"],
};`}
                </code>
              </pre>
            </div>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 shadow-cardSoft transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-neonPurple dark:hover:text-neonPurple"
            >
              <FaGithub className="h-4 w-4" />
              {t("hero.cta.github")}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow-cardSoft transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <HiMail className="h-4 w-4" />
              {t("hero.cta.email")}
            </a>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-neonPurple dark:hover:text-neonPurple"
            >
              <HiPhone className="h-4 w-4" />
              {t("hero.cta.phone")}
            </a>
          </div>
        </div>

        {/* Avatar / floating tech icons */}
        <div className="relative mt-4 flex-1 lg:mt-0">
          <div
            ref={avatarRef}
            className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-cardSoft dark:from-neonPurple dark:via-slate-900 dark:to-neonCyan dark:shadow-cardNeon"
          >
            <div className="h-52 w-52 rounded-full border border-white/60 bg-white/90 shadow-cardSoft backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/90">
              <div className="flex h-full flex-col items-center justify-center text-center px-6">
                <span className="text-sm font-medium uppercase tracking-tight text-primary dark:text-neonPurple">
                  {t("hero.avatar.role")}
                </span>
                <span className="mt-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  {t("hero.avatar.description")}
                </span>
                <span className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {t("hero.avatar.focus")}
                </span>
              </div>
            </div>

            {/* Floating tech icons */}
            <div
              ref={(el) => {
                floatingIconsRef.current[0] = el;
              }}
              className="pointer-events-none absolute top-3 left-0"
            >
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-2.5 py-1.5 text-xs font-medium text-slate-800 shadow-cardSoft dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100">
                <span className="mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                  {/* ⚛ */}
                  <FaReact />
                </span>
                React
              </div>
            </div>
            <div
              ref={(el) => {
                floatingIconsRef.current[1] = el;
              }}
              className="pointer-events-none absolute -right-9 top-10"
            >
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-2.5 py-1.5 text-xs font-medium text-slate-800 shadow-cardSoft dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100">
                <span className="mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  {/* TS */}
                  <BiLogoTypescript />
                </span>
                TypeScript
              </div>
            </div>
            <div
              ref={(el) => {
                floatingIconsRef.current[2] = el;
              }}
              className="pointer-events-none absolute -bottom-3 left-10"
            >
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-2.5 py-1.5 text-xs font-medium text-slate-800 shadow-cardSoft dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100">
                <span className="mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-slate-50">
                  {/* N */}
                  <SiNextdotjs />
                </span>
                Next.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
