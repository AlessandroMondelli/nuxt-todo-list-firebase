<template>
    <div class="container todo-list-wrap">
        <div class="todo-login-check" v-if="Object.values(firebaseUser)[0].$sfirebaseUser == null">
            <h2 class="login-warning">Prima di creare la tua lista, effettua il login o la registrazione</h2>
        </div>
        <div class="todo-list" v-else></div>
    </div>
</template>

<script>
export default {
    computed: {
        firebaseUser() {
            return useFirebaseUser();
        }
    },
}
</script>

<style scoped>
.todo-login-check {
    margin-top: 2rem;
}
</style>