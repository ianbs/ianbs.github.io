import type { Metadata, Viewport } from "next";
import type { Content } from "@/content/types";
import { en } from "@/content/en";
import { pt } from "@/content/pt";
import { ogImageSize } from "@/lib/og-image";
import { site } from "@/lib/site";

/** Static PNG generated at build time by app/og/<language>.png/route.tsx. */
export function ogImagePath(content: Content) {
  return `/og/${content.languageCode}.png`;
}

export const languageAlternates = {
  "pt-BR": pt.meta.path,
  en: en.meta.path,
  "x-default": pt.meta.path,
} as const;

export function buildMetadata(content: Content): Metadata {
  const { title, description, path, ogLocale, alternateOgLocale, ogImageAlt } = content.meta;
  const image = { url: ogImagePath(content), ...ogImageSize, alt: ogImageAlt, type: "image/png" };
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: { canonical: path, languages: languageAlternates },
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    icons: { icon: "/icon.svg" },
    openGraph: {
      type: "profile",
      url: path,
      title,
      description,
      siteName: site.name,
      locale: ogLocale,
      alternateLocale: alternateOgLocale,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#101215" },
  ],
};
