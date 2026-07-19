import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { site } from '@/config/site'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { id: 'home', label: 'home' },
  { id: 'stack', label: 'stack' },
  { id: 'projects', label: 'projetos' },
  { id: 'contact', label: 'contato' },
]

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappDefaultMessage
  )}`
  const instagramHref = `https://instagram.com/${site.instagram}`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="font-mono font-bold text-ink text-sm sm:text-base"
          >
            <span className="text-accent-blue">&lt;</span>
            DevWalace
            <span className="text-accent-mint">/&gt;</span>
          </button>
          <ThemeToggle className="md:hidden" />
        </div>

        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'text-accent-blue bg-panel'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="text-muted hover:text-accent-mint transition-colors"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="text-muted hover:text-accent-rose transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-md border border-accent-mint/40 text-accent-mint hover:bg-accent-mint/10 transition-colors"
          >
            disponível.chat()
          </button>
          <ThemeToggle className="ml-1 pl-3 border-l border-line" />
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-ink p-2"
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-canvas/95 backdrop-blur-md border-b border-line"
          >
            <ul className="flex flex-col font-mono text-sm px-6 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-3 rounded-md ${
                      activeSection === item.id
                        ? 'text-accent-blue bg-panel'
                        : 'text-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5 px-6 pb-5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-muted hover:text-accent-mint transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted hover:text-accent-rose transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
