import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2c5282',
          dark: '#0f2644',
        },
        secondary: {
          DEFAULT: '#e53e3e',
          light: '#fc8181',
          dark: '#c53030',
        },
      },
    },
  },
  plugins: [],
}
export default config
