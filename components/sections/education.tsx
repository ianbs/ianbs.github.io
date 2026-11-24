import type { Content } from "@/content/types";
import { certifications, education } from "@/data/experience";

export function Education({ content }: { readonly content: Content }) {
  const language = content.languageCode;
  return (
    <section className="section container" id="education" aria-labelledby="education-title">
      <div className="section-heading">
        <p className="eyebrow">{content.education.eyebrow}</p>
        <h2 id="education-title">{content.education.title}</h2>
      </div>
      <div className="education-grid">
        <div>
          <h3 className="education-label">{content.education.educationLabel}</h3>
          <ul className="education-list">
            {education.map((item) => (
              <li key={item.degree.en}>
                <h4>{item.degree[language]}</h4>
                <p>{item.institution} · {item.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="education-label">{content.education.certificationsLabel}</h3>
          <ul className="education-list">
            {certifications.map((item) => (
              <li key={item.name} className="certification-item">
                <span aria-hidden="true">✓</span>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description[language]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
