import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar.json";
import en from "./en.json";

// SSR-safe init: always start with "ar" so server and first client render match.
// We switch to the user's saved language on the client AFTER hydration.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { ar: { translation: ar }, en: { translation: en } },
    lng: "ar",
    fallbackLng: "ar",
    supportedLngs: ["ar", "en"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export const LANG_STORAGE_KEY = "ue_lang";

export function applyLangToDocument(lng: string) {
  if (typeof document === "undefined") return;
  const l = lng.startsWith("en") ? "en" : "ar";
  document.documentElement.setAttribute("lang", l);
  document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
}

export function setLanguage(lng: "ar" | "en") {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lng);
  } catch {}
  i18n.changeLanguage(lng);
  applyLangToDocument(lng);
}

if (typeof window !== "undefined") {
  i18n.on("languageChanged", applyLangToDocument);
}

export default i18n;
