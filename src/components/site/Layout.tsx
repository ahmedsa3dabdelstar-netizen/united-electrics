import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-gradient-hero text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {eyebrow && <div className="text-gold text-sm font-bold tracking-widest mb-4">{eyebrow}</div>}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{title}</h1>
        {description && <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
