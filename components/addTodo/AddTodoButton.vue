<template>
    <div class="add-todo-button">
        <p v-if="!activeStatus">+</p>
        <p v-else>-</p>
    </div>
</template>

<script>
export default {
    props: ['activeStatus']
}
</script>

<style scoped>
.add-todo-button {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    padding: 1rem 1.4rem;
    width: 3.5rem;
    text-align: center;
    background-color: rgb(50, 50, 180);
    color: #FFF;
    border-radius: 50%;
    font-size: 22px;
    transition: 0.3s all ease;
}

.add-todo-button:hover {
    transform: scale(0.95);
    cursor: pointer;
}
</style>