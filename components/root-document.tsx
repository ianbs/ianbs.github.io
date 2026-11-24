import type { Content } from "@/content/types";
import { en } from "@/content/en";
import { languageStorageKey, themeStorageKey } from "@/lib/preferences";
import { site } from "@/lib/site";
import "@/app/globals.css";

// Runs before first paint: applies the stored theme and, only on the Portuguese home page ("/"),
// honours a language the visitor explicitly chose before. Direct links to /en/ are never redirected,
// and nothing is inferred from navigator.language so crawlers always index both versions.
export function preferenceScript({ redirectToStoredLanguage }: { readonly redirectToStoredLanguage: boolean }) {
  const redirect = redirectToStoredLanguage
    ? `if (location.pathname === "/" && localStorage.getItem(${JSON.stringify(languageStorageKey)}) === "en") { location.replace(${JSON.stringify(en.meta.path)} + location.hash); return; }`
    : "";
  return `(() => {
  try {
    ${redirect}
    const root = document.documentElement;
    const stored = localStorage.getItem(${JSON.stringify(themeStorageKey)});
    const preference = stored === "light" || stored === "dark" ? stored : "system";
    root.dataset.themePreference = preference;
    root.dataset.theme = preference === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : preference;
  } catch {}
})();`;
}

export function RootDocument({ content, children }: { readonly content: Content; readonly children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: content.hero.eyebrow,
    sameAs: [site.github, site.linkedin],
  };

  return (
    <html lang={content.meta.htmlLang} data-language={content.languageCode} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- this is the App Router root layout markup, shared by both language layouts */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript({ redirectToStoredLanguage: content.languageCode === "pt" }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
