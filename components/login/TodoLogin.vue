<template>
    <div class="todo-login-form">
        <form @submit.prevent="loginUser">
            <CommonFormField label="Email" name="email" type="email" @return-value="getValue" />
            <CommonFormField label="Password" name="password" type="password" @return-value="getValue" />
            <button class="todo-btn" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        getValue( ...e ) {
            const value = e[1];

            if( e[0] == 'email' ) {
                this.email = value;
            } else if( e[0] == 'password' ) {
                this.password = value;
            }
        },
        async loginUser() {
            const credentials = await signInUser( this.email, this.password );
        }
    }
}
</script>

<style scoped>

</style>