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
      apiBase: process.env.NUXT_API_BASE_URL || 'http://plat-besi-murah-backend-env-1.eba-r2ntmjag.us-east-2.elasticbeanstalk.com/api/', // Fallback to localhost
    },
  },

  modules: ["@nuxt/image"]
})