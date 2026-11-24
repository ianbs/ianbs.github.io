import type { Content } from "./types";

export const en = {
  languageName: "English",
  languageCode: "en",
  switchLanguage: "Switch language to Portuguese",
  alternatePath: "/",
  meta: {
    htmlLang: "en",
    path: "/en/",
    ogLocale: "en_US",
    alternateOgLocale: "pt_BR",
    title: "Ian Barbosa Santos | Full-stack Developer & Software Engineer",
    description:
      "Full-stack development with TypeScript, Next.js, Node.js, and PostgreSQL: backend architecture, secure APIs, and modern web applications.",
    ogImageAlt: "Ian Barbosa Santos — Full-stack Developer and Software Engineer",
  },
  a11y: {
    skipLink: "Skip to content",
    home: "Ian Barbosa Santos — home",
    primaryNav: "Main",
    mobileNav: "Mobile navigation",
    socialLinks: "Professional profiles",
    backToTop: "Back to top",
  },
  theme: {
    label: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  nav: {
    menu: "Open navigation",
    about: "About",
    skills: "Stack",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Full-stack Developer · Software Engineer",
    role: "I build secure web applications, APIs, and reliable systems.",
    description:
      "I work with TypeScript, Next.js, Node.js, and PostgreSQL, with particular attention to backend architecture, application security, and software quality.",
    primaryCta: "View projects",
    contactCta: "Get in touch",
    profileAlt: "Ian Barbosa Santos seated in an indoor setting",
    lensLabel: "Engineering lens",
    lens: ["Architecture", "Security", "Reliability"],
  },
  about: {
    eyebrow: "About",
    title: "Software beyond the interface.",
    paragraphs: [
      "My background spans operations, support, cloud, data, and software development. It gave me a broad view of systems: how they are built, operated, protected, and maintained.",
      "Today I focus on full-stack and backend development, turning requirements into clear, secure, and maintainable applications — from data modeling to the user experience.",
    ],
  },
  skills: {
    eyebrow: "Stack and practice",
    title: "Technology chosen with purpose.",
    groups: [
      {
        title: "Current stack",
        items: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Docker"],
      },
      {
        title: "Engineering",
        items: ["API design", "Authentication and authorization", "Application security", "Relational databases", "Testing", "CI/CD", "Observability"],
      },
      {
        title: "Previous experience",
        items: ["NestJS", "Java / Spring", "Python / Flask", "Go", "Data Science", "Cloud / IT Operations"],
      },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects that show how I build.",
    intro: "A curated selection of public applications and studies, led by my most recent and complete project.",
    featuredLabel: "Featured project",
    engineeringLabel: "What it demonstrates",
    selectedTitle: "Other projects",
    repository: "Repository",
    demo: "View application",
  },
  certifications: {
    eyebrow: "Certifications",
    title: "Professional foundation.",
    item: "ITIL 4 Foundation",
    description: "Foundations in IT service management and value delivery.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about software.",
    description: "For professional opportunities, technical collaboration, or a conversation about projects, send an email or reach me through the channels below.",
    email: "Send email",
  },
  footer: "Designed and developed by Ian Barbosa Santos.",
} as const satisfies Content;
