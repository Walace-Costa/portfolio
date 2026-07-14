import type { Project } from '@/types'
import { placeholder } from './placeholder'

/**
 * ============================================================
 *  Edite este arquivo com os seus projetos reais do GitHub.
 *  - `images`: troque pelos caminhos dos seus prints,
 *     ex: '/projects/nome-do-projeto-1.png' (coloque os arquivos em /public/projects)
 *  - `githubUrl` / `liveUrl`: links reais do repositório e do deploy.
 * ============================================================
 */
export const projects: Project[] = [
  {
    id: 'mac-chandeliers',
    title: 'Mac Chandeliers',
    shortDescription:
      'Site institucional para uma marca de lustres de vidro soprado artesanal, com catálogo e animações de entrada.',
    description:
      'Site institucional para a "Mac Chandeliers", marca especializada em lustres e luminárias de vidro soprado artesanal. Apresenta a identidade da marca, catálogo de peças e reveals de rolagem para destacar o trabalho artesanal em vidro.',
    technologies: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Lucide'],
    images: ['/mac1.png', '/mac2.png', '/mac3.png'],
    githubUrl: 'https://github.com/Walace-Costa/Mac-Chandeliers',
    liveUrl: 'https://mac-chandeliers.vercel.app',
    featured: false,
    year: '2026',
  },
  {
    id: 'samba-retro-rv',
    title: 'Samba Retro Rv',
    shortDescription:
      'Landing page para a banda Samba Retrô, com agendamento de shows direto pelo WhatsApp.',
    description:
      'Site institucional de página única para a banda de samba "Samba Retrô", liderada por Rangel Voz. Traz seções de apresentação, história da banda, vídeo de shows ao vivo e galeria de fotos, com animações de entrada ao rolar a página e botão de agendamento que abre uma conversa pré-preenchida no WhatsApp.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AOS'],
    images: ['/samba-retro1.png', '/samba-retro2.png', '/samba-retro3.png'],
    githubUrl: 'https://github.com/Walace-Costa/sambaRetroRv',
    liveUrl: 'https://samba-retro.vercel.app/',
    featured: false,
    year: '2025',
  },
  {
    id: 'projeto-deputado-robenilson',
    title: 'Projeto Deputado Robenilson',
    shortDescription:
      'Site institucional para um mandato político, com biografia, atuação e estatísticas animadas.',
    description:
      'Site institucional em React para divulgar o trabalho e a trajetória do deputado Robenilson. Reúne biografia, área de advocacia, atuação política, galeria de fotos, menções na mídia e um bloco de estatísticas com contadores animados, além de formulário de contato. As seções aparecem com animações suaves conforme o usuário rola a página.',
    technologies: ['React', 'React Router', 'Framer Motion', 'React CountUp', 'CSS'],
    images: ['/deputado1.png', '/deputado2.png', '/deputado3.png'],
    githubUrl: 'https://github.com/Walace-Costa/ProjetoDeputadoRobenilson',
    liveUrl: 'https://robenilson.vercel.app',
    featured: false,
    year: '2026',
  },
  {
    id: 'moveis-estofados',
    title: 'Moveis Estofados',
    shortDescription:
      'Site institucional para divulgar móveis estofados sob encomenda, com pedido direto via WhatsApp.',
    description:
      'Site institucional (sem carrinho ou pagamento online) para uma marcenaria de móveis estofados sob encomenda. Traz catálogo de produtos em carrossel, página de detalhe com zoom na foto, seleção de múltiplos móveis de interesse e envio do pedido pronto direto pelo WhatsApp.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Embla Carousel', 'React Router'],
    images: ['/moveis1.png', '/moveis2.png', '/moveis3.png'],
    githubUrl: 'https://github.com/Walace-Costa/Moveis-Estofados',
    liveUrl: 'https://moveis-estofados.vercel.app',
    featured: false,
    year: '2026',
  },
  // ---- projetos de exemplo: troque pelos seus quando tiver mais repositórios reais ----
  {
    id: 'my-tree',
    title: 'My Tree',
    shortDescription:
      'Aplicação web para gerenciar e compartilhar seus links de redes sociais de forma centralizada.',
    description:
      'Uma aplicação web para gerenciar e compartilhar seus links de redes sociais de forma centralizada. Construída com React, TypeScript e Vite, com autenticação e persistência de dados através do Firebase.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'React Router'],
    images: ['/tree1.png', '/tree2.png', '/tree3.png'],
    githubUrl: 'https://github.com/Walace-Costa/MyTree',
    liveUrl: 'https://mytree-eight.vercel.app',
    featured: false,
    year: '2026',
  },
  {
    id: 'studio-fit',
    title: 'Studio Fit',
    shortDescription:
      'Site institucional para um estúdio de treino funcional, com agendamento de aulas experimentais.',
    description:
      'Landing page para um estúdio de treino funcional, apresentando modalidades, horários de aulas e depoimentos de alunos. Formulário de agendamento de aula experimental com confirmação automática por e-mail.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [placeholder('Studio Fit', 3), placeholder('Studio Fit', 0), placeholder('Studio Fit', 1)],
    featured: false,
    year: '2025',
  },
]
