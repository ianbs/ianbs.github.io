import type { Content } from "@/content/types";

export function About({ content }: { readonly content: Content }) {
  return (
    <section className="section container" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">{content.about.eyebrow}</p>
        <h2 id="about-title">{content.about.title}</h2>
      </div>
      <div className="about-copy">
        {content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
