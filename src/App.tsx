import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStackExperienceGraphSection from "./components/TechStackExperienceGraphSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import type {
  NavItem,
  Project,
  TechExperienceItem,
  SkillCategory,
} from "./types/sections";

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "tech-experience", label: "Experience Graph" },
  { id: "contact", label: "Contact" },
];

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top:
        el.getBoundingClientRect().top +
        window.scrollY -
        (id === "about" ? 96 : 72),
      behavior: "smooth",
    });
  };

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks / Libraries",
      items: ["React", "Next.js"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "GitHub Actions", "Figma"],
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Communication", "Self-learning", "Time Management"],
    },
  ];

  const iconStacks = [
    { label: "React", short: "R" },
    { label: "TypeScript", short: "TS" },
    { label: "Next.js", short: "N" },
    { label: "TailwindCSS", short: "Tw" },
    { label: "Zustand", short: "Z" },
    { label: "React Query", short: "RQ" },
    { label: "Git / GitHub", short: "G" },
    { label: "Figma", short: "Fg" },
  ];

  const projects: Project[] = [
    {
      title: "Green Wheel (EV Rental Platform)",
      role: "Frontend Developer",
      description:
        "A web app for electric vehicle rental enabling users to search EV availability, manage bookings, and process payments.",
      techStack: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "TanStack Query",
        "Axios",
        "Zustand",
        "Formik/Yup",
        "i18n",
        "NextStep.js",
      ],
      teamSize: "5",
      githubUrl: "https://github.com/your-handle/green-wheel",
      codeSnippet:
        "const { data: vehicles } = useQuery(['vehicles'], fetchVehicles);\n\nreturn <VehicleGrid items={vehicles} />;",
    },
    {
      title: "Ecom Orchid (Mini Project)",
      role: "Frontend Developer",
      description:
        "A modern e-commerce web app for browsing orchids, managing carts, and placing orders with a responsive UI.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Zustand (persist)",
        "React Query",
        "TailwindCSS",
        "HeroUI",
        "Axios",
        "JSON-Server / MockAPI",
      ],
      githubUrl: "https://github.com/your-handle/ecom-orchid",
      codeSnippet:
        "const useCartStore = create<CartState>()(\n  persist((set) => ({ items: [], addItem: (p) => set(...)}), { name: 'cart' })\n);",
    },
  ];

  const techExperienceItems: TechExperienceItem[] = [
    {
      label: "React",
      level: "Intermediate",
      score: 4,
      duration: "~1.5 years",
    },
    {
      label: "TypeScript",
      level: "Intermediate",
      score: 4,
      duration: "~1.5 years",
    },
    {
      label: "Next.js",
      level: "Intermediate",
      score: 3.5,
      duration: "~1 year",
    },
    {
      label: "TailwindCSS",
      level: "Intermediate",
      score: 4,
      duration: "~1.5 years",
    },
    {
      label: "Zustand",
      level: "Comfortable",
      score: 3.5,
      duration: "~1 year",
    },
    {
      label: "React Query / TanStack",
      level: "Comfortable",
      score: 3.5,
      duration: "~1 year",
    },
    {
      label: "Git / GitHub",
      level: "Intermediate",
      score: 4,
      duration: "~2 years",
    },
  ];

  return (
    <div className="min-h-screen bg-backgroundLight text-slate-900 dark:bg-backgroundDark dark:text-slate-50">
      <Navbar
        items={navItems}
        activeId={activeId}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* The hero is above the first observed section to keep About as first nav target */}
      <HeroSection
        id="hero"
        name="Ngo Gia Huy"
        role="Frontend Development Intern"
        subtitle="I build clean, modern, responsive web interfaces using React, TypeScript, and Next.js."
        githubUrl="https://github.com/your-handle"
        email="you@example.com"
        phone="+84-000-000-000"
      />

      <AboutSection
        id="about"
        title="About"
        subtitle="Motivated, curious, and focused on real-world impact."
        description="Motivated frontend intern passionate about building real-world web apps, improving React + TypeScript skills, and beginning to expand into Node.js backend. I focus on writing clean, maintainable code and creating seamless user experiences."
        location="Ho Chi Minh City, Vietnam"
        university="FPT University"
        languages="English, Vietnamese"
        status="Available for Internship"
      />

      <SkillsSection
        id="skills"
        title="Skills"
        subtitle="Core technologies and collaboration skills I bring to your team."
        categories={skillCategories}
        iconStacks={iconStacks}
      />

      <ProjectsSection
        id="projects"
        title="Projects"
        subtitle="Selected work demonstrating my frontend capabilities."
        projects={projects}
      />

      <TechStackExperienceGraphSection
        id="tech-experience"
        title="Tech Stack Experience"
        subtitle="Comfort level across my main tools and frameworks."
        items={techExperienceItems}
      />

      <EducationSection
        id="education"
        title="Education"
        subtitle="Formal training in software engineering fundamentals."
        school="FPT University HCM"
        degree="Software Engineering"
        time="09/2022 – 04/2027"
        gpa="8.0 / 10"
      />

      <ContactSection
        id="contact"
        title="Contact"
        subtitle="Reach out to discuss internship opportunities or collaborations."
        email="you@example.com"
        githubUrl="https://github.com/your-handle"
      />

      <Footer />
    </div>
  );
};

export default App;
