import { readFileSync, writeFileSync } from 'node:fs'
import sharp from 'sharp'
import { site } from '../src/config/site.ts'

const WIDTH = 1200
const HEIGHT = 630

const avatarBuffer = readFileSync(new URL('../public/avatar.jpg', import.meta.url))
const avatarBase64 = avatarBuffer.toString('base64')

const stackPills = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS']

const pillsSvg = stackPills
  .map((tech, i) => {
    const x = 80 + i * 175
    return `
      <rect x="${x}" y="472" width="160" height="40" rx="8" fill="#161a24" stroke="#232838" stroke-width="1.5" />
      <text x="${x + 80}" y="497" font-family="JetBrains Mono, monospace" font-size="16" fill="#6ee7b7" text-anchor="middle">${tech}</text>
    `
  })
  .join('')

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#6e9bff" opacity="0.14" />
    </pattern>
    <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6e9bff" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#6e9bff" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glowMint" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#6ee7b7" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="roleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e9bff" />
      <stop offset="100%" stop-color="#6ee7b7" />
    </linearGradient>
    <clipPath id="avatarClip">
      <circle cx="150" cy="150" r="64" />
    </clipPath>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0b0e14" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)" />
  <circle cx="1000" cy="80" r="320" fill="url(#glowBlue)" />
  <circle cx="120" cy="600" r="280" fill="url(#glowMint)" />

  <circle cx="150" cy="150" r="68" fill="none" stroke="#6e9bff" stroke-width="3" opacity="0.7" />
  <image
    href="data:image/jpeg;base64,${avatarBase64}"
    x="86" y="86" width="128" height="128"
    clip-path="url(#avatarClip)"
    preserveAspectRatio="xMidYMid slice"
  />

  <rect x="80" y="240" width="400" height="42" rx="21" fill="#0d2b22" stroke="#6ee7b7" stroke-opacity="0.4" stroke-width="1.5" />
  <circle cx="106" cy="261" r="5" fill="#6ee7b7" />
  <text x="122" y="267" font-family="JetBrains Mono, monospace" font-size="16" fill="#6ee7b7">disponível para novos projetos</text>

  <text x="78" y="360" font-family="JetBrains Mono, monospace" font-weight="800" font-size="72" fill="#e6e8ee">${site.name}</text>

  <text x="80" y="412" font-family="JetBrains Mono, monospace" font-weight="700" font-size="30" fill="url(#roleGradient)">${site.role}</text>

  <text x="80" y="448" font-family="JetBrains Mono, monospace" font-size="18" fill="#838ca0">${site.location}</text>

  ${pillsSvg}

  <text x="80" y="580" font-family="JetBrains Mono, monospace" font-size="16" fill="#4c5468">devwalace.com.br</text>
</svg>
`

const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer()
writeFileSync(new URL('../public/og-cover.png', import.meta.url), pngBuffer)

console.log('✓ public/og-cover.png gerado com sucesso (1200x630)')
