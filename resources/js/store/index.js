import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: window.user,
        isLoggedIn: !!window.user,
    },
    mutations: {
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
        }
    },
    actions: {
        logout({commit}){
            axios.post('/logout')
                .then(()=>{
                    commit('logout');
                })
        }
    }


});
