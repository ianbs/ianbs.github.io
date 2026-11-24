import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Content } from "@/content/types";
import { site } from "@/lib/site";

export const ogImageSize = { width: 1200, height: 630 } as const;

// Rendered once at build time (static export) into a 1200×630 PNG for link previews.
export async function renderOgImage(content: Content) {
  const photo = await readFile(join(process.cwd(), "public/images/perfil.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", gap: 64, padding: "0 88px", background: "#101215", color: "#f4f6f8" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: "#8fb4ff" }}>{content.hero.eyebrow}</div>
          <div style={{ marginTop: 20, fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ marginTop: 28, fontSize: 34, lineHeight: 1.3, color: "#c3c9d2" }}>{content.hero.role}</div>
          <div style={{ marginTop: 44, fontSize: 26, color: "#8b939e" }}>{site.url.replace("https://", "")}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser */}
        <img src={photoSrc} width={240} height={240} alt="" style={{ borderRadius: 120, border: "4px solid #2a2f36" }} />
      </div>
    ),
    ogImageSize,
  );
}
