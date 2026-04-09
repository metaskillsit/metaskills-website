import { supabase } from "@/integrations/supabase/client";

// In-memory cache for translated strings per session
const translationCache: Record<string, Record<string, string>> = {};

// Pending batch: collects keys that need translation
let pendingKeys: { key: string; fallback: string; lang: string }[] = [];
let batchTimer: ReturnType<typeof setTimeout> | null = null;
let batchResolvers: Array<() => void> = [];

function getCacheKey(lang: string) {
  return lang;
}

function getCachedTranslation(lang: string, key: string): string | undefined {
  return translationCache[getCacheKey(lang)]?.[key];
}

function setCachedTranslation(lang: string, key: string, value: string) {
  const cacheKey = getCacheKey(lang);
  if (!translationCache[cacheKey]) {
    translationCache[cacheKey] = {};
  }
  translationCache[cacheKey][key] = value;
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
    const cacheKey = getCacheKey(lang);
    if (translationCache[cacheKey]) {
      localStorage.setItem(`auto-translations-${lang}`, JSON.stringify(translationCache[cacheKey]));
    }
  } catch {
    // localStorage full or unavailable
  }
}

// Initialize cache from localStorage
export function initAutoTranslateCache(lang: string) {
  const stored = loadFromStorage(lang);
  const cacheKey = getCacheKey(lang);
  translationCache[cacheKey] = { ...stored, ...translationCache[cacheKey] };
}

async function flushBatch() {
  if (pendingKeys.length === 0) return;

  const batch = [...pendingKeys];
  const resolvers = [...batchResolvers];
  pendingKeys = [];
  batchResolvers = [];
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
        // Cache fallbacks so we don't retry immediately
        items.forEach((item) => setCachedTranslation(lang, item.key, item.fallback));
      } else {
        const translations: string[] = data?.translations || texts;
        items.forEach((item, i) => {
          setCachedTranslation(lang, item.key, translations[i] || item.fallback);
        });
      }
      saveToStorage(lang);
    } catch (err) {
      console.warn("Auto-translate network error:", err);
      items.forEach((item) => setCachedTranslation(lang, item.key, item.fallback));
    }
  }

  // Resolve all waiting promises
  resolvers.forEach((r) => r());
}

export function requestAutoTranslation(key: string, fallback: string, lang: string): string {
  // Return cached if available
  const cached = getCachedTranslation(lang, key);
  if (cached) return cached;

  // Check if already in pending batch
  if (!pendingKeys.some((p) => p.key === key && p.lang === lang)) {
    pendingKeys.push({ key, fallback, lang });
  }

  // Debounce: flush after 100ms of no new requests
  if (batchTimer) clearTimeout(batchTimer);
  batchTimer = setTimeout(() => {
    flushBatch();
  }, 100);

  // Return English fallback while translation loads
  return fallback;
}
