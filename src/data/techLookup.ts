import { techStack } from './techstack'
import type { TechItem } from '@/types'

/**
 * Achata todos os grupos de techstack.ts num único dicionário
 * { "React": { icon, color, name }, ... } pra permitir reaproveitar
 * os mesmos ícones/cores em outros lugares (ex: tags dos cards de projeto).
 */
export const techLookup: Record<string, TechItem> = techStack
  .flatMap((group) => group.items)
  .reduce((acc, item) => {
    acc[item.name] = item
    return acc
  }, {} as Record<string, TechItem>)
