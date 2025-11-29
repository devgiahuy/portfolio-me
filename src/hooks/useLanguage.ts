import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export type Language = "en" | "vn";

export const useLanguage = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (i18n.language as Language) || "en"
  );

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vn")) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => {
    const newLang: Language = currentLanguage === "en" ? "vn" : "en";
    changeLanguage(newLang);
  };

  return {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    t,
  };
};
