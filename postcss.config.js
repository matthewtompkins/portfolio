module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV !== 'development' ? { cssnano: {} } : {}),
  },
};
