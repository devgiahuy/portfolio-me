import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { ContactSectionProps } from "../types/sections";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactSection({ id, email, githubUrl }: ContactSectionProps) {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and subtitle
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate form
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: -40,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animate sidebar
      if (sidebarRef.current) {
        gsap.from(sidebarRef.current, {
          opacity: 0,
          x: 40,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Create mailto link with pre-filled content
    const subject = `${t("contact.form.name")}: ${form.name}`;
    const body = `${t("contact.form.name")}: ${form.name}%0D%0A${t(
      "contact.form.email"
    )}: ${form.email}%0D%0A%0D%0A${t("contact.form.message")}:%0D%0A${
      form.message
    }`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setStatus("success");

    // Reset form after a delay
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 2000);
  };

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
              {t("contact.title")}
            </h2>
            <p
              ref={subtitleRef}
              className="mt-1 text-lg text-slate-600 dark:text-slate-300"
            >
              {t("contact.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <form
            ref={formRef}
            className="space-y-4 rounded-3xl border border-slate-200 bg-cardLight p-6 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-3 py-2.5 text-base text-slate-900 shadow-inner shadow-slate-900/5 outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-neonPurple dark:focus:ring-neonPurple/40"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 bg-white/80 px-3 py-2.5 text-base text-slate-900 shadow-inner shadow-slate-900/5 outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-neonPurple dark:focus:ring-neonPurple/40"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-white/80 px-3 py-2.5 text-base text-slate-900 shadow-inner shadow-slate-900/5 outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-neonPurple dark:focus:ring-neonPurple/40"
                placeholder={t("contact.form.messagePlaceholder")}
              />
            </div>

            {status === "success" && (
              <div className="rounded-xl bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
                {t("contact.form.success")}
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                {t("contact.form.error")}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "success"}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-2.5 text-sm font-semibold tracking-tight text-slate-50 shadow-cardSoft transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 dark:from-neonPurple dark:via-neonCyan dark:to-neonPurple dark:shadow-cardNeon"
            >
              {status === "success"
                ? t("contact.form.sending")
                : t("contact.form.submit")}
            </button>
          </form>

          <div ref={sidebarRef} className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-cardLight p-5 shadow-cardSoft dark:border-slate-800 dark:bg-cardDark">
              <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                {t("contact.quickLinks")}
              </h3>
              <div className="mt-4 space-y-3 text-base">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-slate-700 transition hover:text-primary dark:text-slate-200 dark:hover:text-neonPurple"
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
                    <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {email}
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-700 transition hover:text-primary dark:text-slate-200 dark:hover:text-neonPurple"
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
                  {t("contact.quickLinksGithub")}
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-5 text-base text-slate-700 dark:border-neonPurple/40 dark:bg-neonPurple/10 dark:text-slate-100">
              <p>{t("contact.note")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
