import { motion, useReducedMotion } from 'framer-motion'

interface Glyph {
  symbol: string
  left: string
  size: number
  duration: number
  delay: number
  opacity: number
  color: 'text-accent-blue' | 'text-accent-mint'
}

const GLYPHS: Glyph[] = [
  { symbol: '{ }', left: '6%', size: 22, duration: 18, delay: 0, opacity: 0.14, color: 'text-accent-blue' },
  { symbol: '</>', left: '16%', size: 15, duration: 23, delay: 3, opacity: 0.1, color: 'text-accent-mint' },
  { symbol: '=>', left: '27%', size: 19, duration: 16, delay: 7, opacity: 0.13, color: 'text-accent-blue' },
  { symbol: ';', left: '39%', size: 30, duration: 21, delay: 1, opacity: 0.09, color: 'text-accent-mint' },
  { symbol: 'const', left: '52%', size: 13, duration: 25, delay: 9, opacity: 0.11, color: 'text-accent-blue' },
  { symbol: '01', left: '63%', size: 17, duration: 19, delay: 4, opacity: 0.12, color: 'text-accent-mint' },
  { symbol: '#', left: '74%', size: 26, duration: 17, delay: 11, opacity: 0.08, color: 'text-accent-blue' },
  { symbol: 'npm', left: '84%', size: 14, duration: 22, delay: 2, opacity: 0.1, color: 'text-accent-mint' },
  { symbol: '</>', left: '93%', size: 18, duration: 24, delay: 6, opacity: 0.1, color: 'text-accent-blue' },
]

/**
 * Fundo ambiente do hero: pequenos símbolos de código subindo devagar,
 * bem sutis. Reforça o tema "editor de código" sem competir com o
 * conteúdo principal. Respeita prefers-reduced-motion.
 */
export default function FloatingGlyphs() {
  const shouldReduceMotion = useReducedMotion()
  if (shouldReduceMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {GLYPHS.map((g, i) => (
        <motion.span
          key={i}
          className={`absolute bottom-[-40px] font-mono font-bold select-none ${g.color}`}
          style={{ left: g.left, fontSize: g.size }}
          animate={{ y: ['0vh', '-120vh'], opacity: [0, g.opacity, g.opacity, 0] }}
          transition={{
            duration: g.duration,
            delay: g.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.08, 0.85, 1],
          }}
        >
          {g.symbol}
        </motion.span>
      ))}
    </div>
  )
}
