import React from "react";
import ThemeToggle from "./ThemeToggle";
import type { NavItem } from "../types/sections";
import type { Theme } from "../hooks/useTheme";

type NavbarProps = {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  items,
  activeId,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-backgroundLight/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-backgroundDark/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-semibold tracking-tight text-white shadow-cardSoft dark:shadow-cardNeon">
            NH
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Ngo Gia Huy
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Frontend Development Intern
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-4 text-sm">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-950"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  }`}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent dark:from-neonPurple dark:via-neonCyan dark:to-neonPurple" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
