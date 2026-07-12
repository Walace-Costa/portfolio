import { motion } from 'framer-motion'

interface SectionHeadingProps {
  comment: string
  title: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  comment,
  title,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      <p className="font-mono text-sm text-accent-mint/80 mb-2">{comment}</p>
      <h2 className="font-mono font-bold text-3xl sm:text-4xl text-ink tracking-tight">
        {title}
      </h2>
      <div
        className={`h-px w-16 bg-gradient-to-r from-accent-blue to-accent-mint mt-5 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  )
}
