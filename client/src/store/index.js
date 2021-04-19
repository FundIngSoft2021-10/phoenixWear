import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        is_searchBar_open: false,
    },
    mutations: {
        change_searchBar_state(state) {
            state.is_searchBar_open = state.is_searchBar_open ? false : true;
        },
    },
    getters: {
        get_is_searchBar_open(state) {
            return state.is_searchBar_open;
        },
    },
    actions: {},
    modules: {},
});