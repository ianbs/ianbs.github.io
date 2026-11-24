import type { LocalizedText } from "@/data/projects";

/**
 * Content used only by the printable résumé (app/(pt)/curriculo, app/(en)/en/resume).
 * Experience, education, certifications and projects come from the same data files as the site.
 */

export const cvSummary: LocalizedText = {
  pt: "Desenvolvedor full-stack e Analista de Sistemas, atuando desde 2019 no desenvolvimento e na sustentação de sistemas corporativos críticos do setor de saúde. Experiência com PHP/Laravel, Python, Node.js e React, bancos relacionais (Oracle SQL, PostgreSQL, MySQL), servidores Windows e Linux e gestão de serviços com ITIL 4. Em projetos recentes, trabalho com TypeScript, Next.js e Supabase, com foco em arquitetura de backend, segurança de aplicações e qualidade de software.",
  en: "Full-stack developer and Systems Analyst, building and supporting critical healthcare business systems since 2019. Experienced with PHP/Laravel, Python, Node.js, and React, relational databases (Oracle SQL, PostgreSQL, MySQL), Windows and Linux servers, and ITIL 4 service management. Recent projects use TypeScript, Next.js, and Supabase, with a focus on backend architecture, application security, and software quality.",
};

export const cvSkills: readonly { readonly label: LocalizedText; readonly items: readonly string[] }[] = [
  {
    label: { pt: "Linguagens", en: "Languages" },
    items: ["TypeScript", "JavaScript", "PHP", "Python", "Java", "C#", "SQL"],
  },
  {
    label: { pt: "Frameworks", en: "Frameworks" },
    items: ["Laravel", "Next.js", "React", "Node.js", "NestJS", "Spring Boot", "ASP.NET"],
  },
  {
    label: { pt: "Dados", en: "Data" },
    items: ["PostgreSQL", "Oracle SQL", "MySQL", "Supabase", "Pentaho", "Power BI"],
  },
  {
    label: { pt: "Infraestrutura", en: "Infrastructure" },
    items: ["Linux", "Windows Server", "Docker", "Nginx", "Proxmox", "Git", "CI/CD"],
  },
  {
    label: { pt: "Práticas", en: "Practices" },
    items: ["ITIL 4", "GLPI", "Scrum", "Testes (Vitest, pgTAP)", "APIs REST", "Autenticação e autorização"],
  },
];

/** Practice labels that need translating; everything else is a proper noun. */
export const cvSkillTranslations: Readonly<Record<string, string>> = {
  "Testes (Vitest, pgTAP)": "Testing (Vitest, pgTAP)",
  "APIs REST": "REST APIs",
  "Autenticação e autorização": "Authentication and authorization",
};

export const cvLanguages: readonly LocalizedText[] = [
  { pt: "Português — nativo", en: "Portuguese — native" },
  { pt: "Inglês — intermediário", en: "English — intermediate" },
];

export const cvLocation: LocalizedText = {
  pt: "Montes Claros, MG, Brasil",
  en: "Montes Claros, MG, Brazil",
};

export const cvFiles = {
  pt: { route: "/curriculo/", pdf: "/cv/ian-barbosa-santos-curriculo.pdf" },
  en: { route: "/en/resume/", pdf: "/cv/ian-barbosa-santos-resume.pdf" },
} as const;
