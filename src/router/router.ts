import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store/store';

import Page1 from '../pages/page1/page1.vue';
import Page2 from '../pages/page2/page2.vue';
import Page3 from '../pages/page3/page3.vue';

Vue.use(VueRouter);

// 2. Define some routes
// Each route should map to a component. The 'component' can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { name: '3', path: '/', component: Page3 },
    { name: '1', path: '/foo', component: Page1 },
    { name: '2', path: '/bar', component: Page2 }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
    routes // short for `routes: routes`
});

router.afterEach((to, from) => {
    console.log(to);
    store.commit('setPage', parseInt((<any>to.name)));
})