import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/css/common.css'
    ],

    publicRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
    }
})
