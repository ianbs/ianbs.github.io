import type { Content } from "@/content/types";
import { experience, formatPeriod, yearsOfExperience, type Role } from "@/data/experience";

export function Experience({ content }: { readonly content: Content }) {
  const language = content.languageCode;
  const period = (role: Role) => formatPeriod(role, language, content.experience.present);

  return (
    <section className="section container" id="experience" aria-labelledby="experience-title">
      <div className="section-heading projects-heading">
        <div>
          <p className="eyebrow">{content.experience.eyebrow}</p>
          <h2 id="experience-title">{content.experience.title}</h2>
        </div>
        <p>{content.experience.intro.replace("{years}", String(yearsOfExperience()))}</p>
      </div>

      <ol className="timeline">
        {experience.map((item) => {
          const [current] = item.roles;
          const first = item.roles[item.roles.length - 1];
          const span: Role = { title: current.title, start: first.start, end: current.end };
          return (
            <li className="timeline-item" key={item.organization}>
              <div className="timeline-meta">
                <p className="timeline-period">{period(span)}</p>
                <p>{item.location[language]}</p>
              </div>
              <div className="timeline-body">
                <h3>{item.organization}</h3>
                <ul className="timeline-roles">
                  {item.roles.map((role) => (
                    <li key={role.start}>
                      <strong>{role.title[language]}</strong>
                      {item.roles.length > 1 && <span> · {period(role)}</span>}
                    </li>
                  ))}
                </ul>
                <ul className="timeline-highlights">
                  {item.highlights.map((highlight) => <li key={highlight.en}>{highlight[language]}</li>)}
                </ul>
                {item.stack && (
                  <ul className="tag-list">
                    {item.stack.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
