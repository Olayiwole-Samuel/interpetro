import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        // Brand — royal blue dominates the interface
        brand: {
          blue: '#0057B8',
          'blue-dark': '#00458F',
          'blue-deep': '#003C7A',
          green: '#9BD600',
          'green-deep': '#7EAE00',
          navy: '#0F2747',
          'navy-deep': '#0A1B33',
        },
        surface: {
          light: '#F5F7FA',
          white: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#5F6B7A',
        },
        border: '#E4E9F0',
        ring: '#0057B8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['7rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '18px',
        md: '14px',
        sm: '10px',
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgba(15, 39, 71, 0.06), 0 1px 2px 0 rgba(15, 39, 71, 0.04)',
        card: '0 8px 24px -4px rgba(15, 39, 71, 0.10), 0 2px 6px -2px rgba(15, 39, 71, 0.06)',
        elevated: '0 24px 48px -12px rgba(15, 39, 71, 0.18), 0 8px 16px -8px rgba(15, 39, 71, 0.10)',
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionTimingFunction: {
        power3: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
