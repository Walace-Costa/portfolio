import { site } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 pb-14">
      <div className="container-px max-w-6xl mx-auto flex items-center justify-center font-mono text-xs text-faint">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
