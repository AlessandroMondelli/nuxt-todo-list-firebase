import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        databaseURL: 'https://nuxt-todo-list-80253-default-rtdb.europe-west1.firebasedatabase.app/'
    };

    const app = initializeApp(firebaseConfig);

    initUser();
    const database = getDatabase(app);
});