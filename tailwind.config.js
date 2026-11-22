/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#070b1a', 900: '#0b1024', 800: '#121a3a' },
        brand: { purple: '#8b5cf6', blue: '#3b82f6', cyan: '#22d3ee' },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
      },
      animation: { float: 'float 6s ease-in-out infinite', pulseDot: 'pulseDot 1.8s ease-in-out infinite' },
    },
  },
  plugins: [],
}
