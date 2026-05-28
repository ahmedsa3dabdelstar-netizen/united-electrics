import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/site/Layout";
import { ArrowLeft, ArrowRight, Award, Building2, Cable, CheckCircle2, Cpu, HardHat, ShieldCheck, Wrench, Zap } from "lucide-react";
import hero from "@/assets/hero-substation.jpg";
import compound from "@/assets/project-compound.jpg";
import village from "@/assets/project-village.jpg";
import gov from "@/assets/project-government.jpg";
import { projects } from "@/data/projects";
import { CircularGallery, CircularGalleryMobile } from "@/components/site/CircularGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "المتحدة اليكتريك | United Electric" },
      { name: "description", content: "شريككم الموثوق في مشاريع البنية التحتية الكهربائية. Your trusted partner in electrical infrastructure projects since 2018." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = !i18n.language?.startsWith("en");
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const recent = projects.slice(0, 6);

  const stats = [
    { value: "+50", label: t("home.stats.projects") },
    { value: "7", label: t("home.stats.years") },
    { value: "+15", label: t("home.stats.entities") },
    { value: "100%", label: t("home.stats.commitment") },
  ];

  const services = [
    { icon: Cable, k: "infra" },
    { icon: Building2, k: "buildings" },
    { icon: Wrench, k: "mech" },
    { icon: Cpu, k: "hvac" },
    { icon: Zap, k: "light" },
    { icon: ShieldCheck, k: "maint" },
  ];

  const highlights = [
    { img: gov, k: "knowledge" },
    { img: village, k: "village" },
    { img: compound, k: "compound" },
  ];

  return (
    <Layout>
      {/* Circular Gallery */}
      <section className="relative overflow-hidden bg-background pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="relative mx-auto max-w-7xl px-6">
          <CircularGallery />
          <CircularGalleryMobile />
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img src={hero} alt="" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className={`absolute inset-0 bg-gradient-to-${isRtl ? "l" : "r"} from-navy-deep via-navy-deep/85 to-navy-deep/40`} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm text-gold font-bold mb-6">
              <Award className="h-4 w-4" /> {t("home.hero.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
              {t("home.hero.title1")}
              <span className="block text-gold mt-2">{t("home.hero.title2")}</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {t("home.hero.desc")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-4 text-base font-bold text-navy-deep shadow-gold hover:opacity-90 transition">
                {t("home.hero.ctaProjects")} <Arrow className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-7 py-4 text-base font-bold hover:bg-white/10 transition">
                {t("home.hero.ctaContact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-primary-foreground border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-extrabold text-gold">{s.value}</div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-gold text-sm font-bold tracking-widest mb-3">{t("home.services.eyebrow")}</div>
            <h2 className="text-3xl md:text-5xl font-extrabold">{t("home.services.title")}</h2>
            <p className="mt-4 text-muted-foreground text-lg">{t("home.services.desc")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.k} className="group relative rounded-xl border border-border bg-card p-7 hover:border-gold hover:shadow-elegant transition-all">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-navy-deep text-gold mb-5 group-hover:bg-gradient-gold group-hover:text-navy-deep transition">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(`home.services.items.${s.k}.t`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`home.services.items.${s.k}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-gold text-sm font-bold tracking-widest mb-3">{t("home.featured.eyebrow")}</div>
              <h2 className="text-3xl md:text-5xl font-extrabold">{t("home.featured.title")}</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-foreground font-bold hover:text-gold transition">
              {t("home.featured.all")} <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <article key={h.k} className="group overflow-hidden rounded-xl bg-card shadow-elegant">
                <div className="relative h-64 overflow-hidden">
                  <img src={h.img} alt={t(`home.featured.items.${h.k}.title`)} loading="lazy" width={1600} height={1066} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy-deep">{t(`home.featured.items.${h.k}.tag`)}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{t(`home.featured.items.${h.k}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`home.featured.items.${h.k}.owner`)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recent.map((p) => (
              <div key={p.id} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gold">{p.category}</span>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h4 className="font-bold text-base">{p.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{p.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-gold text-sm font-bold tracking-widest mb-3">{t("home.why.eyebrow")}</div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t("home.why.title")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t("home.why.desc")}</p>
            <ul className="space-y-4">
              {["p1", "p2", "p3", "p4"].map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <span className="text-base">{t(`home.why.${k}`)}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 mt-10 rounded-md bg-navy-deep px-6 py-3 text-primary-foreground font-bold hover:bg-navy transition">
              {t("home.why.more")} <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-navy-deep text-primary-foreground p-8 shadow-elegant">
              <HardHat className="h-10 w-10 text-gold mb-4" />
              <div className="text-3xl font-extrabold">+200</div>
              <div className="text-sm text-white/70 mt-1">{t("home.why.workers")}</div>
            </div>
            <div className="rounded-xl bg-gradient-gold text-navy-deep p-8 shadow-gold mt-8">
              <Award className="h-10 w-10 mb-4" />
              <div className="text-3xl font-extrabold">2018</div>
              <div className="text-sm mt-1 font-medium">{t("home.why.founded")}</div>
            </div>
            <div className="rounded-xl bg-gradient-gold text-navy-deep p-8 shadow-gold">
              <Building2 className="h-10 w-10 mb-4" />
              <div className="text-3xl font-extrabold">14+</div>
              <div className="text-sm mt-1 font-medium">{t("home.why.governorates")}</div>
            </div>
            <div className="rounded-xl bg-navy text-primary-foreground p-8 shadow-elegant mt-8">
              <ShieldCheck className="h-10 w-10 text-gold mb-4" />
              <div className="text-3xl font-extrabold">24/7</div>
              <div className="text-sm text-white/70 mt-1">{t("home.why.support")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t("home.cta.title")}</h2>
          <p className="text-lg text-white/75 mb-10">{t("home.cta.desc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-md bg-gradient-gold px-8 py-4 text-navy-deep font-bold shadow-gold hover:opacity-90">{t("home.cta.btn1")}</Link>
            <Link to="/government" className="rounded-md border-2 border-white/30 px-8 py-4 font-bold hover:bg-white/10">{t("home.cta.btn2")}</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
