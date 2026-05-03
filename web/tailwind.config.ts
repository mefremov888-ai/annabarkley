import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F5F2',
        'bg-deep': '#EFECE7',
        sage: {
          DEFAULT: '#7C9A7C',
          deep: '#5B7A5B',
          muted: '#A8BFA8',
          pale: '#E8EFE8',
        },
        rose: {
          DEFAULT: '#EAC7C7',
          deep: '#D4A9A9',
          pale: '#F5E6E6',
        },
        gold: {
          DEFAULT: '#C4A265',
          pale: '#F5EDE0',
        },
        charcoal: '#1A1A1A',
        text: {
          DEFAULT: '#3B3B3B',
          muted: '#6E6E66', // C8: WCAG AA contrast (was #8A8A80)
        },
        border: '#E8E4DC',
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        body: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        'card': '24px',
        'pill': '60px',
      },
      transitionTimingFunction: {
        'curve': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        morph: 'morph 25s ease-in-out infinite alternate',
        breathe: 'breathe 4s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
