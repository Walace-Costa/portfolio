import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight, HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '@/types'
import { site } from '@/config/site'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    setImageIndex(0)
  }, [project])

  useEffect(() => {
    if (!project) return

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setImageIndex((i) => (i + 1) % project.images.length)
      if (e.key === 'ArrowLeft')
        setImageIndex((i) => (i - 1 + project.images.length) % project.images.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-canvas/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-xl border border-line bg-panel shadow-2xl"
          >
            <div className="flex items-center justify-between px-2 border-b border-line bg-panel2 sticky top-0 z-10">
              <div className="flex items-center gap-2 px-3 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                <span className="font-mono text-xs text-ink/80">
                  {project.id}.project.tsx
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="p-2 mr-1 text-muted hover:text-ink transition-colors"
              >
                <HiX size={20} />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              {/* galeria */}
              <div className="relative rounded-lg overflow-hidden border border-line bg-canvas">
                <img
                  src={project.images[imageIndex]}
                  alt={`${project.title} — imagem ${imageIndex + 1}`}
                  className="w-full aspect-[16/10] object-cover"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setImageIndex(
                          (i) => (i - 1 + project.images.length) % project.images.length
                        )
                      }
                      aria-label="Imagem anterior"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-canvas/70 border border-line rounded-full p-2 text-ink hover:text-accent-blue transition-colors"
                    >
                      <HiChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setImageIndex((i) => (i + 1) % project.images.length)}
                      aria-label="Próxima imagem"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-canvas/70 border border-line rounded-full p-2 text-ink hover:text-accent-blue transition-colors"
                    >
                      <HiChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImageIndex(i)}
                          aria-label={`Ir para imagem ${i + 1}`}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            i === imageIndex ? 'bg-accent-blue' : 'bg-ink/30'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-faint">{project.year}</p>
                  <h3 className="font-mono font-bold text-2xl text-ink mt-1">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://github.com/${site.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs px-3.5 py-2 rounded-md border border-line text-ink hover:border-accent-mint/50 hover:text-accent-mint transition-colors"
                  >
                    <FaGithub size={14} /> código
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs px-3.5 py-2 rounded-md bg-accent-blue text-canvas font-semibold hover:brightness-110 transition"
                    >
                      <HiOutlineExternalLink size={14} /> live
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 text-muted leading-relaxed">{project.description}</p>

              <div className="mt-5">
                <p className="font-mono text-xs text-faint uppercase tracking-widest mb-2.5">
                  // stack utilizada
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-panel2 border border-line text-accent-mint/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
