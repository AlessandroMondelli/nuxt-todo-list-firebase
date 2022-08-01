<template>
    <NuxtLayout>
        <div class="container todo-error">
            <h1>Errore!</h1>
            <p>Torna in <NuxtLink to="/">Home Page</NuxtLink></p>
        </div>
    </NuxtLayout>
</template>

<script>
export default {

}
</script>

<style scoped>
    .todo-error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
</style>