import type { Metadata } from "next";
import { Resume } from "@/components/cv/resume";
import { en } from "@/content/en";
import { cvFiles } from "@/data/cv";

// Source of the downloadable PDF; kept out of search results to avoid duplicating the home page.
export const metadata: Metadata = {
  title: en.cv.documentTitle,
  robots: { index: false, follow: true },
  alternates: { canonical: cvFiles.en.route, languages: { "pt-BR": cvFiles.pt.route, en: cvFiles.en.route } },
};

export default function ResumePage() {
  return <Resume content={en} />;
}
