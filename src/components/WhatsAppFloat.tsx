import { FaWhatsapp } from 'react-icons/fa'
import { site } from '@/config/site'

/**
 * Botão flutuante de WhatsApp, visível só em telas mobile — no desktop
 * já existem os ícones no menu e na status bar, então este ficaria
 * redundante lá.
 */
export default function WhatsAppFloat() {
  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappDefaultMessage
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="md:hidden animate-float fixed bottom-20 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] pl-3.5 pr-4 py-3 font-mono text-sm font-semibold text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5)] active:scale-95 transition-transform"
    >
      <FaWhatsapp size={20} />
      fale comigo
    </a>
  )
}
