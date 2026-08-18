import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

const title = "Ian Barbosa Santos | Full-stack Developer & Software Engineer";
const description = "Full-stack development with TypeScript, Next.js, Node.js, PostgreSQL, backend architecture, secure APIs, and modern web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "profile",
    url: site.url,
    title,
    description,
    siteName: site.name,
    locale: "pt_BR",
    alternateLocale: "en_US",
    images: [{ url: "/images/perfil.jpg", width: 200, height: 200, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/perfil.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#101215" },
  ],
};

const preferenceScript = `(() => {
  try {
    const root = document.documentElement;
    const storedLanguage = localStorage.getItem("portfolio-language");
    const language = storedLanguage === "pt" || storedLanguage === "en"
      ? storedLanguage
      : (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");
    const storedTheme = localStorage.getItem("portfolio-theme");
    const preference = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";
    const theme = preference === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : preference;
    root.dataset.language = language;
    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    root.lang = language === "en" ? "en" : "pt-BR";
  } catch {}
})();`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Full-stack Developer / Software Engineer",
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
