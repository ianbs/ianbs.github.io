import Image from "next/image";
import type { Content } from "@/content/types";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Hero({ content }: { readonly content: Content }) {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 id="hero-title">Ian Barbosa Santos</h1>
        <p className="hero-role">{content.hero.role}</p>
        <p className="hero-description">{content.hero.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {content.hero.primaryCta}<ArrowUpRightIcon />
          </a>
          <a className="button button-secondary" href={`mailto:${site.email}`}>{content.hero.contactCta}</a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href={site.github} target="_blank" rel="noopener noreferrer"><GithubIcon />GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon />LinkedIn</a>
        </div>
      </div>
      <aside className="profile-card" aria-label={content.hero.lensLabel}>
        <div className="profile-image-wrap">
          <Image src="/images/perfil.jpg" width={200} height={200} alt={content.hero.profileAlt} priority sizes="(max-width: 720px) 240px, 290px" />
        </div>
        <div className="profile-meta">
          <p>{content.hero.lensLabel}</p>
          <ul>
            {content.hero.lens.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </aside>
    </section>
  );
}
