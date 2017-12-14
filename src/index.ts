import Vue from "vue";

import './index.html';
import {router} from "./router/router";

import PageTrackerComponent from './components/pageTracker.component.vue';

Vue.component('page-tracker', PageTrackerComponent);

const app = new Vue({
    router
}).$mount('#app')
