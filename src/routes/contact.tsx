import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Facebook, Globe, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(2, t("contact.errName")).max(100),
    email: z.string().trim().email(t("contact.errEmail")).max(255),
    phone: z.string().trim().min(8, t("contact.errPhone")).max(20),
    type: z.string(),
    message: z.string().trim().min(10, t("contact.errMsg")).max(1000),
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    e.currentTarget.reset();
  }

  const cards = [
    { icon: MapPin, title: t("contact.address.t"), text: t("contact.address.v") },
    { icon: Phone, title: t("contact.phone"), text: "01014454918 / 01014464705", dir: "ltr" as const },
    { icon: Mail, title: t("contact.email"), text: "Unitedelectric3@yahoo.com", dir: "ltr" as const },
    { icon: Facebook, title: t("contact.fb"), text: "facebook.com/profile.php", dir: "ltr" as const },
    { icon: Globe, title: t("contact.gb"), text: "general-contractor-6241.business.site", dir: "ltr" as const },
  ];

  return (
    <Layout>
      <PageHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} description={t("contact.desc")} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cards.map((c) => (
              <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="h-12 w-12 rounded-lg bg-navy-deep text-gold flex items-center justify-center shrink-0">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold mb-1">{c.title}</div>
                  <div className="text-sm text-muted-foreground" dir={c.dir}>{c.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-card border border-border p-8 shadow-elegant">
              <h2 className="text-2xl font-extrabold mb-2">{t("contact.formTitle")}</h2>
              <p className="text-muted-foreground mb-6">{t("contact.formDesc")}</p>

              {status === "sent" && (
                <div className="mb-6 rounded-lg bg-gold/15 border border-gold/40 p-4 text-foreground font-bold">{t("contact.sent")}</div>
              )}

              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field name="name" label={t("contact.name")} error={errors.name} />
                  <Field name="phone" label={t("contact.phoneLabel")} error={errors.phone} />
                </div>
                <Field name="email" label={t("contact.emailLabel")} type="email" error={errors.email} />
                <div>
                  <label className="block text-sm font-bold mb-2">{t("contact.type")}</label>
                  <select name="type" defaultValue={t("contact.types.tech")} className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:border-gold outline-none">
                    <option>{t("contact.types.bid")}</option>
                    <option>{t("contact.types.tech")}</option>
                    <option>{t("contact.types.job")}</option>
                    <option>{t("contact.types.other")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">{t("contact.message")}</label>
                  <textarea name="message" rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:border-gold outline-none" maxLength={1000} />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-gold px-8 py-4 text-navy-deep font-bold shadow-gold hover:opacity-90 transition">
                  {t("contact.send")} <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input name={name} type={type} maxLength={255} className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:border-gold outline-none" />
      {error && <p className="text-destructive text-sm mt-1">{error}</p>}
    </div>
  );
}
