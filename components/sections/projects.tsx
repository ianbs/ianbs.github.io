import type { Content } from "@/content/types";
import { featuredProject, projects } from "@/data/projects";
import { ArrowUpRightIcon, GithubIcon } from "@/components/ui/icons";

export function Projects({ content }: { readonly content: Content }) {
  const language = content.languageCode;
  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <div className="section-heading projects-heading">
        <div>
          <p className="eyebrow">{content.projects.eyebrow}</p>
          <h2 id="projects-title">{content.projects.title}</h2>
        </div>
        <p>{content.projects.intro}</p>
      </div>

      <article className="featured-project">
        <div className="featured-main">
          <p className="project-label">{content.projects.featuredLabel}</p>
          <p className="project-kicker">{featuredProject.name}</p>
          <h3>{content.projects.featuredTitle}</h3>
          <p className="featured-description">{content.projects.featuredDescription}</p>
          <ul className="tag-list">
            {featuredProject.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="project-actions">
            <a href={featuredProject.repository} target="_blank" rel="noopener noreferrer">
              <GithubIcon />{content.projects.repository}<ArrowUpRightIcon />
            </a>
            {featuredProject.demo && (
              <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                {content.projects.demo}<ArrowUpRightIcon />
              </a>
            )}
          </div>
        </div>
        <div className="engineering-panel">
          <p>{content.projects.engineeringLabel}</p>
          <ul>{content.projects.engineeringPoints.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </article>

      <h3 className="selected-projects-title">{content.projects.selectedTitle}</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <p className="project-kicker">{project.name}</p>
              <p>{project.description[language]}</p>
            </div>
            <div>
              <ul className="tag-list">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                {content.projects.repository}<ArrowUpRightIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
