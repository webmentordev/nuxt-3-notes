// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  runtimeConfig: {
    public: {
      'api': 'http://127.0.0.1:8090'
    }
  },
})