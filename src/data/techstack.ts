import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiJest,
  SiGit,
  SiVite,
  SiVercel,
  SiFigma,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import type { TechGroup } from '@/types'

export const techStack: TechGroup[] = [
  {
    category: 'frontend',
    comment: '// interface & experiência',
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    category: 'backend',
    comment: '// servidor, dados & testes',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'SQL', icon: TbSql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Jest', icon: SiJest, color: '#C21325' },
    ],
  },
  {
    category: 'tools',
    comment: '// ferramentas & workflow',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
]
