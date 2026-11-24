import type { Language, LocalizedText } from "@/data/projects";

/** Year and month, e.g. "2020-01". */
export type YearMonth = `${number}-${number}`;

/** First job in technology (Advlink Sistemas internship). */
export const careerStart: YearMonth = "2017-10";

/** Full years since careerStart, evaluated at build time (the site and PDFs are rebuilt on change). */
export function yearsOfExperience(now = new Date()) {
  const [year, month] = careerStart.split("-").map(Number);
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.floor(months / 12);
}

export type Role = {
  readonly title: LocalizedText;
  readonly start: YearMonth;
  /** Omitted for the current role. */
  readonly end?: YearMonth;
};

export type Experience = {
  readonly organization: string;
  readonly location: LocalizedText;
  /** Most recent role first. */
  readonly roles: readonly Role[];
  readonly highlights: readonly LocalizedText[];
  readonly stack?: readonly string[];
};

export const experience: readonly Experience[] = [
  {
    organization: "Plano de Saúde São Lucas",
    location: { pt: "Montes Claros, MG", en: "Montes Claros, Brazil" },
    roles: [
      { title: { pt: "Analista de Sistemas", en: "Systems Analyst" }, start: "2020-01" },
      { title: { pt: "Estagiário de TI", en: "IT Intern" }, start: "2019-10", end: "2020-01" },
    ],
    highlights: [
      {
        pt: "Desenvolvimento, manutenção e automação de aplicações e APIs internas em PHP/Laravel, Python, Node.js e React.",
        en: "Development, maintenance, and automation of internal applications and APIs with PHP/Laravel, Python, Node.js, and React.",
      },
      {
        pt: "Sustentação de sistemas corporativos críticos do setor de saúde, usados por múltiplos setores: investigação de incidentes e falhas de integração com análise de logs, consultas SQL e comportamento de APIs, com foco em causa raiz.",
        en: "Support and evolution of critical healthcare systems used across departments: investigating incidents and integration failures through logs, SQL queries, and API behaviour, with a focus on root cause.",
      },
      {
        pt: "Administração de bancos Oracle SQL, PostgreSQL e MySQL, e relatórios gerenciais com Pentaho e Power BI.",
        en: "Administration of Oracle SQL, PostgreSQL, and MySQL databases, and management reporting with Pentaho and Power BI.",
      },
      {
        pt: "Servidores Windows e Linux, Nginx e virtualização com Proxmox.",
        en: "Windows and Linux servers, Nginx, and virtualization with Proxmox.",
      },
      {
        pt: "Gestão de serviços no GLPI com práticas ITIL 4, incluindo a migração do GLPI 10 para o 11 e a estruturação de um ambiente de homologação.",
        en: "IT service management in GLPI following ITIL 4, including the GLPI 10 to 11 migration and setting up a staging environment.",
      },
    ],
    stack: ["PHP", "Laravel", "Python", "Node.js", "React", "Oracle SQL", "PostgreSQL", "Proxmox", "GLPI"],
  },
  {
    organization: "Freelancer (MEI)",
    location: { pt: "Minas Gerais", en: "Minas Gerais, Brazil" },
    roles: [{ title: { pt: "Engenheiro de Software", en: "Software Engineer" }, start: "2023-05" }],
    highlights: [
      {
        pt: "Soluções web sob demanda para empresas e clientes individuais, do levantamento de requisitos aos testes e à entrega.",
        en: "Custom web solutions for companies and individual clients, from requirements gathering to testing and delivery.",
      },
    ],
    stack: ["PHP", "Laravel", "JavaScript", "React"],
  },
  {
    organization: "Palimontes Comércio e Serviços",
    location: { pt: "Montes Claros, MG", en: "Montes Claros, Brazil" },
    roles: [{ title: { pt: "Estagiário de TI", en: "IT Intern" }, start: "2018-04", end: "2019-09" }],
    highlights: [
      { pt: "Desenvolvimento da intranet corporativa em C# e ASP.NET.", en: "Built the corporate intranet with C# and ASP.NET." },
      { pt: "Suporte a usuários e manutenção de servidores.", en: "User support and server maintenance." },
    ],
    stack: ["C#", "ASP.NET"],
  },
  {
    organization: "DN Informática · Advlink Sistemas",
    location: { pt: "Montes Claros, MG", en: "Montes Claros, Brazil" },
    roles: [{ title: { pt: "Estagiário", en: "Intern" }, start: "2017-10", end: "2018-03" }],
    highlights: [
      {
        pt: "Primeiros estágios: configuração de servidores Windows e Linux, sistemas e suporte técnico a clientes.",
        en: "First internships: Windows and Linux server setup, systems configuration, and customer technical support.",
      },
    ],
  },
];

export type Education = {
  readonly degree: LocalizedText;
  readonly institution: string;
  readonly period: string;
};

export const education: readonly Education[] = [
  {
    degree: { pt: "Pós-graduação em Engenharia de Software", en: "Postgraduate specialization in Software Engineering" },
    institution: "PUC Minas",
    period: "2021–2022",
  },
  {
    degree: { pt: "Bacharelado em Sistemas de Informação", en: "Bachelor's degree in Information Systems" },
    institution: "Faculdades Prominas",
    period: "2018–2019",
  },
  {
    degree: { pt: "Tecnólogo em Gestão da Tecnologia da Informação", en: "Technologist degree in IT Management" },
    institution: "Faculdades Prominas",
    period: "2016–2017",
  },
];

export type Certification = {
  readonly name: string;
  readonly description: LocalizedText;
};

export const certifications: readonly Certification[] = [
  {
    name: "ITIL 4 Foundation",
    description: {
      pt: "Fundamentos de gestão de serviços de TI e entrega de valor.",
      en: "Foundations in IT service management and value delivery.",
    },
  },
  {
    name: "Scrum Fundamentals Certified",
    description: {
      pt: "Fundamentos do framework Scrum e de entrega ágil.",
      en: "Foundations of the Scrum framework and agile delivery.",
    },
  },
];

const monthNames: Readonly<Record<Language, readonly string[]>> = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

function formatYearMonth(value: YearMonth, language: Language) {
  const [year, month] = value.split("-").map(Number);
  return language === "pt" ? `${monthNames.pt[month - 1]}/${year}` : `${monthNames.en[month - 1]} ${year}`;
}

export function formatPeriod(role: Role, language: Language, presentLabel: string) {
  return `${formatYearMonth(role.start, language)} – ${role.end ? formatYearMonth(role.end, language) : presentLabel}`;
}
