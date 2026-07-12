import type { ReactNode } from 'react'

interface CodeWindowProps {
  filename: string
  language?: string
  avatarSrc?: string
  children: ReactNode
  className?: string
}

/**
 * Emula uma aba de editor de código (tipo VS Code), usada como
 * elemento visual recorrente: hero, cards de projeto e modal.
 */
export default function CodeWindow({
  filename,
  language,
  avatarSrc,
  children,
  className = '',
}: CodeWindowProps) {
  return (
    <div
      className={`rounded-xl border border-line bg-panel/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center justify-between px-2 border-b border-line bg-panel2">
        <div className="flex items-center gap-3 px-4 py-4 border-r border-line bg-panel">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt=""
              className="w-16 h-16 rounded-full object-cover ring-2 ring-accent-blue/70"
            />
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          )}
          <span className="font-mono text-xs text-ink/80 truncate">
            {filename}
          </span>
        </div>
        {language && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-faint pr-3">
            {language}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}
