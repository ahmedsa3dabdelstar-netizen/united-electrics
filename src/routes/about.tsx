import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout, PageHeader } from "@/components/site/Layout";
import team from "@/assets/team-engineers.jpg";
import { Target, Eye, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { t } = useTranslation();
  const cards = [
    { icon: Target, k: "mission" },
    { icon: Eye, k: "vision" },
    { icon: Award, k: "values" },
  ];
  return (
    <Layout>
      <PageHeader eyebrow={t("about.eyebrow")} title={t("about.title")} description={t("about.desc")} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={team} alt="team" loading="lazy" width={1600} height={1066} className="rounded-xl shadow-elegant w-full h-auto" />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t("about.intro")}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">{t("about.intro1")}</p>
            <p className="text-lg leading-relaxed text-muted-foreground">{t("about.intro2")}</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.k} className="rounded-xl bg-card p-8 border-t-4 border-gold shadow-elegant">
              <c.icon className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-2xl font-extrabold mb-3">{t(`about.${c.k}.t`)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(`about.${c.k}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="text-gold text-sm font-bold tracking-widest mb-3">{t("about.leadEyebrow")}</div>
            <h2 className="text-3xl md:text-5xl font-extrabold">{t("about.leadTitle")}</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">{t("about.leadDesc")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {["p1", "p2"].map((k) => (
              <div key={k} className="rounded-xl bg-gradient-hero text-primary-foreground p-10 text-center shadow-elegant">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                  <Users className="h-12 w-12 text-navy-deep" />
                </div>
                <h3 className="text-2xl font-extrabold">{t(`about.${k}`)}</h3>
                <div className="text-gold mt-2 font-bold">{t("about.role")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
