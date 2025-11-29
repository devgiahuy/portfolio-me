import { useLanguage } from "../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200/70 bg-backgroundLight py-6 text-sm text-slate-500 dark:border-slate-800 dark:bg-backgroundDark dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} {t("footer.name")}.
          {/* All rights reserved. */}
        </p>
        <p className="text-sm">
          {t("footer.builtWith")}
          {/* Built with React, TypeScript and a modern frontend toolchain. */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
