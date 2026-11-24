import type { Content } from "@/content/types";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

// Server component: each language is rendered to its own static HTML page at build time.
export function SiteShell({ content }: { readonly content: Content }) {
  return (
    <>
      <a className="skip-link" href="#main-content">{content.a11y.skipLink}</a>
      <Header content={content} />
      <main id="main-content">
        <Hero content={content} />
        <About content={content} />
        <Skills content={content} />
        <Projects content={content} />
        <Certifications content={content} />
        <Contact content={content} />
      </main>
      <footer className="site-footer">
        {/* Evaluated at build time; the deploy workflow rebuilds the site on every push. */}
        <div className="container"><p>© {new Date().getFullYear()} {content.footer}</p><a href="#top">↑ {content.a11y.backToTop}</a></div>
      </footer>
    </>
  );
}
