import { useLanguage } from "../hooks/useLanguage";
import { HiGlobe } from "react-icons/hi";

function LanguageToggle() {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-neonPurple dark:hover:text-neonPurple"
      aria-label="Toggle language"
    >
      <HiGlobe className="h-4 w-4" />
      <span className="text-xs font-semibold uppercase">
        {currentLanguage === "en" ? "EN" : "VN"}
      </span>
    </button>
  );
}

export default LanguageToggle;
