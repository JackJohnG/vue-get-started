<template>
    <div>this is page {{pageNumber}}</div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                pageNumber: 1
            }
        }
    });
</script>