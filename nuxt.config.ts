// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Plat Besi Murah',
      meta: [
        { name: 'Plat Besi Murah', content: 'Besi murah dari Cilegon untuk Indonesia' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

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
    // Private (server-only)
    

    // Public (client + server)
    public: {
      openrouterKey: process.env.OPENROUTER_API,
      baseApiRoute: process.env.NUXT_PUBLIC_API_BASE,
    },
  },

  modules: ["@nuxt/image","@pinia/nuxt"],
})
