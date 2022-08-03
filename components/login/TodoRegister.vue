<template>
    <div class="todo-register-form">
        <form @submit.prevent="registerUser">
            <CommonFormField label="Email" name="email" type="email" @return-value="getValue" />
            <CommonFormField label="Password" name="password" type="password" @return-value="getValue" />
            <button class="todo-btn" type="submit">Register</button>
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
            let value = e[1];

            if( e[0] == 'email' ) {
                this.email = value;
            } else if( e[0] == 'password' ) {
                this.password = value;
            }
        },
        async registerUser() {
            const credentials = await createUser( this.email, this.password );
            console.log(credentials);
            console.log(1);
        }
    }
}
</script>

<style scoped>

</style>