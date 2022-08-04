<template>
    <div class="right-header">
        <div class="nav-wrap">
            <nav class="todo-menu">
                <ul>
                    <NuxtLink to="register" v-if="Object.values(firebaseUser)[0].$sfirebaseUser == null"><li>Register</li></NuxtLink>
                    <NuxtLink to="login" v-if="Object.values(firebaseUser)[0].$sfirebaseUser == null"><li>Login</li></NuxtLink>
                    <li @click="logout" v-else>Logout</li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async logout() {
            const result = await signOutUser();
        }
    },
    computed: {
        firebaseUser() {
            return useFirebaseUser();
        }
    },
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