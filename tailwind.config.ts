import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Copper-inspired palette
        copper: {
          50: '#FDF7F0',
          100: '#FAEBD7',
          200: '#F4D5AE',
          300: '#E8B885',
          400: '#D2691E', // Primary copper
          500: '#CD7F32',
          600: '#B87333',
          700: '#A0522D',
          800: '#8B4513',
          900: '#654321',
        },
        // Earth tones
        sage: {
          50: '#F7F8F7',
          100: '#E8EBE8',
          200: '#D1D7D1',
          300: '#A8B5A8',
          400: '#87A287',
          500: '#6B8E6B',
          600: '#5A7A5A',
          700: '#4A654A',
          800: '#3D533D',
          900: '#334433',
        },
        // Neutral palette
        stone: {
          50: '#FAFAFA',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#2F2F2F', // Deep charcoal
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'Courier New', 'monospace'],

        // Google Fonts (real names)
        lora: ['Lora', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        instrument: ['Instrument Sans', 'sans-serif'],

        // Local font if you keep it
        geist: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '40': '10rem',
        '56': '14rem',
        '72': '18rem',
        '88': '22rem',
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-in',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(184, 115, 51, 0.15)',
        'copper': '0 8px 32px rgba(184, 115, 51, 0.2)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-copper': 'linear-gradient(135deg, #B87333 0%, #CD7F32 50%, #D2691E 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FAFAFA 0%, #F4D5AE 100%)',
        'texture-wood': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23B87333\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}

export default config
