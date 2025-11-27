import React from "react";
import type { Theme } from "../hooks/useTheme";

const ThemeToggle: React.FC<{ theme: Theme; onToggle: () => void }> = ({
  theme,
  onToggle,
}) => {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative inline-flex h-7 w-12 items-center rounded-full border border-slate-300 bg-slate-100/80 p-0.5 transition-colors duration-300 ease-out hover:border-primary/80 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70"
    >
      <span
        className={`absolute inset-0 rounded-full bg-gradient-to-r transition-opacity duration-300 ease-out ${
          isDark
            ? "from-neonPurple/60 via-neonCyan/60 to-neonPurple/60 opacity-100"
            : "opacity-0"
        }`}
      />
      <span
        className={`relative z-10 inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-md shadow-slate-900/10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-slate-900 ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {/* Sun / Moon (lucide-like) */}
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 text-neonPurple"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
