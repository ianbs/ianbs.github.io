import type { Content } from "@/content/types";
import { featuredProject, projects, type ProjectRepository } from "@/data/projects";
import { ArrowUpRightIcon, GithubIcon } from "@/components/ui/icons";

function repositoryText(content: Content, repository: ProjectRepository) {
  return repository.label ? `${content.projects.repository} · ${repository.label}` : content.projects.repository;
}

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
          <h3>{featuredProject.title[language]}</h3>
          <p className="featured-description">{featuredProject.description[language]}</p>
          <ul className="tag-list">
            {featuredProject.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="project-actions">
            {featuredProject.repositories.map((repository) => (
              <a key={repository.url} href={repository.url} target="_blank" rel="noopener noreferrer">
                <GithubIcon />{repositoryText(content, repository)}<ArrowUpRightIcon />
              </a>
            ))}
            {featuredProject.demo && (
              <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                {content.projects.demo}<ArrowUpRightIcon />
              </a>
            )}
          </div>
        </div>
        <div className="engineering-panel">
          <p>{content.projects.engineeringLabel}</p>
          <ul>{featuredProject.highlights.map((item) => <li key={item.en}>{item[language]}</li>)}</ul>
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
              <div className="project-card-links">
                {project.repositories.map((repository) => (
                  <a key={repository.url} href={repository.url} target="_blank" rel="noopener noreferrer">
                    {repositoryText(content, repository)}<ArrowUpRightIcon />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
