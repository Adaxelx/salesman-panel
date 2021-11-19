module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
      tertiary: 'var(--colors-tertiary)',
      text: { base: 'var(--colors-text-base)', reverse: 'var(--colors-text-reverse)' },
      background: 'var(--colors-background)',
      success: 'var(--colors-success)',
      error: 'var(--colors-error)',
      warning: 'var(--colors-warning)',
      info: 'var(--colors-info)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
