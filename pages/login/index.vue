<template>
    <NuxtLayout>
        <div class="container todo-login-wrap">
            <h2>Effettua il login</h2>
            <LoginTodoLogin />
        </div>
    </NuxtLayout>
</template>

<script>
definePageMeta({
    middleware: ["auth"],
});

export default {
}
</script>

<style>

</style>