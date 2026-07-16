import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlinePhotograph } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'
import { projects } from '@/data/projects'
import { techLookup } from '@/data/techLookup'
import { site } from '@/config/site'
import type { Project } from '@/types'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading comment="// repositories" title="Projetos" />
          <a
            href={`https://github.com/${site.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent-blue transition-colors mb-1"
          >
            ver todos no github →
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative text-left rounded-xl border border-line bg-panel/60 overflow-hidden transition-all duration-300 flex flex-col hover:border-accent-blue/40 hover:shadow-[0_12px_36px_-8px_rgba(110,155,255,0.18)]"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-mint scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-10" />

              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-canvas">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="flex items-center gap-1.5 font-mono text-xs text-ink bg-panel/90 border border-line px-3 py-1.5 rounded-md">
                    <HiOutlinePhotograph size={14} />
                    ver detalhes
                  </span>
                </div>
                {project.featured && (
                  <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider bg-accent-amber/15 text-accent-amber border border-accent-amber/30 rounded px-2 py-0.5">
                    destaque
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-mono font-semibold text-ink group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] text-faint shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 3).map((tech) => {
                    const info = techLookup[tech]
                    const Icon = info?.icon
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2 py-1 rounded-md bg-panel2 border border-line"
                        style={{ color: info?.color ?? '#6ee7b7' }}
                      >
                        {Icon && <Icon size={12} />}
                        <span className="text-ink/70">{tech}</span>
                      </span>
                    )
                  })}
                  {project.technologies.length > 3 && (
                    <span className="font-mono text-[11px] px-2 py-1 text-faint">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
