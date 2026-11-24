import { pt } from "@/content/pt";
import { renderOgImage } from "@/lib/og-image";

export const dynamic = "force-static";

export function GET() {
  return renderOgImage(pt);
}
