import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy-deep text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-gold">
              <Zap className="h-6 w-6 text-navy-deep" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display text-xl font-extrabold">{t("brand.name")}</div>
              <div className="text-xs text-gold tracking-wider">UNITED ELECTRIC</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-md">{t("footer.tag")}</p>
        </div>

        <div>
          <h4 className="text-gold font-bold mb-4">{t("footer.links")}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-gold">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="hover:text-gold">{t("nav.services")}</Link></li>
            <li><Link to="/projects" className="hover:text-gold">{t("nav.projects")}</Link></li>
            <li><Link to="/government" className="hover:text-gold">{t("nav.government")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-bold mb-4">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{t("contact.address.v")}</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><span dir="ltr">01014454918 / 01014464705</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /><span dir="ltr">Unitedelectric3@yahoo.com</span></li>
            <li className="flex items-center gap-2">
              <a href="https://www.facebook.com/profile.php" className="hover:text-gold flex items-center gap-2">
                <Facebook className="h-4 w-4 text-gold" /> {t("footer.fb")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/50 text-center">
          © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
