<template>
    <div class="auth-form">
        <form @submit.prevent="authUser">
            <CommonFormField label="Email" name="email" type="email" @return-value="getValue" />
            <CommonFormField label="Password" name="password" type="password" @return-value="getValue" />
            <button class="todo-btn" type="submit">{{ authMode }}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: [ 'authMode' ],
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        getValue( ...e ) {
            let value = e[1];

            if( e[0] == 'email' ) {
                this.email = value;
            } else if( e[0] == 'password' ) {
                this.password = value;
            }
        },
        async authUser() {
            if( this.authMode == 'Register' ) {
                const credentials = await createUser( this.email, this.password );
            } else if( this.authMode == 'Login' ) {
                const credentials = await signInUser( this.email, this.password );
            }
        }
    }
}
</script>

<style>

</style>