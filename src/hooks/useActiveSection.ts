import { useEffect, useState } from 'react'

/**
 * Observa quais seções estão visíveis na tela e retorna o id da
 * seção ativa no momento — usado para destacar o item no menu
 * e na status bar (como o arquivo aberto em um editor de código).
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
