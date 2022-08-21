<template>
    <div>
        <h1>{{ message }}</h1>
        <app-input :msg="message" @messChange="message = $event"></app-input>
    </div>
</template>

<script>
    import Input from './field.vue'

    export default {
        data(){
            return {
                message: 'Test work text'
            }
        },
       components: {
           'app-input': Input
       }
    }
</script>
