import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Cable, Building2, Wrench, Cpu, Zap, ShieldCheck, Lightbulb, Network } from "lucide-react";
import power from "@/assets/service-power.jpg";

export const Route = createFileRoute("/services")({ component: Services });

const items = [
  { icon: Cable, k: "infra" },
  { icon: Building2, k: "gov" },
  { icon: Wrench, k: "mech" },
  { icon: Cpu, k: "hvac" },
  { icon: Lightbulb, k: "light" },
  { icon: Network, k: "net" },
  { icon: Zap, k: "poles" },
  { icon: ShieldCheck, k: "maint" },
];

function Services() {
  const { t } = useTranslation();
  return (
    <Layout>
      <PageHeader eyebrow={t("services.eyebrow")} title={t("services.title")} description={t("services.desc")} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((s) => (
              <div key={s.k} className="group rounded-xl border border-border bg-card p-7 hover:border-gold hover:shadow-elegant transition-all">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-navy-deep text-gold mb-5 group-hover:bg-gradient-gold group-hover:text-navy-deep transition">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-extrabold mb-3">{t(`services.items.${s.k}.t`)}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {["p1", "p2", "p3"].map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-gold">●</span>{t(`services.items.${s.k}.${p}`)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground py-20">
        <img src={power} alt="" loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-deep via-navy-deep/90 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-gold text-sm font-bold tracking-widest mb-3">{t("services.process.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t("services.process.title")}</h2>
            <p className="text-white/75 text-lg leading-relaxed">{t("services.process.desc")}</p>
          </div>
          <div className="space-y-4">
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((k, i) => (
              <div key={k} className="flex items-center gap-4 rounded-lg bg-white/5 border border-white/10 p-4">
                <div className="h-10 w-10 rounded-full bg-gradient-gold text-navy-deep flex items-center justify-center font-extrabold">{i + 1}</div>
                <span className="font-bold">{t(`services.process.${k}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
