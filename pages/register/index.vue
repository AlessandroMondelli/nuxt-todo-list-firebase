<template>
    <NuxtLayout>
      <div class="container todo-register-wrap">
        <h2>Registrati</h2>
        <LoginTodoRegister />
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