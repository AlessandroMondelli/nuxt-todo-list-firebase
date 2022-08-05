<template>
    <div class="add-todo-wrap">
        <AddTodoForm v-if="addActive" />
        <AddTodoButton @click="openForm" :activeStatus="addActive" />
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
    }
}
</script>

<style scoped>

</style>