<template>
    <div>
        <div>The current page is {{currentPage}}</div>
        <router-link to="/">Go to Main Page</router-link>
        <router-link to="/page2">Go to Page 2</router-link>
        <router-link to="/page3">Go to Page 3</router-link>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import store from '../store/store';

    let PageTrackerComponent = Vue.extend({
        computed: {
            currentPage: function () {
                return store.state.currentPage
            }
        }
    });

    export default PageTrackerComponent;
</script>