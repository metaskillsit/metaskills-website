import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import vi from "./locales/vi.json";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
    vi: { translation: vi },
  },
  supportedLngs: ["en", "zh", "vi"],
  nonExplicitSupportedLngs: true,
  load: "languageOnly",
  fallbackLng: "en",
  lng: localStorage.getItem("i18nextLng") || "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
    lookupLocalStorage: "i18nextLng",
  },
  react: {
    useSuspense: false,
    bindI18n: "languageChanged loaded",
  },
});

document.documentElement.lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

export default i18n;
