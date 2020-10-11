import Vue from 'vue';
import Vuex from 'vuex';
import * as user from '@/store/modules/user';
import * as draft from '@/store/modules/draft';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        draft
    }
})
