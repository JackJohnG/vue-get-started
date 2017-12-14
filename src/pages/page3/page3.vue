<template>
    <div>
        <div>this is another page {{pageNumber}}</div>
        <!--<button @click="goToFoo()">Go to Foo</button>-->
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                pageNumber: 3
            }
        },
        methods: {
            goToFoo() {
                this.$router.push('foo');
            }
        }
    });
</script>