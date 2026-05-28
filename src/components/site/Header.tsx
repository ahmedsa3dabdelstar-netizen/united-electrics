import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/government", label: t("nav.government") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/95 backdrop-blur-md text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-gold shadow-gold group-hover:scale-105 transition-transform">
            <Zap className="h-6 w-6 text-navy-deep" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base md:text-lg font-extrabold">{t("brand.name")}</div>
            <div className="text-[10px] md:text-[11px] text-gold tracking-wider">UNITED ELECTRIC</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 flex-wrap">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-2 lg:px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
              activeProps={{ className: "px-2 lg:px-3 py-2 rounded-md text-sm font-bold text-gold bg-white/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold hover:opacity-90 transition"
          >
            {t("nav.quote")}
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label={t("nav.menu")}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy-deep">
          <nav className="flex flex-col p-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md hover:bg-white/10"
                activeProps={{ className: "px-4 py-3 rounded-md text-gold bg-white/5 font-bold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
