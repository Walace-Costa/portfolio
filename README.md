# Portfólio — React + TypeScript

Portfólio pessoal com tema visual de editor de código: paleta inspirada em
syntax highlighting, seções em formato de arquivo/aba de editor e uma
"status bar" fixa (estilo VS Code) com navegação e contatos.

## Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** (design tokens configurados em `tailwind.config.js`)
- **Framer Motion** — animações de entrada, hover e transições
- **react-type-animation** — efeito de digitação no hero
- **react-icons** — ícones de tecnologias (`simple-icons`) e redes sociais

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
  components/   Hero, TechStack, Projects, ProjectModal, Contact, Navbar,
                StatusBar, CodeWindow (elemento visual reutilizável), etc.
  config/       site.ts — seus dados pessoais
  data/         projects.ts, techstack.ts — conteúdo editável
  hooks/        useActiveSection, useScrollProgress
  types/        tipos TypeScript compartilhados
```

## Funcionalidades incluídas

- Loader de entrada estilo "compilando build"
- Barra de progresso de scroll no topo
- Menu responsivo com destaque da seção ativa
- Hero com efeito de digitação (typing) em um bloco de código
- Seção de stack técnica agrupada por categoria (frontend/backend/dados/tools)
- Cards de projeto com modal: galeria de imagens (com navegação por
  teclado ← →), descrição completa, tecnologias e links (GitHub/live)
- Formulário de contato validado que monta a mensagem e abre o WhatsApp
  já preenchido (`wa.me`) — sem precisar de backend
- Ícones de WhatsApp, e-mail, Instagram e GitHub reaproveitados no
  formulário de contato e na status bar
- Status bar fixa (assinatura visual) com seção atual, status de
  disponibilidade, redes sociais e botão de voltar ao topo
- Acessibilidade: foco visível, `aria-label`s, e respeito a
  `prefers-reduced-motion`
- Meta tags básicas de SEO/Open Graph em `index.html`

## Sincronização com o GitHub

Este projeto está conectado a `github.com/Walace-Costa/portfolio`. Alterações
feitas pelo Claude Code são automaticamente commitadas e enviadas (`push`)
para o branch `master`.

## Deploy

Funciona em qualquer host de sites estáticos. Sugestões rápidas:

- **Vercel**: `npm i -g vercel` → `vercel` na raiz do projeto
- **Netlify**: arraste a pasta gerada por `npm run build` (`dist/`) no
  painel do Netlify, ou conecte o repositório do GitHub
- **GitHub Pages**: gere o build e publique o conteúdo de `dist/` na
  branch `gh-pages`

## Próximos passos sugeridos

- Trocar as imagens placeholder pelos prints reais dos seus projetos
- Ajustar as cores em `tailwind.config.js` se quiser uma paleta diferente
- Adicionar Google Analytics / Plausible se quiser métricas de visitas
- Criar uma página "Sobre" separada, se quiser mais conteúdo além da
  landing page
