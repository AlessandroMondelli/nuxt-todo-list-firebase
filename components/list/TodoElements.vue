<template>    
    <div class="todo-list-wrap">
        <ul class="todo-list">
            <li class="todo-list-el" v-for="todoEl in firebaseData" :key="todoEl">
                <span class="todo-el-content">{{ todoEl.todo }}</span>
                <div class="todo-el-priority" :style="{ backgroundColor: todoEl.priority }"></div>
            </li>
        </ul>    
    </div>
</template>

<script>
import { getDatabase, ref, onValue } from 'firebase/database';

export default {
    data() {
        return {
            firebaseData: {},
        }
    },
    created() { //Hook creazione
        const user = $fetch('/api/me', { //Recupero ID 
            method: 'GET'
        })
        .then((response) => { 
            const uid = response.uid; //Recupero id user
            const db = getDatabase(); //Recupero database

            const todoRef = ref(db, 'todo/' + uid); //Definisco percorso database
            //Listener che riceve dati in tempo reale
            onValue(todoRef, (snapshot) => {
                const data = snapshot.val(); //Prendo valore snapshot

                this.firebaseData = data; //Salvo in data
                }, 
                (err) => { this.firebaseData = 'Si è verificato un errore: ' + err }
            );
        })
        .catch('Errore');
    }
}
</script>

<style scoped>
.todo-list {
    list-style-type: none;
}

.todo-list-el {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.todo-el-priority {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
}
</style>