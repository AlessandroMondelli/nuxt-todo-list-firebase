<template>
    <div class="add-todo-form-wrap centered-form">
        <form @submit.prevent="submitForm">
            <CommonFormField label="Cosa devi fare?" name="todo-el" type="text" @return-value="getValue" />
            <CommonFormField label="Seleziona priorità" name="priority" type="color" @return-value="getValue" />
            <button class="todo-btn" type="submit" @click="saveEl">Aggiungi elemento</button>
        </form>
    </div>
</template>

<script>
import { getDatabase, ref, update } from "firebase/database";

export default {
    data() {
        return {
            todoEl: '',
            priority: ''
        }
    },
    methods: {
        getValue(...e) {
            const value = e[1];

            if( e[0] == 'todo-el' ) {
                this.todoEl = value;
            } else if( e[0] == 'priority' ){
                this.priority = value;
            }
        },
        saveEl() {
            const user = $fetch('/api/me', {
                method: 'GET'
            })
            .then((response) => { 
                const uid = response.uid;
                // const { realtimeDatabase } = useNuxtApp();
                const realtimeDatabase = getDatabase();

                const timestamp = new Date();
                const randomId = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;

                if( uid && this.todoEl != '' ) { //Se l'user id è definito e il campo todo non è vuoto
                    //Carico dati nel database
                    update(ref(realtimeDatabase, 'todo/' + uid + '/' + randomId), {
                        id: randomId,
                        userId: uid,
                        todo: this.todoEl,
                        priority : this.priority,
                        timestamp: timestamp,
                    });
                } else {
                    prompt("Si è verificato un errore");
                }
             })
            .catch("Errore");
        }
    }
}
</script>

<style>
</style>