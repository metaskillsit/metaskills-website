import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import vi from "./locales/vi.json";
import { autoTranslatePostProcessor, initAutoTranslateCache, clearQueuedKeys } from "@/lib/autoTranslate";

// Register the post-processor plugin
i18n.use(autoTranslatePostProcessor);

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
    order: ["localStorage"],
    caches: ["localStorage"],
    lookupLocalStorage: "i18nextLng",
  },
  react: {
    useSuspense: false,
    bindI18n: "languageChanged loaded",
  },
  // Activate our auto-translate postProcessor on every t() call
  postProcess: ["autoTranslate"],
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem("i18nextLng", lng);

  const lang = lng.split("-")[0];
  clearQueuedKeys(); // Allow re-queuing for new language
  if (lang !== "en") {
    initAutoTranslateCache(lang);
  }
});

// Initialize cache for current language
const currentLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
if (currentLang !== "en") {
  initAutoTranslateCache(currentLang);
}

export default i18n;
