/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#000000',
        surface: {
          50: '#1a1a1a',
          100: '#141414',
          200: '#111111',
          300: '#0c0c0c',
          400: '#080808',
          base: '#050505',
        },
        border: {
          subtle: '#181818',
          line: '#222222',
          prominent: '#333333',
          light: 'rgba(255, 255, 255, 0.1)',
        },
        meta: {
          primary: '#F0F0F0',
          secondary: '#888888',
          muted: '#555555',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        brand: ['Chivo', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.03em',
        'widest-tech': '0.12em',
        'widest-spec': '0.18em',
      },
      borderWidth: {
        '0.5': '0.5px',
      }
    },
  },
  plugins: [],
}
