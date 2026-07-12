import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LINES = [
  'resolvendo dependências...',
  'compilando componentes...',
  'otimizando assets...',
  'pronto.',
]

export default function Loader() {
  const [lineIndex, setLineIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setDone(true)
      return
    }

    const interval = setInterval(() => {
      setLineIndex((i) => {
        if (i >= LINES.length - 1) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 320)
          return i
        }
        return i + 1
      })
    }, 260)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-canvas flex items-center justify-center"
        >
          <div className="font-mono text-sm sm:text-base text-muted w-[300px] sm:w-[380px]">
            <p className="text-accent-mint mb-3">$ npm run dev</p>
            {LINES.slice(0, lineIndex + 1).map((line, i) => (
              <p key={i} className={i === lineIndex ? 'text-ink' : 'opacity-50'}>
                {i === LINES.length - 1 ? '✓ ' : '› '}
                {line}
              </p>
            ))}
            <span className="inline-block w-2 h-4 bg-accent-blue align-middle ml-1 animate-blink" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
