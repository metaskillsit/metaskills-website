import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
];

const TranslationWidget = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code).then(() => {
      document.documentElement.lang = code;
    });
    setOpen(false);
  };

  const resolvedLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const currentLang = languages.find((l) => l.code === resolvedLang) || languages[0];

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-14 right-0 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[160px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                i18n.language === lang.code
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/80 hover:bg-muted"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:brightness-110 transition-all duration-200 text-sm font-medium"
        aria-label="Translate"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLang.flag} {currentLang.label}</span>
      </button>
    </div>
  );
};

export default TranslationWidget;
