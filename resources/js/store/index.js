import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: window.user,
        isLoggedIn: !! window.user,
    },
    mutations: {
        LOGOUT(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
        LOGIN(state, payload) {
            state.isLoggedIn = true;
            state.user = {
                name: payload.name
            }
        },
        REGISTER(state, payload) {
            state.isLoggedIn = true;
            state.user = {
                name: payload.name
            }
        }
    },
    actions: {
        logout({ commit }) {
            axios.post('/logout')
                .then(() => {
                    commit('LOGOUT')
                })
        },
        login({ commit }, form) {
            return axios.post('/login', form)
                .then(({ data }) => {
                    commit('LOGIN', data.data)
                })
        },
        register({ commit }, form) {
            return axios.post('/register', form)
                .then(({ data }) => {
                    commit('REGISTER', data.data)
                })
        }
    }
})
