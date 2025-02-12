// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'vue-toast-notification/dist/theme-sugar.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '~/plugins/toast.js'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE_URL || 'http://localhost:8080/api/', // Fallback to localhost
    },
  },

  modules: ["@nuxt/image"]
})