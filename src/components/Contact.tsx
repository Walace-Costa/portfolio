import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import SocialIcons from './SocialIcons'
import { site } from '@/config/site'

interface FormState {
  name: string
  email: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'sent'

const initialState: FormState = { name: '', email: '', message: '' }
const MESSAGE_LIMIT = 500

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {}
    if (!form.name.trim()) nextErrors.name = 'conte seu nome'
    if (!form.message.trim()) nextErrors.message = 'escreva sua mensagem'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      nextErrors.email = 'e-mail inválido'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate() || status !== 'idle') return

    setStatus('sending')

    const lines = [
      `Olá! Me chamo ${form.name}.`,
      form.email ? `Meu e-mail: ${form.email}` : null,
      '',
      form.message,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${site.whatsappNumber}?text=${text}`

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setStatus('sent')
      setForm(initialState)
      setTimeout(() => setStatus('idle'), 3200)
    }, 550)
  }

  const inputClasses = (hasError: boolean) =>
    `w-full bg-panel2 border rounded-md pl-11 pr-4 py-3 font-mono text-sm text-ink placeholder:text-faint outline-none transition-all focus:ring-2 ${
      hasError
        ? 'border-accent-rose/60 focus:ring-accent-rose/15'
        : 'border-line focus:border-accent-blue/60 focus:ring-accent-blue/15'
    }`

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <SectionHeading comment="// contact.ts" title="Vamos conversar?" />
          <p className="mt-6 text-muted leading-relaxed max-w-md">
            Preencha o formulário ao lado, sua mensagem é enviada direto para
            o meu WhatsApp, sem intermediários. Ou, se preferir, use um dos
            canais abaixo.
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs text-faint uppercase tracking-widest mb-3">
              // canais diretos
            </p>
            <SocialIcons size={22} className="gap-5" />
          </div>

          <div className="mt-8 font-mono text-xs text-faint">
            <p>{site.location}</p>
            <p className="mt-1">{site.email}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="rounded-xl border border-line bg-panel/80 backdrop-blur-sm p-5 sm:p-6 shadow-2xl shadow-black/40">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-muted block mb-1.5">
                  <span className="text-accent-blue">›</span> nome
                </label>
                <div className="relative">
                  <HiOutlineUser
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint"
                  />
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Digite seu nome"
                    className={inputClasses(!!errors.name)}
                  />
                </div>
                {errors.name && (
                  <p className="text-accent-rose text-xs font-mono mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-muted block mb-1.5">
                  <span className="text-accent-blue">›</span> e-mail{' '}
                  <span className="text-faint">(opcional)</span>
                </label>
                <div className="relative">
                  <HiOutlineMail
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint"
                  />
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="voce@email.com"
                    className={inputClasses(!!errors.email)}
                  />
                </div>
                {errors.email && (
                  <p className="text-accent-rose text-xs font-mono mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-1.5">
                  <label htmlFor="message" className="font-mono text-xs text-muted">
                    <span className="text-accent-blue">›</span> mensagem
                  </label>
                  <span className="font-mono text-[11px] text-faint">
                    {form.message.length}/{MESSAGE_LIMIT}
                  </span>
                </div>
                <div className="relative">
                  <HiOutlineChatAlt2
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-4 text-faint"
                  />
                  <textarea
                    id="message"
                    rows={4}
                    maxLength={MESSAGE_LIMIT}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Me conta um pouco sobre o projeto..."
                    className={`${inputClasses(!!errors.message)} resize-none`}
                  />
                </div>
                {errors.message && (
                  <p className="text-accent-rose text-xs font-mono mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full inline-flex items-center justify-center gap-2 font-mono text-sm px-5 py-3.5 rounded-md font-semibold transition ${
                  status === 'sent'
                    ? 'bg-accent-mint text-canvas'
                    : 'bg-accent-mint text-canvas hover:brightness-110 disabled:opacity-80'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-2"
                    >
                      <FaWhatsapp size={17} />
                      enviar_via_whatsapp()
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="h-3.5 w-3.5 rounded-full border-2 border-canvas/40 border-t-canvas animate-spin" />
                      conectando()
                    </motion.span>
                  )}
                  {status === 'sent' && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-2"
                    >
                      <HiOutlineCheckCircle size={16} />
                      conectado()
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-mono text-xs text-accent-mint"
                >
                  ✓ abrindo o WhatsApp em outra aba...
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
