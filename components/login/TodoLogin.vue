<template>
    <div class="todo-login-form">
        <form @submit.prevent="loginCheck()">
            <CommonFormField label="Username" name="username" type="text" @return-value="getValue" />
            <CommonFormField label="Password" name="password" type="password" @return-value="getValue" />
            <button class="todo-btn" @click="loginUser()">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        getValue( ...e ) {
            let value = e[1];

            if( e[0] == 'username' ) {
                this.username = value;
            } else if( e[0] == 'password' ) {
                this.password = value;
            }
        }
    }
}
</script>

<style scoped>

</style>