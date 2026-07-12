import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown } from 'react-icons/hi'
import CodeWindow from './CodeWindow'
import FloatingGlyphs from './FloatingGlyphs'
import { site } from '@/config/site'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* glow ambiente sutil, único momento "grande" da página */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-blue/10 blur-[120px]"
        animate={{ x: [0, 45, -30, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-mint/5 blur-[120px]"
        animate={{ x: [0, -40, 25, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <FloatingGlyphs />

      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {site.availableForWork && (
            <span className="inline-flex items-center gap-2 font-mono text-xs text-accent-mint border border-accent-mint/30 bg-accent-mint/5 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
              disponível para novos projetos
            </span>
          )}

          <h1 className="font-mono font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink tracking-tight">
            {site.name}
          </h1>

          <div className="mt-4 font-mono text-lg sm:text-xl text-gradient font-semibold h-8">
            <TypeAnimation
              sequence={[
                site.role,
                2200,
                'Criação de landing pages',
                2200,
                'Lojas virtuais (e-commerce)',
                2200,
                'Sistemas web sob medida',
                2200,
                'React • TypeScript • Node.js',
                2200,
              ]}
              wrapper="span"
              speed={45}
              deletionSpeed={65}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-6 text-muted max-w-md leading-relaxed">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-sm px-5 py-3 rounded-md bg-accent-blue text-canvas font-semibold hover:brightness-110 transition"
            >
              ver_projetos()
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-sm px-5 py-3 rounded-md border border-line text-ink hover:border-accent-mint/50 hover:text-accent-mint transition"
            >
              falar_comigo()
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="animate-float"
        >
          <CodeWindow filename="sobre-mim.ts" avatarSrc="/avatar.jpg">
            <pre className="font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto">
              <code>
                <span className="text-accent-rose">const</span>{' '}
                <span className="text-ink">desenvolvedor</span>{' '}
                <span className="text-muted">=</span> {'{'}
                {'\n'}  <span className="text-accent-blue">nome</span>:{' '}
                <span className="text-accent-mint">'{site.name}'</span>,
                {'\n'}  <span className="text-accent-blue">stack</span>:{' '}
                <span className="text-muted">[</span>
                <span className="text-accent-mint">'React'</span>,{' '}
                <span className="text-accent-mint">'TypeScript'</span>,{' '}
                <span className="text-accent-mint">'Node.js'</span>
                <span className="text-muted">]</span>,
                {'\n'}  <span className="text-accent-blue">foco</span>:{' '}
                <span className="text-accent-mint">'produto & performance'</span>,
                {'\n'}  <span className="text-accent-blue">local</span>:{' '}
                <span className="text-accent-mint">'{site.location}'</span>,
                {'\n'}  <span className="text-accent-blue">disponivel</span>:{' '}
                <span className="text-accent-amber">
                  {String(site.availableForWork)}
                </span>
                ,{'\n'}
                {'}'}
                <span className="animate-blink text-ink">|</span>
              </code>
            </pre>
          </CodeWindow>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Rolar para a próxima seção"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-faint hover:text-accent-blue transition-colors"
      >
        <HiArrowDown size={22} />
      </motion.button>
    </section>
  )
}
