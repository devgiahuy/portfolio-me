import { useEffect, useState } from "react";
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
import { useMouseGlow } from "./hooks/useMouseGlow";
import {
  navItems,
  skillCategories,
  iconStacks,
  projects,
  techExperienceItems,
} from "./data";
import RoadmapSection from "./components/RoadmapSection";

function App() {
  useMouseGlow();
  const [theme, toggleTheme] = useTheme();
  const [activeId, setActiveId] = useState<string>("about");

  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        githubUrl="https://github.com/devgiahuy"
        email="ngogiahuy.work@gmail.com"
        phone="+84-797-528-060"
      />

      <AboutSection
        id="about"
        title="About"
        subtitle="Motivated, curious, and focused on real-world impact."
        description="Motivated frontend intern passionate about building real-world web apps, improving React + TypeScript skills, and beginning to expand into Node.js backend. I focus on writing clean, maintainable code and creating seamless user experiences."
        location="Ho Chi Minh City, Vietnam"
        university="FPT University"
        // languages="English, Vietnamese"
        status="Available for Internship"
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

      <RoadmapSection />

      <ContactSection
        id="contact"
        title="Contact"
        subtitle="Reach out to discuss internship opportunities or collaborations."
        email="ngogiahuy.work@gmail.com"
        githubUrl="https://github.com/devgiahuy"
      />

      <Footer />
    </div>
  );
}

export default App;
