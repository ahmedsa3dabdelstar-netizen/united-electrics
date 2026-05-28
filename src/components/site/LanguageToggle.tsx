import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { setLanguage } from "@/i18n";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const next = i18n.language?.startsWith("en") ? "ar" : "en";
  return (
    <button
      onClick={() => setLanguage(next)}
      aria-label={t("lang.switchTo")}
      className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 hover:border-gold/60 hover:bg-white/10 transition px-3 text-sm font-bold"
    >
      <Languages className="h-4 w-4 text-gold" />
      <span>{t("lang.switchTo")}</span>
    </button>
  );
}
