import type { LocalizedText } from "@/data/projects";

/**
 * Content used only by the printable résumé (app/(pt)/curriculo, app/(en)/en/resume).
 * Experience, education, certifications and projects come from the same data files as the site.
 */

/** "{years}" is replaced with yearsOfExperience() when rendered. */
export const cvSummary: LocalizedText = {
  pt: "Desenvolvedor full-stack e Analista de Sistemas com mais de {years} anos de experiência em tecnologia; desde 2019, desenvolvo e sustento sistemas corporativos críticos do setor de saúde. No dia a dia, trabalho com PHP/Laravel, SQL, Python e Node.js, análise de dados com Pentaho e Power BI, bancos relacionais (Oracle SQL, PostgreSQL, MySQL), servidores Linux e Windows, nuvem DigitalOcean e gestão de serviços com ITIL 4. Em projetos recentes, uso TypeScript, Next.js e Supabase, com foco em arquitetura de backend, segurança de aplicações e qualidade de software.",
  en: "Full-stack developer and Systems Analyst with {years}+ years of experience in technology; since 2019 I have built and supported critical healthcare business systems. Day to day I work with PHP/Laravel, SQL, Python, and Node.js, data analysis with Pentaho and Power BI, relational databases (Oracle SQL, PostgreSQL, MySQL), Linux and Windows servers, DigitalOcean cloud, and ITIL 4 service management. Recent projects use TypeScript, Next.js, and Supabase, with a focus on backend architecture, application security, and software quality.",
};

export const cvSkills: readonly { readonly label: LocalizedText; readonly items: readonly string[] }[] = [
  {
    label: { pt: "Linguagens", en: "Languages" },
    items: ["PHP", "SQL", "Python", "JavaScript", "TypeScript", "Java", "C#"],
  },
  {
    label: { pt: "Frameworks", en: "Frameworks" },
    items: ["Laravel", "Next.js", "React", "Node.js", "NestJS", "Spring Boot", "ASP.NET"],
  },
  {
    label: { pt: "Dados", en: "Data" },
    items: ["Análise de dados", "PostgreSQL", "Oracle SQL", "MySQL", "Supabase", "Pentaho", "Power BI"],
  },
  {
    label: { pt: "Infraestrutura", en: "Infrastructure" },
    items: ["DigitalOcean", "Linux", "Windows Server", "Docker", "Nginx", "Proxmox", "Git", "CI/CD"],
  },
  {
    label: { pt: "Práticas", en: "Practices" },
    items: ["ITIL 4", "GLPI", "Scrum", "Testes (Vitest, pgTAP)", "APIs REST", "Autenticação e autorização"],
  },
];

/** Practice labels that need translating; everything else is a proper noun. */
export const cvSkillTranslations: Readonly<Record<string, string>> = {
  "Análise de dados": "Data analysis",
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
