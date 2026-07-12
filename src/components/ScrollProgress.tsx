import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 inset-x-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-accent-blue to-accent-mint transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
