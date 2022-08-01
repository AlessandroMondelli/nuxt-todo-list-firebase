<template>
    <div class="right-header">
        <div class="nav-wrap">
            <nav class="todo-menu">
                <ul>
                    <NuxtLink to="register"><li>Register</li></NuxtLink>
                    <NuxtLink to="login"><li>Login</li></NuxtLink>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .todo-menu ul {
        list-style-type: none;
    }

    .todo-menu li {
        display: inline-block;
        margin-left: 2rem;
        font-size: 18px;
    }

    .todo-menu li:hover {
        cursor: pointer;
    }
</style>