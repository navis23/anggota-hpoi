// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Anggota HPOI',
            meta: [
            // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Explore seluruh anggota HPOI se-Indonesia' }
            ],
        },
        pageTransition: { name: 'slide-fade', mode: 'out-in' }
    },
    modules: [
        'nuxt-icon',
        '@nuxt/image-edge',
        '@formkit/nuxt',
        'nuxt-headlessui',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',

    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            'storeToRefs',
        ],
    },
    headlessui: {
        prefix: 'Headless'
    }
})
