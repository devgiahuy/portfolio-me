import type { Theme } from "../hooks/useTheme";
import { HiMoon, HiSun } from "react-icons/hi";

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
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
        {isDark ? (
          <HiMoon className="h-3.5 w-3.5 text-neonPurple" />
        ) : (
          <HiSun className="h-3.5 w-3.5 text-primary" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
