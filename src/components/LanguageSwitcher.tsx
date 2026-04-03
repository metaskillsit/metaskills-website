import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div style={{
      position: "fixed",
      top: 12,
      right: 12,
      zIndex: 9999,
      display: "flex",
      gap: "6px"
    }}>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("zh")}>中文</button>
      <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
    </div>
  );
}
