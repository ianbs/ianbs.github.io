import { RootDocument } from "@/components/root-document";
import { en } from "@/content/en";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata(en);

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument content={en}>{children}</RootDocument>;
}
