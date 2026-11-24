import type { Content } from "./types";

export const pt = {
  languageName: "Português",
  languageCode: "pt",
  switchLanguage: "Mudar idioma para inglês",
  alternatePath: "/en/",
  meta: {
    htmlLang: "pt-BR",
    path: "/",
    ogLocale: "pt_BR",
    alternateOgLocale: "en_US",
    title: "Ian Barbosa Santos | Desenvolvedor Full-stack e Engenheiro de Software",
    description:
      "Desenvolvimento full-stack com Laravel, SQL, Python, Node.js, TypeScript e Next.js: arquitetura de backend, APIs seguras, análise de dados e aplicações web.",
    ogImageAlt: "Ian Barbosa Santos — Desenvolvedor Full-stack e Engenheiro de Software",
  },
  a11y: {
    skipLink: "Pular para o conteúdo",
    home: "Ian Barbosa Santos — início",
    primaryNav: "Principal",
    mobileNav: "Navegação móvel",
    socialLinks: "Redes profissionais",
    backToTop: "Voltar ao topo",
  },
  theme: {
    label: "Tema",
    light: "Claro",
    dark: "Escuro",
    system: "Sistema",
  },
  nav: {
    menu: "Abrir navegação",
    about: "Sobre",
    experience: "Experiência",
    skills: "Stack",
    projects: "Projetos",
    education: "Formação",
    contact: "Contato",
  },
  hero: {
    eyebrow: "Full-stack Developer · Software Engineer",
    role: "Construo aplicações web seguras, APIs e sistemas confiáveis.",
    description:
      "Hoje trabalho com Laravel, SQL, Python e Node.js, análise de dados com Pentaho e nuvem na DigitalOcean. Em projetos recentes, uso TypeScript e Next.js, sempre com atenção à arquitetura de backend, à segurança e à qualidade de software.",
    primaryCta: "Ver projetos",
    contactCta: "Entrar em contato",
    profileAlt: "Ian Barbosa Santos sentado em um ambiente interno",
    lensLabel: "Perspectiva de engenharia",
    lens: ["Arquitetura", "Segurança", "Confiabilidade"],
  },
  about: {
    eyebrow: "Sobre",
    title: "Software além da interface.",
    paragraphs: [
      "Minha trajetória passa por operações, suporte, cloud, dados e desenvolvimento. Essa experiência me deu uma visão ampla dos sistemas: como são construídos, operados, protegidos e mantidos.",
      "Hoje atuo com foco em desenvolvimento full-stack e backend, transformando requisitos em aplicações claras, seguras e sustentáveis — da modelagem de dados à experiência de quem usa.",
    ],
  },
  skills: {
    eyebrow: "Stack e prática",
    title: "Tecnologia escolhida com propósito.",
    groups: [
      {
        title: "No dia a dia",
        items: ["Laravel", "PHP", "SQL", "Python", "Node.js", "React", "DigitalOcean", "Linux / Windows Server", "Proxmox", "GLPI / ITIL 4"],
      },
      {
        title: "Dados e BI",
        items: ["Análise de dados", "Pentaho", "Power BI", "Oracle SQL", "PostgreSQL", "MySQL"],
      },
      {
        title: "Projetos recentes",
        items: ["TypeScript", "Next.js", "React", "Supabase", "PostgreSQL", "NestJS", "Docker", "Vitest"],
      },
      {
        title: "Engenharia",
        items: ["Design de APIs", "Autenticação e autorização", "Segurança de aplicações", "Bancos relacionais", "Testes", "CI/CD", "Observabilidade"],
      },
    ],
  },
  projects: {
    eyebrow: "Trabalho selecionado",
    title: "Projetos que mostram como eu construo.",
    intro: "Uma seleção curada de aplicações e estudos públicos — com o projeto mais recente e completo em destaque.",
    featuredLabel: "Projeto em destaque",
    engineeringLabel: "O que demonstra",
    selectedTitle: "Outros projetos",
    repository: "Repositório",
    demo: "Ver aplicação",
  },
  experience: {
    eyebrow: "Experiência",
    title: "Sistemas reais, em produção.",
    intro: "Mais de {years} anos entre desenvolvimento, sustentação de sistemas críticos, dados e infraestrutura.",
    present: "atual",
  },
  education: {
    eyebrow: "Formação",
    title: "Base acadêmica e certificações.",
    educationLabel: "Formação acadêmica",
    certificationsLabel: "Certificações",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre software.",
    description: "Para oportunidades profissionais, colaboração técnica ou uma conversa sobre projetos, envie um email ou fale comigo pelos canais abaixo.",
    email: "Enviar email",
  },
  cv: {
    documentTitle: "Currículo — Ian Barbosa Santos",
    download: "Currículo (PDF)",
    summary: "Resumo",
    experience: "Experiência profissional",
    projects: "Projetos",
    skills: "Competências técnicas",
    education: "Formação acadêmica",
    certifications: "Certificações",
    languages: "Idiomas",
  },
  footer: "Projetado e desenvolvido por Ian Barbosa Santos.",
} as const satisfies Content;
