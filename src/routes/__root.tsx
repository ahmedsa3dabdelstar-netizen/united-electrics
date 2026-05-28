import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import appCss from "../styles.css?url";
import { LANG_STORAGE_KEY, setLanguage } from "../i18n";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">{t("notFound.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("notFound.desc")}</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            {t("notFound.btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Unexpected error</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please retry or go home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Retry</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "المتحدة اليكتريك | United Electric" },
      { name: "description", content: "شركة المتحدة اليكتريك - مقاولات الكهرباء والميكانيكا والتكييفات. United Electric — electrical, mechanical & HVAC contracting since 2018." },
      { property: "og:title", content: "المتحدة اليكتريك | United Electric" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "المتحدة اليكتريك | United Electric" },
      { property: "og:description", content: "شركة المتحدة اليكتريك - مقاولات الكهرباء والميكانيكا والتكييفات. United Electric — electrical, mechanical & HVAC contracting since 2018." },
      { name: "twitter:description", content: "شركة المتحدة اليكتريك - مقاولات الكهرباء والميكانيكا والتكييفات. United Electric — electrical, mechanical & HVAC contracting since 2018." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/29a664b8-3c8b-4be4-a1cc-c9b71d747521/id-preview-cdcd6a32--83bf07d3-fb12-4b17-b491-3fa619766c9c.lovable.app-1779918436857.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/29a664b8-3c8b-4be4-a1cc-c9b71d747521/id-preview-cdcd6a32--83bf07d3-fb12-4b17-b491-3fa619766c9c.lovable.app-1779918436857.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === "en" || saved === "ar") {
        setLanguage(saved);
      } else {
        const nav = (navigator.language || "ar").toLowerCase();
        setLanguage(nav.startsWith("en") ? "en" : "ar");
      }
    } catch {}
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
