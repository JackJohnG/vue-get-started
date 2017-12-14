<template>
    <div>
        <div>This is Page {{pageNumber}}</div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                pageNumber: 3
            }
        }
    });
</script>