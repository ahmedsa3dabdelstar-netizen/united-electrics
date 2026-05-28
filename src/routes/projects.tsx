import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout, PageHeader } from "@/components/site/Layout";
import { projects, type Project } from "@/data/projects";
import { useMemo, useState } from "react";
import { MapPin, Calendar, Building2 } from "lucide-react";

export const Route = createFileRoute("/projects")({ component: Projects });

const catKeys = ["all", "residential", "government", "hayah", "commercial", "security"] as const;
const catMap: Record<(typeof catKeys)[number], Project["category"] | "ALL"> = {
  all: "ALL",
  residential: "سكني",
  government: "حكومي",
  hayah: "حياة كريمة",
  commercial: "تجاري",
  security: "أمني",
};

function Projects() {
  const { t } = useTranslation();
  const [cat, setCat] = useState<(typeof catKeys)[number]>("all");
  const [year, setYear] = useState<"all" | number>("all");

  const years = useMemo(() => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a), []);

  const filtered = useMemo(() => {
    const c = catMap[cat];
    return projects.filter((p) => (c === "ALL" || p.category === c) && (year === "all" || p.year === year));
  }, [cat, year]);

  return (
    <Layout>
      <PageHeader eyebrow={t("projects.eyebrow")} title={t("projects.title")} description={t("projects.desc")} />

      <section className="py-12 border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {catKeys.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  cat === c ? "bg-navy-deep text-primary-foreground" : "bg-card border border-border hover:border-gold"
                }`}
              >
                {c === "all" ? t("projects.all") : t(`projects.cat.${c}`)}
              </button>
            ))}
          </div>
          <div className="md:ms-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{t("projects.year")}</span>
            <select
              value={year as never}
              onChange={(e) => setYear(e.target.value === "all" ? "all" : Number(e.target.value))}
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-bold"
            >
              <option value="all">{t("projects.all")}</option>
              {years.map((y) => (<option key={y} value={y}>{y}</option>))}
            </select>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">{t("projects.empty")}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => <ProjectCard key={p.id} p={p} />)}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const { t } = useTranslation();
  return (
    <article className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-elegant hover:border-gold/50 transition-all">
      <div className="relative h-2 bg-gradient-gold" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="rounded-full bg-navy-deep text-primary-foreground px-3 py-1 text-xs font-bold">{p.category}</span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" />{p.year}</span>
        </div>
        <h3 className="text-lg font-extrabold mb-3 group-hover:text-gold transition-colors">{p.name}</h3>
        {p.location && (
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 text-gold" />{p.location}
          </div>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.scope}</p>
        <div className="border-t border-border pt-4 space-y-1.5 text-xs">
          <div className="flex gap-2"><Building2 className="h-3.5 w-3.5 text-gold mt-0.5 shrink-0" /><span className="text-muted-foreground">{t("projects.owner")}</span> <span className="font-bold">{p.owner}</span></div>
          {p.consultant && <div className="flex gap-2"><span className="text-muted-foreground">{t("projects.consultant")}</span> <span className="font-bold">{p.consultant}</span></div>}
          {p.contractor && <div className="flex gap-2"><span className="text-muted-foreground">{t("projects.contractor")}</span> <span className="font-bold">{p.contractor}</span></div>}
        </div>
      </div>
    </article>
  );
}
