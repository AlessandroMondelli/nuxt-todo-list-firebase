<template>
    <div class="todo-header container">
        <HeaderLeftHeader />
        <HeaderRightHeader />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .todo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2rem;
        border-bottom: 1px solid black;
    }
</style>