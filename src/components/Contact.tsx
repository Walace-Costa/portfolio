import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import CodeWindow from './CodeWindow'
import SectionHeading from './SectionHeading'
import SocialIcons from './SocialIcons'
import { site } from '@/config/site'

interface FormState {
  name: string
  email: string
  message: string
}

const initialState: FormState = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

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
    if (!validate()) return

    const lines = [
      `Olá! Me chamo ${form.name}.`,
      form.email ? `Meu e-mail: ${form.email}` : null,
      '',
      form.message,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${site.whatsappNumber}?text=${text}`

    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setForm(initialState)
    setTimeout(() => setSent(false), 4000)
  }

  const inputClasses = (hasError: boolean) =>
    `w-full bg-panel2 border rounded-md px-4 py-3 font-mono text-sm text-ink placeholder:text-faint outline-none transition-colors ${
      hasError ? 'border-accent-rose/60' : 'border-line focus:border-accent-blue/60'
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
          <CodeWindow filename="mensagem.tsx" language="form">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-muted block mb-1.5">
                  nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Digite seu nome"
                  className={inputClasses(!!errors.name)}
                />
                {errors.name && (
                  <p className="text-accent-rose text-xs font-mono mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-muted block mb-1.5">
                  e-mail <span className="text-faint">(opcional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                  className={inputClasses(!!errors.email)}
                />
                {errors.email && (
                  <p className="text-accent-rose text-xs font-mono mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-muted block mb-1.5">
                  mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Me conta um pouco sobre o projeto..."
                  className={`${inputClasses(!!errors.message)} resize-none`}
                />
                {errors.message && (
                  <p className="text-accent-rose text-xs font-mono mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-sm px-5 py-3.5 rounded-md bg-accent-mint text-canvas font-semibold hover:brightness-110 transition"
              >
                <HiOutlinePaperAirplane size={16} />
                enviar_via_whatsapp()
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-mono text-xs text-accent-mint"
                >
                  ✓ abrindo o WhatsApp em outra aba...
                </motion.p>
              )}
            </form>
          </CodeWindow>
        </motion.div>
      </div>
    </section>
  )
}
