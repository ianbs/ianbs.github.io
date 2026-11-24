import type { Content } from "@/content/types";
import { cvLanguages, cvLocation, cvSkills, cvSkillTranslations, cvSummary } from "@/data/cv";
import { certifications, education, experience, formatPeriod, yearsOfExperience } from "@/data/experience";
import { featuredProject, projects } from "@/data/projects";
import { site } from "@/lib/site";
import "./resume.css";

const display = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

/** Print-first résumé (A4). Rendered to PDF by scripts/generate-cv.mjs. */
export function Resume({ content }: { readonly content: Content }) {
  const language = content.languageCode;
  const translateSkill = (item: string) => (language === "en" ? cvSkillTranslations[item] ?? item : item);

  return (
    <main className="cv">
      <header className="cv-header">
        <h1>{site.name}</h1>
        <p className="cv-headline">{content.hero.eyebrow}</p>
        <p className="cv-contact">
          <span>{cvLocation[language]}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin}>{display(site.linkedin)}</a>
          <a href={site.github}>{display(site.github)}</a>
          <a href={language === "en" ? `${site.url}/en/` : site.url}>{display(site.url)}</a>
        </p>
      </header>

      <section>
        <h2>{content.cv.summary}</h2>
        <p>{cvSummary[language].replace("{years}", String(yearsOfExperience()))}</p>
      </section>

      <section>
        <h2>{content.cv.experience}</h2>
        {experience.map((item) => (
          <article className="cv-entry" key={item.organization}>
            <div className="cv-entry-head">
              <h3>{item.organization}</h3>
              <span>{item.location[language]}</span>
            </div>
            {item.roles.map((role) => (
              <p className="cv-role" key={role.start}>
                <strong>{role.title[language]}</strong>
                <span>{formatPeriod(role, language, content.experience.present)}</span>
              </p>
            ))}
            <ul>
              {item.highlights.map((highlight) => <li key={highlight.en}>{highlight[language]}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h2>{content.cv.projects}</h2>
        {[featuredProject, ...projects].map((project) => (
          <article className="cv-entry" key={project.name}>
            <div className="cv-entry-head">
              <h3>{project.name}</h3>
              <span>{project.stack.join(" · ")}</span>
            </div>
            <p>{project.description[language]}</p>
            <p className="cv-links">
              {project.repositories.map((repository) => (
                <a key={repository.url} href={repository.url}>{display(repository.url)}</a>
              ))}
              {project.demo && <a href={project.demo}>{display(project.demo)}</a>}
            </p>
          </article>
        ))}
      </section>

      <section>
        <h2>{content.cv.skills}</h2>
        <dl className="cv-skills">
          {cvSkills.map((group) => (
            <div key={group.label.en}>
              <dt>{group.label[language]}</dt>
              <dd>{group.items.map(translateSkill).join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="cv-columns">
        <section>
          <h2>{content.cv.education}</h2>
          <ul className="cv-plain">
            {education.map((item) => (
              <li key={item.degree.en}>
                <strong>{item.degree[language]}</strong>
                <span>{item.institution} · {item.period}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{content.cv.certifications}</h2>
          <ul className="cv-plain">
            {certifications.map((item) => <li key={item.name}><strong>{item.name}</strong></li>)}
          </ul>
          <h2>{content.cv.languages}</h2>
          <ul className="cv-plain">
            {cvLanguages.map((item) => <li key={item.en}>{item[language]}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
