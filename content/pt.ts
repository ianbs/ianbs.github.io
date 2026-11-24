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
      "Desenvolvimento full-stack com TypeScript, Next.js, Node.js e PostgreSQL: arquitetura de backend, APIs seguras e aplicações web modernas.",
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
    skills: "Stack",
    projects: "Projetos",
    certifications: "Certificações",
    contact: "Contato",
  },
  hero: {
    eyebrow: "Full-stack Developer · Software Engineer",
    role: "Construo aplicações web seguras, APIs e sistemas confiáveis.",
    description:
      "Trabalho com TypeScript, Next.js, Node.js e PostgreSQL, com atenção especial à arquitetura de backend, segurança de aplicações e qualidade de software.",
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
        title: "Stack atual",
        items: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Docker"],
      },
      {
        title: "Engenharia",
        items: ["Design de APIs", "Autenticação e autorização", "Segurança de aplicações", "Bancos relacionais", "Testes", "CI/CD", "Observabilidade"],
      },
      {
        title: "Experiência anterior",
        items: ["NestJS", "Java / Spring", "Python / Flask", "Go", "Data Science", "Cloud / Operações de TI"],
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
  certifications: {
    eyebrow: "Certificações",
    title: "Base profissional.",
    item: "ITIL 4 Foundation",
    description: "Fundamentos de gestão de serviços de TI e entrega de valor.",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre software.",
    description: "Para oportunidades profissionais, colaboração técnica ou uma conversa sobre projetos, envie um email ou fale comigo pelos canais abaixo.",
    email: "Enviar email",
  },
  footer: "Projetado e desenvolvido por Ian Barbosa Santos.",
} as const satisfies Content;
