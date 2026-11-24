import type { Metadata } from "next";
import { preferenceScript } from "@/components/root-document";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Ian Barbosa Santos",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript({ redirectToStoredLanguage: false }) }} />
      </head>
      <body>
        <main className="section container not-found">
          <p className="eyebrow">404</p>
          <h1>Página não encontrada.</h1>
          <p lang="en">Page not found.</p>
          <div className="hero-actions">
            {/* Plain links: each language is a separate root layout, so navigation is a full page load anyway. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className="button button-primary" href="/">Ir para o início</a>
            <a className="button button-secondary" href="/en/" lang="en" hrefLang="en">Go to the English version</a>
          </div>
        </main>
      </body>
    </html>
  );
}
