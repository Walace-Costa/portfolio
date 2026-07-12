import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import SocialIcons from './SocialIcons'
import { site } from '@/config/site'

export default function StatusBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-30 h-8 bg-panel2 border-t border-line transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="h-full max-w-6xl mx-auto container-px flex items-center justify-between font-mono text-[11px] text-muted">
        <div className="flex items-center gap-4">
          {site.availableForWork && (
            <span className="flex items-center gap-1.5 text-accent-mint">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
              disponível
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <SocialIcons size={13} className="gap-3" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            className="flex items-center gap-1 pl-3 border-l border-line hover:text-accent-blue transition-colors"
          >
            <HiArrowUp size={12} />
            <span className="hidden sm:inline">topo</span>
          </button>
        </div>
      </div>
    </div>
  )
}
