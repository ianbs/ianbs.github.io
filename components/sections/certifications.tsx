import type { Content } from "@/content/types";

export function Certifications({ content }: { readonly content: Content }) {
  return (
    <section className="section container" id="certifications" aria-labelledby="certifications-title">
      <div className="section-heading">
        <p className="eyebrow">{content.certifications.eyebrow}</p>
        <h2 id="certifications-title">{content.certifications.title}</h2>
      </div>
      <article className="certification-card">
        <span aria-hidden="true">✓</span>
        <div>
          <h3>{content.certifications.item}</h3>
          <p>{content.certifications.description}</p>
        </div>
      </article>
    </section>
  );
}
