import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store/store';

import Page1 from '../pages/page1/page1.vue';
import Page2 from '../pages/page2/page2.vue';
import Page3 from '../pages/page3/page3.vue';

Vue.use(VueRouter);

const routes = [
    { name: '1', path: '/', component: Page1 },
    { name: '2', path: '/page2', component: Page2 },
    { name: '3', path: '/page3', component: Page3 }
];

export const router = new VueRouter({
    routes
});

router.afterEach((to, from) => {
    store.commit('setPage', parseInt((<any>to.name)));
});