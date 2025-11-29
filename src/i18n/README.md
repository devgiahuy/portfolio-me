# i18n Implementation Guide

## Structure

```
src/
├── i18n/
│   ├── index.ts          # i18n configuration
│   └── locales/
│       ├── en.ts         # English translations
│       └── vn.ts         # Vietnamese translations
├── hooks/
│   └── useLanguage.ts    # Custom hook for i18n
└── components/
    └── LanguageToggle.tsx # Language switcher component
```

## How to Use

### 1. In any component, import the hook:

```tsx
import { useLanguage } from "../hooks/useLanguage";
```

### 2. Use the hook in your component:

```tsx
function MyComponent() {
  const { t, currentLanguage, toggleLanguage, changeLanguage } = useLanguage();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
    </div>
  );
}
```

### 3. Available Hook Methods:

- `t(key)` - Translate a key from the translation files
- `currentLanguage` - Current language ("en" or "vn")
- `toggleLanguage()` - Switch between EN and VN
- `changeLanguage(lang)` - Set specific language

## Adding New Translations

### 1. Add to English file (`src/i18n/locales/en.ts`):

```typescript
export const en = {
  mySection: {
    title: "My Title",
    description: "My Description",
  },
};
```

### 2. Add to Vietnamese file (`src/i18n/locales/vn.ts`):

```typescript
export const vn: TranslationKeys = {
  mySection: {
    title: "Tiêu đề của tôi",
    description: "Mô tả của tôi",
  },
};
```

### 3. Use in component:

```tsx
const { t } = useLanguage();
<h1>{t("mySection.title")}</h1>;
```

## Features

- ✅ Automatic language persistence in localStorage
- ✅ EN/VN toggle button in navbar
- ✅ Type-safe translations (TypeScript)
- ✅ Easy to add new languages
- ✅ Custom hook for clean component code

## Example Usage in Different Components

### Hero Section

```tsx
function HeroSection() {
  const { t } = useLanguage();

  return (
    <section>
      <h1>{t("hero.name")}</h1>
      <p>{t("hero.role")}</p>
      <p>{t("hero.subtitle")}</p>
      <button>{t("hero.cta.github")}</button>
    </section>
  );
}
```

### Contact Form

```tsx
function ContactSection() {
  const { t } = useLanguage();

  return (
    <form>
      <label>{t("contact.form.name")}</label>
      <input placeholder={t("contact.form.namePlaceholder")} />

      <label>{t("contact.form.email")}</label>
      <input placeholder={t("contact.form.emailPlaceholder")} />

      <button>{t("contact.form.submit")}</button>
    </form>
  );
}
```

## Language Toggle Component

Already integrated in Navbar! Click the language button to switch between English and Vietnamese.
