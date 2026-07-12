import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { site } from '@/config/site'

interface SocialIconsProps {
  size?: number
  className?: string
}

export default function SocialIcons({ size = 18, className = '' }: SocialIconsProps) {
  const links = [
    {
      key: 'whatsapp',
      href: `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        site.whatsappDefaultMessage
      )}`,
      icon: FaWhatsapp,
      label: 'WhatsApp',
      hoverColor: 'hover:text-accent-mint',
    },
    {
      key: 'email',
      href: `mailto:${site.email}`,
      icon: HiOutlineMail,
      label: 'E-mail',
      hoverColor: 'hover:text-accent-blue',
    },
    {
      key: 'instagram',
      href: `https://instagram.com/${site.instagram}`,
      icon: FaInstagram,
      label: 'Instagram',
      hoverColor: 'hover:text-accent-rose',
    },
    {
      key: 'github',
      href: `https://github.com/${site.githubUsername}`,
      icon: FaGithub,
      label: 'GitHub',
      hoverColor: 'hover:text-ink',
    },
    ...(site.linkedin
      ? [
          {
            key: 'linkedin',
            href: site.linkedin,
            icon: FaLinkedin,
            label: 'LinkedIn',
            hoverColor: 'hover:text-accent-blue',
          },
        ]
      : []),
  ]

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map(({ key, href, icon: Icon, label, hoverColor }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`text-muted transition-colors ${hoverColor}`}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}
