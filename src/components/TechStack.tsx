import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { techStack } from '@/data/techstack'

export default function TechStack() {
  return (
    <section id="stack" className="py-24 sm:py-32 relative">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading comment="// dependencies" title="Tecnologias que domino" />

        <div className="mt-14 space-y-12">
          {techStack.map((group, groupIndex) => (
            <div key={group.category}>
              <p className="font-mono text-xs text-faint uppercase tracking-widest mb-4">
                {group.comment}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {group.items.map((tech, i) => {
                  const Icon = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.4,
                        delay: (groupIndex * 0.05 + i * 0.03) % 0.6,
                        ease: 'easeOut',
                      }}
                      whileHover={{ y: -4 }}
                      className="group flex items-center gap-3 rounded-lg border border-line bg-panel/60 px-4 py-3.5 transition-colors hover:border-accent-blue/30"
                    >
                      <Icon
                        size={22}
                        style={{ color: tech.color }}
                        className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="font-mono text-sm text-ink/90 truncate">
                        {tech.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
