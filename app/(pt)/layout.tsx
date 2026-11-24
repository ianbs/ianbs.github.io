import { RootDocument } from "@/components/root-document";
import { pt } from "@/content/pt";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata(pt);

export default function PortugueseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument content={pt}>{children}</RootDocument>;
}
