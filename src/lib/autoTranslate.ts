import { supabase } from "@/integrations/supabase/client";
import i18n from "i18next";

// In-memory cache for translated strings per session
const translationCache: Record<string, Record<string, string>> = {};

// Track keys we've already queued to avoid re-queuing
const queuedKeys = new Set<string>();

// Pending batch: collects keys that need translation
let pendingKeys: { key: string; fallback: string; lang: string }[] = [];
let batchTimer: ReturnType<typeof setTimeout> | null = null;

function getCachedTranslation(lang: string, key: string): string | undefined {
  return translationCache[lang]?.[key];
}

function setCachedTranslation(lang: string, key: string, value: string) {
  if (!translationCache[lang]) {
    translationCache[lang] = {};
  }
  translationCache[lang][key] = value;
}

function loadFromStorage(lang: string): Record<string, string> {
  try {
    const stored = localStorage.getItem(`auto-translations-${lang}`);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveToStorage(lang: string) {
  try {
    if (translationCache[lang]) {
      localStorage.setItem(`auto-translations-${lang}`, JSON.stringify(translationCache[lang]));
    }
  } catch {}
}

export function initAutoTranslateCache(lang: string) {
  const stored = loadFromStorage(lang);
  translationCache[lang] = { ...stored, ...translationCache[lang] };

  // Inject cached translations into i18next
  for (const [key, value] of Object.entries(translationCache[lang])) {
    i18n.addResource(lang, "translation", key, value);
  }
}

async function flushBatch() {
  if (pendingKeys.length === 0) return;

  const batch = [...pendingKeys];
  pendingKeys = [];
  batchTimer = null;

  const byLang: Record<string, { key: string; fallback: string }[]> = {};
  for (const item of batch) {
    if (!byLang[item.lang]) byLang[item.lang] = [];
    byLang[item.lang].push({ key: item.key, fallback: item.fallback });
  }

  for (const [lang, items] of Object.entries(byLang)) {
    const texts = items.map((i) => i.fallback);
    try {
      const { data, error } = await supabase.functions.invoke("translate", {
        body: { texts, targetLang: lang },
      });

      if (error) {
        console.warn("Auto-translate error:", error);
        items.forEach((item) => setCachedTranslation(lang, item.key, item.fallback));
      } else {
        const translations: string[] = data?.translations || texts;
        items.forEach((item, idx) => {
          const translated = translations[idx] || item.fallback;
          setCachedTranslation(lang, item.key, translated);
          i18n.addResource(lang, "translation", item.key, translated);
        });
      }
      saveToStorage(lang);

      // Force components to re-render
      i18n.emit("languageChanged", lang);
    } catch (err) {
      console.warn("Auto-translate network error:", err);
      items.forEach((item) => setCachedTranslation(lang, item.key, item.fallback));
    }
  }
}

function queueTranslation(key: string, fallback: string, lang: string) {
  const cacheKey = `${lang}:${key}`;
  if (queuedKeys.has(cacheKey)) return;
  queuedKeys.add(cacheKey);

  pendingKeys.push({ key, fallback, lang });

  if (batchTimer) clearTimeout(batchTimer);
  batchTimer = setTimeout(() => {
    flushBatch();
  }, 200);
}

/**
 * i18next postProcessor plugin.
 * After every t() call, checks if the resolved value came from the fallback (English).
 * If so, queues auto-translation and returns cached translation if available.
 */
export const autoTranslatePostProcessor = {
  type: "postProcessor" as const,
  name: "autoTranslate",
  process(value: string, key: string | string[], _options: any, translator: any) {
    const currentLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
    if (currentLang === "en") return value;

    const resolvedKey = Array.isArray(key) ? key[0] : key;
    if (!resolvedKey) return value;

    // Check if this key has a native translation in the current language's resource bundle
    const nativeValue = i18n.getResource(currentLang, "translation", resolvedKey);
    if (nativeValue && typeof nativeValue === "string") {
      return nativeValue; // Already translated
    }

    // Check our auto-translate cache
    const cached = getCachedTranslation(currentLang, resolvedKey);
    if (cached) return cached;

    // Get the English source text
    const englishValue = i18n.getResource("en", "translation", resolvedKey) as string;
    if (!englishValue) return value;

    // Queue for translation
    queueTranslation(resolvedKey, englishValue, currentLang);

    // Return English for now (will re-render after translation arrives)
    return value;
  },
};

// Clear queued keys when language changes so we re-queue for new language
export function clearQueuedKeys() {
  queuedKeys.clear();
}
