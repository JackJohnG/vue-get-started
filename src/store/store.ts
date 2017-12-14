import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentPage: 0
    },
    mutations: {
        setPage (state, val) {
            state.currentPage = val;
        }
    }
});

export default store;
