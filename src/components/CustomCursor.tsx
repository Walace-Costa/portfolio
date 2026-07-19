import { useEffect, useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface TrailPoint {
  x: number
  y: number
  age: number
}

const MAX_AGE = 16
const MAX_POINTS = 20

/**
 * Cursor customizado: núcleo brilhante + rastro em degradê azul→mint
 * mostrando a trajetória recente do mouse. Só ativa em dispositivos
 * com ponteiro fino (desktop) e respeita prefers-reduced-motion.
 * As cores são lidas das CSS variables do tema atual (dark/light).
 */
export default function CustomCursor() {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointsRef = useRef<TrailPoint[]>([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const hoverRef = useRef(false)
  const rafRef = useRef(0)
  const colorsRef = useRef({ blue: '110 155 255', mint: '110 231 183', core: '230 232 238' })

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement)
    colorsRef.current = {
      blue: styles.getPropertyValue('--color-accent-blue').trim(),
      mint: styles.getPropertyValue('--color-accent-mint').trim(),
      core: styles.getPropertyValue('--color-ink').trim(),
    }
  }, [theme])

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!isFinePointer || prefersReducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      hoverRef.current = !!target.closest(
        'a, button, [role="button"], input, textarea'
      )
    }
    window.addEventListener('mouseover', onOver)

    document.documentElement.classList.add('custom-cursor-active')

    const draw = () => {
      const { x, y } = mouseRef.current
      const points = pointsRef.current
      const { blue, mint, core } = colorsRef.current

      points.push({ x, y, age: 0 })
      for (const p of points) p.age++
      pointsRef.current = points
        .filter((p) => p.age < MAX_AGE)
        .slice(-MAX_POINTS)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const pts = pointsRef.current
      pts.forEach((p, i) => {
        const t = i / pts.length
        const radius = (hoverRef.current ? 2 : 1.4) + t * (hoverRef.current ? 6 : 4)
        const alpha = t * 0.45

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4)
        gradient.addColorStop(0, `rgb(${blue} / ${alpha})`)
        gradient.addColorStop(0.55, `rgb(${mint} / ${alpha * 0.35})`)
        gradient.addColorStop(1, `rgb(${blue} / 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2)
        ctx.fill()
      })

      if (pts.length > 0) {
        const last = pts[pts.length - 1]
        const coreRadius = hoverRef.current ? 6 : 3
        ctx.beginPath()
        ctx.arc(last.x, last.y, coreRadius, 0, Math.PI * 2)
        ctx.fillStyle = hoverRef.current ? `rgb(${mint})` : `rgb(${core})`
        ctx.shadowColor = `rgb(${blue})`
        ctx.shadowBlur = hoverRef.current ? 22 : 12
        ctx.fill()
        ctx.shadowBlur = 0
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      aria-hidden="true"
    />
  )
}
