/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#05050A',
        surface: '#0A0A14',
        elevated: '#10101E',
        cream: '#E2ECFF',
        muted: '#7B9AB8',
        dim: '#151525',
        yellow: '#FFE566',
        border: '#151525',
        cosmic: '#60AFFF',
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
