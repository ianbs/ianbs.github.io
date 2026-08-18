export type LocalizedText = {
  readonly pt: string;
  readonly en: string;
};

export type Project = {
  readonly name: string;
  readonly description: LocalizedText;
  readonly stack: readonly string[];
  readonly repository: string;
  readonly demo?: string;
};

export const featuredProject: Project = {
  name: "events-photos",
  description: {
    pt: "Galeria mobile-first para eventos, com uploads e leituras assinados, autorização no servidor, Storage privado e políticas RLS testadas.",
    en: "A mobile-first event gallery with signed uploads and reads, server-side authorization, private storage, and tested RLS policies.",
  },
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Vitest",
    "pgTAP",
    "Docker",
  ],
  repository: "https://github.com/ianbs/events-photos",
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
    repository: "https://github.com/ianbs/sgcc",
  },
  {
    name: "projetointegrado-ianbs",
    description: {
      pt: "Backend de um sistema de gestão clínica desenvolvido em Spring Boot, com PostgreSQL, JPA, segurança JWT e APIs REST.",
      en: "Backend for a clinical management system built with Spring Boot, PostgreSQL, JPA, JWT security, and REST APIs.",
    },
    stack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "JWT"],
    repository: "https://github.com/ianbs/projetointegrado-ianbs",
  },
  {
    name: "projetointegrado-ianbs-front",
    description: {
      pt: "Interface Next.js para o sistema de gestão clínica, com autenticação, agenda e fluxos de cadastro e atendimento.",
      en: "A Next.js interface for the clinical management system, with authentication, scheduling, registration, and care workflows.",
    },
    stack: ["Next.js", "React", "JavaScript", "styled-components"],
    repository: "https://github.com/ianbs/projetointegrado-ianbs-front",
  },
  {
    name: "python-backup",
    description: {
      pt: "Aplicação desktop para cópia de arquivos e pastas, criada em Python com interface gráfica Qt.",
      en: "A desktop application for copying files and folders, built in Python with a Qt graphical interface.",
    },
    stack: ["Python", "Qt"],
    repository: "https://github.com/ianbs/python-backup",
  },
] as const;
