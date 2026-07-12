/**
 * Gera uma imagem placeholder em SVG (data URI) para os projetos de demonstração.
 * Assim que você tiver screenshots reais, troque o array `images` de cada
 * projeto em `projects.ts` pelo caminho dos seus arquivos, ex: '/projects/meu-projeto-1.png'
 */
export function placeholder(label: string, seed: number): string {
  const palettes = [
    ['#0b0e14', '#6e9bff'],
    ['#0b0e14', '#6ee7b7'],
    ['#0b0e14', '#f5b85c'],
    ['#0b0e14', '#f28fad'],
  ]
  const [bg, fg] = palettes[seed % palettes.length]
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="${fg}" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="800" height="500" fill="${bg}" />
      <rect width="800" height="500" fill="url(#grid)" />
      <line x1="0" y1="0" x2="800" y2="500" stroke="${fg}" stroke-opacity="0.08" stroke-width="2" />
      <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle"
        font-family="monospace" font-size="28" fill="${fg}" opacity="0.9">${label}</text>
      <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle"
        font-family="monospace" font-size="14" fill="${fg}" opacity="0.5">preview.png</text>
    </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
