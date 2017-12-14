<template>
    <div>
        <div>The current page is {{pageNum}}</div>
        <router-link to="/">Go to Main</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import store from '../store/store';

    let PageTrackerComponent = Vue.extend({
        computed: {
            pageNum: function () {
                return store.state.currentPage
            }
        }
    });

    export default PageTrackerComponent;
</script>