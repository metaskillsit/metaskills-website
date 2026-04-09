import { supabase } from "@/integrations/supabase/client";
import i18n from "i18next";

// In-memory cache for translated strings per session
const translationCache: Record<string, Record<string, string>> = {};

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

// Also persist to localStorage for offline access
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
  } catch {
    // localStorage full or unavailable
  }
}

// Initialize cache from localStorage
export function initAutoTranslateCache(lang: string) {
  const stored = loadFromStorage(lang);
  translationCache[lang] = { ...stored, ...translationCache[lang] };

  // Inject any cached translations into i18next immediately
  for (const [key, value] of Object.entries(translationCache[lang])) {
    i18n.addResource(lang, "translation", key, value);
  }
}

async function flushBatch() {
  if (pendingKeys.length === 0) return;

  const batch = [...pendingKeys];
  pendingKeys = [];
  batchTimer = null;

  // Group by language
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
        items.forEach((item, i) => {
          const translated = translations[i] || item.fallback;
          setCachedTranslation(lang, item.key, translated);
          // Inject into i18next so components re-render with translated text
          i18n.addResource(lang, "translation", item.key, translated);
        });
      }
      saveToStorage(lang);

      // Force re-render by emitting languageChanged
      i18n.emit("languageChanged", lang);
    } catch (err) {
      console.warn("Auto-translate network error:", err);
      items.forEach((item) => setCachedTranslation(lang, item.key, item.fallback));
    }
  }
}

export function requestAutoTranslation(key: string, fallback: string, lang: string): string {
  // Return cached if available
  const cached = getCachedTranslation(lang, key);
  if (cached) return cached;

  // Check if already in pending batch
  if (!pendingKeys.some((p) => p.key === key && p.lang === lang)) {
    pendingKeys.push({ key, fallback, lang });
  }

  // Debounce: flush after 150ms of no new requests
  if (batchTimer) clearTimeout(batchTimer);
  batchTimer = setTimeout(() => {
    flushBatch();
  }, 150);

  // Return English fallback while translation loads
  return fallback;
}
