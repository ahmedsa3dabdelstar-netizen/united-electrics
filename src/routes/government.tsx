import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout, PageHeader } from "@/components/site/Layout";
import { FileCheck, Shield, Award, Briefcase, Building, Landmark, ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/government")({ component: Government });

const entities = [
  "الهيئة الهندسية للقوات المسلحة",
  "وزارة الداخلية",
  "مبادرة حياة كريمة",
  "جهاز تعمير البحر الأحمر",
  "جهاز مدينة العاصمة الإدارية",
  "نادي قضاة مجلس الدولة",
  "شركة مصر المحروسة",
  "سوديك",
];

function Government() {
  const { t, i18n } = useTranslation();
  const Arrow = i18n.language?.startsWith("en") ? ArrowRight : ArrowLeft;
  const cards = [
    { icon: FileCheck, k: "c1" },
    { icon: Award, k: "c2" },
    { icon: Briefcase, k: "c3" },
    { icon: Shield, k: "c4" },
  ];
  return (
    <Layout>
      <PageHeader eyebrow={t("government.eyebrow")} title={t("government.title")} description={t("government.desc")} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Landmark, value: "15+", label: t("government.s1") },
            { icon: Building, value: "30+", label: t("government.s2") },
            { icon: Shield, value: "100%", label: t("government.s3") },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-gradient-hero text-primary-foreground p-8 text-center shadow-elegant">
              <s.icon className="h-12 w-12 text-gold mx-auto mb-4" />
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="mt-2 text-white/75">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("government.entitiesTitle")}</h2>
          <p className="text-muted-foreground text-lg">{t("government.entitiesDesc")}</p>
        </div>

        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {entities.map((e) => (
            <div key={e} className="rounded-lg border border-border bg-card p-6 text-center font-bold hover:border-gold hover:shadow-elegant transition">{e}</div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <div className="text-gold text-sm font-bold tracking-widest mb-3">{t("government.whyEyebrow")}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold">{t("government.whyTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((c) => (
              <div key={c.k} className="rounded-xl bg-card p-7 border-s-4 border-gold shadow-elegant">
                <c.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="text-xl font-extrabold mb-2">{t(`government.${c.k}.t`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`government.${c.k}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 rounded-2xl bg-gradient-hero text-primary-foreground p-12 text-center shadow-elegant">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("government.ctaTitle")}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{t("government.ctaDesc")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-8 py-4 text-navy-deep font-bold shadow-gold hover:opacity-90">
            {t("government.ctaBtn")} <Arrow className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
