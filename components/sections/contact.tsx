import type { Content } from "@/content/types";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function Contact({ content }: { readonly content: Content }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2 id="contact-title">{content.contact.title}</h2>
          <p>{content.contact.description}</p>
        </div>
        <div className="contact-actions">
          <a className="button button-inverse" href={`mailto:${site.email}`}><MailIcon />{content.contact.email}</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer"><GithubIcon />GitHub<ArrowUpRightIcon /></a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon />LinkedIn<ArrowUpRightIcon /></a>
        </div>
      </div>
    </section>
  );
}
