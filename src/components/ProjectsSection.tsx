import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import type { ProjectsSectionProps, Project } from "../types/sections";
import { FaGithub } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function ProjectCard({
  project,
  images,
}: {
  project: Project;
  images: string[];
}) {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="group flex h-full w-full flex-col rounded-3xl border border-slate-200 bg-cardLight shadow-cardSoft transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-lg dark:border-slate-800 dark:bg-cardDark dark:hover:border-neonPurple/80 dark:hover:shadow-cardNeon overflow-hidden">
      {images.length > 0 && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400/e2e8f0/64748b?text=Project+Image";
            }}
          />

          {images.length > 1 && (
            <>
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous image"
              >
                <HiChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next image"
              >
                <HiChevronRight className="h-4 w-4" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      index === currentImageIndex
                        ? "bg-white w-4"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              {project.title.includes("Green Wheel")
                ? t("projects.greenWheel.title")
                : t("projects.ecomOrchid.title")}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary dark:text-neonPurple">
              {project.title.includes("Green Wheel")
                ? t("projects.greenWheel.role")
                : t("projects.ecomOrchid.role")}
            </p>
          </div>
          {project.teamSize && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {t("projects.teamSize")}: {project.teamSize}
            </span>
          )}
        </div>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          {project.title.includes("Green Wheel")
            ? t("projects.greenWheel.description")
            : t("projects.ecomOrchid.description")}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-neonPurple/15 dark:group-hover:text-neonPurple"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex justify-between items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80 dark:text-neonPurple dark:hover:text-neonPurple/80"
          >
            <FaGithub className="h-4 w-4" />
            {t("projects.viewGithub")}
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection({
  id,

  projects,
}: ProjectsSectionProps) {
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
              {t("projects.title")}
            </h2>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-300">
              {t("projects.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => {
            const projectImages =
              project.images || (project.image ? [project.image] : []);
            return (
              <ProjectCard
                key={project.title}
                project={project}
                images={projectImages}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
