/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0b0e14',
        panel: '#12151d',
        panel2: '#161a24',
        line: '#232838',
        ink: '#e6e8ee',
        muted: '#838ca0',
        faint: '#4c5468',
        accent: {
          blue: '#6e9bff',
          mint: '#6ee7b7',
          amber: '#f5b85c',
          rose: '#f28fad',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, rgba(110,155,255,0.14) 1px, transparent 1px)',
        'glow-blue':
          'radial-gradient(600px circle at var(--x) var(--y), rgba(110,155,255,0.10), transparent 40%)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
