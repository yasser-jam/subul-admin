// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/styles',
    'assets/styles/main.scss',
  ],

  app: {
    head: {
      title: 'سبل - البحث عن عمل',

      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;500;700;800&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: 'halakat-backend.vercel.app',
    },
  },

  modules: ['@unocss/nuxt', 'vuetify-nuxt-module', '@pinia/nuxt',  '@vee-validate/nuxt'],

  imports: {
    dirs: ['types/*.ts'],
  },

  vuetify: {
    moduleOptions: {
      styles: { configFile: '/assets/vuetify/settings.scss' },
    },

    vuetifyOptions: './vuetify.config.ts',
  },
});
