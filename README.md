# ianbs.github.io

Site pessoal de **curriculo online** para apresentar perfil profissional, conhecimentos, certificacoes e projetos publicos.

## Visao geral

Este projeto foi construido como uma pagina unica (single-page) com foco em:

- apresentar experiencia profissional de forma objetiva;
- mostrar conhecimentos tecnicos por area;
- listar projetos recentes do GitHub automaticamente;
- oferecer versao em portugues e ingles com troca de idioma no front-end.

## Funcionalidades

- Tema escuro responsivo (desktop e mobile).
- Seletor de idioma `PT/EN` com persistencia em `localStorage`.
- Secao de projetos populada via API publica do GitHub.
- Animacoes leves de entrada nas secoes.
- Links diretos para contato (email, LinkedIn, GitHub, Instagram).

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome (icones locais em `libs/fontawesome`)
- GitHub API (repositorios publicos)

## Estrutura do projeto

```text
.
├── index.html
├── css/
│   └── main.css
├── js/
│   ├── main.js
│   └── projects.js
├── images/
└── libs/
```

## Como executar localmente

Opcao 1: abrir o `index.html` direto no navegador.

Opcao 2: subir um servidor local (recomendado):

```bash
python3 -m http.server 8000
```

Depois acesse: `http://localhost:8000`

## Personalizacao

### 1) Conteudo da pagina

- Estrutura e secoes: `index.html`
- Textos com traducao PT/EN: `js/main.js` (objeto `TRANSLATIONS`)

### 2) Tema e layout

- Cores, espacamentos, cards e responsividade: `css/main.css`

### 3) Projetos exibidos

- Integracao com GitHub: `js/projects.js`
- Para trocar o usuario exibido, altere a URL:
  - `https://api.github.com/users/<usuario>/repos?...`

## Publicacao

Este repositorio pode ser publicado diretamente com **GitHub Pages**.

## Licenca

Uso pessoal.
