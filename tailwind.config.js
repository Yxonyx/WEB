/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#030407",
        bgDeep: "#000000",
        surface: "#0A0E17",
        surface2: "#111625",
        surface3: "#1C2438",
        border: "rgba(77, 148, 255, 0.15)",
        borderLight: "rgba(77, 148, 255, 0.05)",
        muted: "#9CA3AF",
        muted2: "rgba(156, 163, 175, 0.6)",
        neonBlue: "#4D94FF",
        neonBlueDark: "#2E86FF",
        neonPurple: "#CC00FF",
        neonPurpleDark: "#8800AA",
        neonHarvest: "#CC00FF",
        neonSlate: "#1F2937",
        highlight: "#FFFFFF",
        accent1: "#4D94FF",
        accent2: "#CC00FF",
        overlay: "#000000",
      },
      fontFamily: {
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Work Sans', 'system-ui', 'sans-serif'],
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
        'accent-gradient': 'linear-gradient(90deg, #4D94FF 0%, #CC00FF 100%)',
        'accent-gradient-reverse': 'linear-gradient(90deg, #CC00FF 0%, #4D94FF 100%)',
        'radial-blue': 'radial-gradient(circle at center, rgba(77, 148, 255, 0.35) 0%, transparent 70%)',
        'radial-purple': 'radial-gradient(circle at center, rgba(204, 0, 255, 0.35) 0%, transparent 70%)',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgba(77, 148, 255, 0.30) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(204, 0, 255, 0.25) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(77, 148, 255, 0.20) 0px, transparent 50%),
          radial-gradient(at 100% 50%, rgba(204, 0, 255, 0.20) 0px, transparent 50%)
        `,
        'hero-gradient': `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(77, 148, 255, 0.20) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 100% 50%, rgba(204, 0, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 50% 30% at 0% 80%, rgba(77, 148, 255, 0.10) 0%, transparent 50%)
        `,
      },
      boxShadow: {
        'glow-blue': '0 0 60px rgba(77, 148, 255, 0.50), 0 0 120px rgba(77, 148, 255, 0.25)',
        'glow-purple': '0 0 60px rgba(204, 0, 255, 0.45), 0 0 120px rgba(204, 0, 255, 0.22)',
        'glow-mixed': '0 0 80px rgba(77, 148, 255, 0.35), 0 0 140px rgba(204, 0, 255, 0.28)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.10)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 15s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'marquee': 'marquee 35s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin-reverse 10s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(150%)' },
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
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
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
