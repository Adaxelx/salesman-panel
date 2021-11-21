const colorWithOpacity = ({ opacityVariable, opacityValue }, colorName) => {
  if (opacityValue !== undefined) {
    return `rgba(var(--colors-${colorName}), ${opacityValue})`;
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(--colors-${colorName}), var(${opacityVariable}, 1))`;
  }
  return `rgb(var(--colors-${colorName}))`;
};

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
      success: colorInfo => colorWithOpacity(colorInfo, 'success'),
      error: colorInfo => colorWithOpacity(colorInfo, 'error'),
      warning: colorInfo => colorWithOpacity(colorInfo, 'warning'),
      info: colorInfo => colorWithOpacity(colorInfo, 'info'),
      base: {
        white: 'var(--colors-white)',
      },
    },
    minWidth: {
      uiElement: '180px;',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
