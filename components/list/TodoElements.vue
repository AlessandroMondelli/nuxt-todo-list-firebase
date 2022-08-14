<template>    
    <div class="todo-list-wrap">
        <p class="add-el-warning" v-if="firebaseData === null || Object.keys(firebaseData).length === 0">Clicca il bottone in basso a destra della finestra per aggiungere degli elementi</p>
        <ul class="todo-list" v-else>
            <li class="todo-list-el" v-for="todoEl in firebaseData" :key="todoEl" @click="delActive = !delActive; selId = todoEl.id">
                <span class="todo-el-content">{{ todoEl.todo }}</span>
                <div class="todo-el-priority" :style="{ backgroundColor: todoEl.priority }"></div>
            </li>
        </ul> 
        <Transition name="fade">
            <ListDelTodo :todoId="selId" v-if="delActive" @del-done="elDeleted"/>
        </Transition>  
    </div>
</template>

<script>
import { getDatabase, ref, onValue } from 'firebase/database';

export default {
    data() {
        return {
            firebaseData: {},
            delActive: false,
            selId: 0,
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
    },
    methods: {
        elDeleted( e ) {
            if( e ) {
                this.delActive = false;
            }
        }
    }
}
</script>

<style scoped>
.add-el-warning {
    font-size: 18px;
}

.todo-list {
    list-style-type: none;
}

.todo-list-el {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease;
}

.todo-list-el:hover {
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.2);
}

.todo-el-priority {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
}
</style>