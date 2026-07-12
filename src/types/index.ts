export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  technologies: string[]
  images: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  year: string
}

import type { IconType } from 'react-icons'

export interface TechItem {
  name: string
  icon: IconType
  color: string
}

export interface TechGroup {
  category: string
  comment: string
  items: TechItem[]
}
