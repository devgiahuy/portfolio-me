import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../hooks/useLanguage";
import type { NavItem } from "../types/sections";
import type { Theme } from "../hooks/useTheme";

type NavbarProps = {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
};

function Navbar({
  items,
  activeId,
  onNavigate,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-backgroundLight/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-backgroundDark/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary shadow-cardSoft dark:shadow-cardNeon">
            <img
              // src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/433446266_758349243066734_884520383743627659_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=g_wtduZOv7YQ7kNvwEMXdWM&_nc_oc=Adk-UwvW4dVQ2B9dnLOy2p2FU47x_BOpKgs9-yR6XAagx9BUg2CSxZgIcNcZgkrfM_oBlKCUGkD2I06Nbk2OCzXB&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=X5VXxKm88oGGwxgTGK9caw&oh=00_Afi1qBYmiyAVOVFnnkuLzS94RTdE7PZhlinCWYRcy53tXg&oe=692ED7EB"
              src="img/me.jpg"
              alt="Ngo Gia Huy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              {t("navbar.name")}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {t("navbar.role")}
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
                  {t(item.label)}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent dark:from-neonPurple dark:via-neonCyan dark:to-neonPurple" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
