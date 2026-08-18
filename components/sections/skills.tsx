import type { Content } from "@/content/types";

export function Skills({ content }: { readonly content: Content }) {
  return (
    <section className="section section-tinted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{content.skills.eyebrow}</p>
          <h2 id="skills-title">{content.skills.title}</h2>
        </div>
        <div className="skills-grid">
          {content.skills.groups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <span className="group-index" aria-hidden="true">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
