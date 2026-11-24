# ianbs.github.io

Portfólio profissional de Ian Barbosa Santos, publicado em [ianbs.github.io](https://ianbs.github.io). O site apresenta o foco atual em desenvolvimento full-stack e engenharia de software, uma seleção curada de projetos e canais profissionais de contato.

## Stack

- Next.js 16 com App Router e Static Export
- React 19
- TypeScript em modo estrito
- Tailwind CSS 4
- GitHub Actions e GitHub Pages

O projeto evita dependências de interface desnecessárias. Tema, idioma e ícones são implementados com React, CSS e recursos nativos do navegador.

## Idiomas

Cada idioma é uma página estática própria, com HTML, `lang`, título, descrição e imagem de compartilhamento próprios:

- `/` — português (`app/(pt)/`)
- `/en/` — inglês (`app/(en)/en/`)

As páginas se referenciam com `hreflang` (português como `x-default`), e o `sitemap.xml` lista as duas. O botão de idioma é um link comum. A escolha fica salva no navegador, e quem escolheu inglês e volta para `/` é levado a `/en/`. O site não redireciona a partir do idioma do navegador, para que os buscadores sempre indexem as duas versões. Links diretos para `/en/` nunca são redirecionados.

Como há um layout raiz por idioma, a página 404 usa `app/global-not-found.tsx`, que exige `experimental.globalNotFound` em `next.config.ts`.

As imagens de compartilhamento (1200×630) são geradas no build por `app/og/<idioma>.png/route.tsx` a partir de `lib/og-image.tsx`.

## Requisitos

- Node.js 22 ou superior
- pnpm 11.19.0

## Instalação

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Comandos

```bash
pnpm dev        # servidor de desenvolvimento
pnpm lint       # análise estática com ESLint
pnpm typecheck  # verificação do TypeScript sem emitir arquivos
pnpm build      # build e export estático para out/
```

## Estrutura

```text
app/          rotas por idioma, 404, imagens OG, sitemap, robots e estilos globais
components/   layout, seções e elementos de interface
content/      conteúdo equivalente em português e inglês
data/         seleção tipada e bilíngue de projetos (fonte única dos textos dos projetos)
lib/          dados do site, metadata, imagem OG e chaves de preferência
public/       foto, favicon e arquivos públicos
```

Os projetos são curados em `data/projects.ts`; não há chamada à API do GitHub durante a navegação. Os textos ficam em objetos tipados dentro de `content/`.

## Build estático

`next.config.ts` define `output: "export"` e desativa a otimização dinâmica de imagens, que não está disponível no GitHub Pages. O build produz o diretório `out/` completo, incluindo `robots.txt` e `sitemap.xml`.

Como este é um site de usuário (`ianbs.github.io`), não existe `basePath` de repositório.

## Deploy

O workflow `.github/workflows/deploy.yml` é executado em pushes para `master` e também pode ser iniciado manualmente. Ele:

1. instala as dependências com lockfile congelado;
2. executa lint e typecheck;
3. gera o export estático;
4. publica `out/` com as ações oficiais do GitHub Pages.

No repositório do GitHub, a fonte do Pages deve estar configurada como **GitHub Actions**.
