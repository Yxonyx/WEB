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
        bgDeep: "#020204",
        surface: "#0A0B10",
        surface2: "#0F1220",
        surface3: "#141825",
        border: "rgba(255,255,255,0.12)",
        borderLight: "rgba(255,255,255,0.08)",
        muted: "rgba(255,255,255,0.85)",
        muted2: "rgba(255,255,255,0.65)",
        neonBlue: "#00F0FF",
        neonBlueDark: "#00B8C4",
        neonPurple: "#BD00FF",
        neonPurpleDark: "#9400C8",
        highlight: "#D8FF57",
        accent1: "#6366F1",
        accent2: "#8B5CF6",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem',
        '9xl': '9rem',
      },
      borderRadius: {
        'signature': '28px',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #00F0FF 0%, #BD00FF 100%)',
        'accent-gradient-reverse': 'linear-gradient(90deg, #BD00FF 0%, #00F0FF 100%)',
        'radial-blue': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
        'radial-purple': 'radial-gradient(circle at center, rgba(189, 0, 255, 0.15) 0%, transparent 70%)',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgba(0, 240, 255, 0.12) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(189, 0, 255, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(0, 240, 255, 0.08) 0px, transparent 50%),
          radial-gradient(at 100% 50%, rgba(189, 0, 255, 0.08) 0px, transparent 50%)
        `,
        'hero-gradient': `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 240, 255, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 100% 50%, rgba(189, 0, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 50% 30% at 0% 80%, rgba(0, 240, 255, 0.1) 0%, transparent 50%)
        `,
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(0, 240, 255, 0.25), 0 0 80px rgba(0, 240, 255, 0.1)',
        'glow-purple': '0 0 40px rgba(189, 0, 255, 0.2), 0 0 80px rgba(189, 0, 255, 0.1)',
        'glow-mixed': '0 0 60px rgba(0, 240, 255, 0.15), 0 0 100px rgba(189, 0, 255, 0.1)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 15s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-30px) translateX(20px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-40px) translateX(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
