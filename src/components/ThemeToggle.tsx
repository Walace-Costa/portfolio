import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from '@/context/ThemeContext'

interface ThemeToggleProps {
  className?: string
  size?: number
}

export default function ThemeToggle({ className = '', size = 18 }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
      className={`text-muted hover:text-accent-blue transition-colors ${className}`}
    >
      {theme === 'dark' ? <HiOutlineSun size={size} /> : <HiOutlineMoon size={size} />}
    </button>
  )
}
