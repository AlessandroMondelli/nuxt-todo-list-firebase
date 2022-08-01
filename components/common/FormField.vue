<template>
    <div class="form-control">
        <label>{{ label }}</label>
        <input :id="label" :name="name" :type="type" v-model="value" @blur="returnValue()" />  
    </div>
</template>

<script>
export default {
    props: [ 'label', 'name', 'type' ],
    data() {
        return {
            value: '',
        }
    }, 
    methods: {
        returnValue() {
            this.$emit( 'return-value', this.name, this.value );
        }
    }
}
</script>

<style scoped>
    .form-control {
        margin: 1.5rem 0;
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 0.5rem;
    }

    input {
        max-width: 15%;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid black;
        transition: 0.3s ease;
    }

    input:focus {
        border: 1px solid rgb(50, 50, 180);
        box-shadow: inset 0px 0px 8px 2px rgba(50, 50, 180, 0.3);
    }
</style>