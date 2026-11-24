export type Language = "pt" | "en";

export type LocalizedText = Readonly<Record<Language, string>>;

export type ProjectRepository = {
  /** Distinguishes repositories when a project has more than one (e.g. API and front-end). */
  readonly label?: string;
  readonly url: string;
};

export type Project = {
  readonly name: string;
  readonly description: LocalizedText;
  readonly stack: readonly string[];
  readonly repositories: readonly ProjectRepository[];
  readonly demo?: string;
};

export type FeaturedProject = Project & {
  readonly title: LocalizedText;
  readonly highlights: readonly LocalizedText[];
};

export const featuredProject: FeaturedProject = {
  name: "events-photos",
  title: {
    pt: "Compartilhamento seguro de fotos para eventos",
    en: "Secure event photo sharing",
  },
  description: {
    pt: "Uma aplicação mobile-first em que convidados enviam e acessam suas fotos, enquanto administradores gerenciam o acervo com controles de acesso explícitos.",
    en: "A mobile-first application where guests upload and access their photos while administrators manage the collection through explicit access controls.",
  },
  highlights: [
    { pt: "Autorização no servidor e Storage privado", en: "Server-side authorization and private storage" },
    { pt: "URLs assinadas e validação real de arquivos", en: "Signed URLs and real file validation" },
    { pt: "RLS, migrations e testes de políticas", en: "RLS, migrations, and policy tests" },
    { pt: "Separação entre UI, domínio e infraestrutura", en: "Separation of UI, domain, and infrastructure" },
  ],
  stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Vitest", "pgTAP", "Docker"],
  repositories: [{ url: "https://github.com/ianbs/events-photos" }],
  demo: "https://events-photos.vercel.app",
};

export const projects: readonly Project[] = [
  {
    name: "sgcc",
    description: {
      pt: "API de gestão clínica em NestJS e PostgreSQL, com autenticação JWT, permissões, validação e módulos para consultas e cadastros.",
      en: "A clinical management API built with NestJS and PostgreSQL, including JWT authentication, permissions, validation, and appointment modules.",
    },
    stack: ["NestJS", "TypeScript", "PostgreSQL", "JWT", "Docker"],
    repositories: [{ url: "https://github.com/ianbs/sgcc" }],
  },
  {
    name: "projetointegrado-ianbs",
    description: {
      pt: "Sistema de gestão clínica completo: backend em Spring Boot com PostgreSQL, JPA, segurança JWT e APIs REST, e interface Next.js com autenticação, agenda e fluxos de cadastro e atendimento.",
      en: "A complete clinical management system: a Spring Boot backend with PostgreSQL, JPA, JWT security, and REST APIs, plus a Next.js interface with authentication, scheduling, registration, and care workflows.",
    },
    stack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "JWT", "Next.js", "React"],
    repositories: [
      { label: "API", url: "https://github.com/ianbs/projetointegrado-ianbs" },
      { label: "Front-end", url: "https://github.com/ianbs/projetointegrado-ianbs-front" },
    ],
  },
];
