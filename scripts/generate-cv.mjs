// Renders the résumé pages of the static export (out/) to PDF in public/cv/.
// Usage: pnpm cv   (builds the site, then runs this script). Commit the PDFs afterwards.
// Set CHROMIUM_PATH to use an existing Chromium instead of Playwright's downloaded browser.
import { createReadStream, existsSync, statSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";

const root = join(process.cwd(), "out");
const outputDir = join(process.cwd(), "public", "cv");
const pages = [
  { route: "/curriculo/", file: "ian-barbosa-santos-curriculo.pdf" },
  { route: "/en/resume/", file: "ian-barbosa-santos-resume.pdf" },
];
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".png": "image/png" };

if (!existsSync(join(root, "curriculo", "index.html"))) {
  console.error("out/curriculo/index.html not found. Run `pnpm build` first (or use `pnpm cv`).");
  process.exit(1);
}

const server = createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  let file = normalize(join(root, pathname));
  if (!file.startsWith(root)) return response.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) return response.writeHead(404).end();
  response.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(response);
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });

try {
  await mkdir(outputDir, { recursive: true });
  const context = await browser.newContext({ colorScheme: "light" });
  for (const { route, file } of pages) {
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });
    await page.pdf({ path: join(outputDir, file), preferCSSPageSize: true, printBackground: true });
    console.log(`public/cv/${file}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
