import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Design 1 - Minimalist Cinematic
        'cinematic': {
          dark: '#0a0a0a',
          accent: '#f97316',
          muted: '#6b7280',
        },
        // Design 2 - Bold Studio
        'studio': {
          red: '#dc2626',
          black: '#0f0f0f',
          cream: '#fef2f2',
        },
        // Design 3 - Experimental Artistic
        'artistic': {
          pink: '#ec4899',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          dark: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
