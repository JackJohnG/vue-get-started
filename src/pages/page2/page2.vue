<template>
    <div>this is another page {{pageNumber}}</div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                pageNumber: 2
            }
        }
    });
</script>