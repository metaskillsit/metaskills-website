import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import vi from "./locales/vi.json";
import { requestAutoTranslation, initAutoTranslateCache } from "@/lib/autoTranslate";

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
  // Enable saving missing keys for auto-translation
  saveMissing: true,
  missingKeyHandler: (lngs, ns, key, fallbackValue) => {
    const currentLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
    if (currentLang === "en") return; // No need to translate English

    // Get the English value as source
    const englishValue = i18n.getResource("en", ns, key) as string;
    if (!englishValue) return;

    // Request auto-translation (batched + cached)
    const translated = requestAutoTranslation(key, englishValue, currentLang);
    if (translated !== englishValue) {
      // Add translated value to i18next resources so it's used immediately
      i18n.addResource(currentLang, ns, key, translated);
    }
  },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem("i18nextLng", lng);

  const lang = lng.split("-")[0];
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
