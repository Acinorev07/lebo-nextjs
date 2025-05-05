/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.mjs' // Ruta explícita al config
    },
    autoprefixer: {},
  }
}

export default config
