/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050508",
        surface: "#0A0B10",
        surface2: "#0F1220",
        border: "rgba(255,255,255,0.12)",
        muted: "rgba(255,255,255,0.72)",
        muted2: "rgba(255,255,255,0.55)",
        neonBlue: "#00F0FF",
        neonPurple: "#BD00FF",
        highlight: "#D8FF57",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem',
      },
      borderRadius: {
        'signature': '28px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #00F0FF 0%, #BD00FF 100%)',
      }
    },
  },
  plugins: [],
}
