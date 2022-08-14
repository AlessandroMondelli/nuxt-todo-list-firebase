<template>
    <div class="add-todo-wrap">
        <Transition name="fade">
            <AddTodoForm v-if="addActive" />
        </Transition>
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