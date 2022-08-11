<template>
    <div class="del-todo-form-wrap centered-form">
        <form class="del-todo-form" @submit.prevent="delTodoEl">
            <p>Vuoi davvero eliminare l'elemento dalla lista?</p>
            <div class="radio-choices">
                <div class="radio-choice">
                    <input id="true-del" name="del-todo" type="radio" value="true" v-model="delPick" />
                    <label for="true-del">Sì</label>
                </div>
                <div class="radio-choice">
                    <input id="false-del" name="del-todo" type="radio" value="false" v-model="delPick"/>
                    <label for="false-del">No</label>
                </div>
            </div>
            <button class="todo-btn" type="submit">Conferma</button>
        </form>
    </div>
</template>

<script>
import { getDatabase, ref, remove } from 'firebase/database';

export default {
    props: [ 'todoId' ],
    data() {
        return {
            delPick: false,
        }
    },
    methods: {
        delTodoEl() {
            if( this.delPick ) {
                const user = $fetch('/api/me', { //Recupero ID 
                method: 'GET'
                })
                .then((response) => { 
                    const uid = response.uid; //Recupero id user
                    const db = getDatabase(); //Recupero database

                    if( uid ) { //Se l'user id è definito e il campo todo non è vuoto
                    //Carico dati nel database
                        remove(ref(db, 'todo/' + uid + '/' + this.todoId));

                        this.$emit( 'del-done', true );
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
.radio-choices {
    display: flex;
    justify-content: space-around;
}

.radio-choice input {
    margin: 1.5rem 0.5rem 0 0;
}

.todo-btn {
    width: 30%;
    margin: 0 auto;
    margin-top: 1rem;
}
</style>