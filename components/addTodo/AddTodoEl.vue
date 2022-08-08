<template>
    <div class="add-todo-wrap">
        <AddTodoForm v-if="addActive" />
        <AddTodoButton @click="openForm" :activeStatus="addActive" v-if="Object.values(firebaseUser)[0].$sfirebaseUser != null" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            addActive: false
        }
    },
    methods: {
        openForm() {
            this.addActive = !this.addActive;
        }
    },
    computed: {
        firebaseUser() {
            return useFirebaseUser();
        }
    }
}
</script>

<style scoped>

</style>