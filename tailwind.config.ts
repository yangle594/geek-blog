import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
    './content/**/*.{md,yml,json}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#e5e7eb',
        accent: '#00e5a8'
      },
      fontFamily: {
        mono: [ 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace' ]
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 229, 168, 0.35)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config

