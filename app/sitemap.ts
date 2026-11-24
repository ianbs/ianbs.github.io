import type { MetadataRoute } from "next";
import { languageAlternates } from "@/lib/metadata";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const languages = Object.fromEntries(
  Object.entries(languageAlternates).map(([language, path]) => [language, new URL(path, site.url).href]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [languageAlternates["pt-BR"], languageAlternates.en].map((path) => ({
    url: new URL(path, site.url).href,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
