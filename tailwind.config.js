/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-sora)'],
        heading: ['var(--font-inter)'],
      },
      colors: {
        primary: 'var(--color-primary)',
  'primary-light': 'var(--color-primary-light)',
        cta: 'var(--color-cta)',

        secondary: 'var(--color-secondary)',
        highlight: 'var(--color-highlight)',

        category: {
          green: 'var(--color-category-green)',
          yellow: 'var(--color-category-yellow)',
          purple: 'var(--color-category-purple)',
        },

        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      backgroundImage: {
      'gradient-dark': 'var(--gradient-dark)',
    'gradient-grayscale': 'var(--gradient-grayscale)',
    'gradient-purple': 'var(--gradient-purple)',
    'gradient-light-yellow': 'var(--gradient-light-yellow)',
    'gradient-light-green': 'var(--gradient-light-green)',
    'gradient-light-purple': 'var(--gradient-light-purple)',
      },
    },
  },
  plugins: [],
};
