<template>
    <div>This is Page {{pageNumber}}</div>
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