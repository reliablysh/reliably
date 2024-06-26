export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
  },
})