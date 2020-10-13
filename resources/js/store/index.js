import Vue from 'vue';
import Vuex from 'vuex';
import * as user from '@/store/modules/user';
import * as draft from '@/store/modules/draft';
import * as post from '@/store/modules/post';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        draft,
        post,

    }
})
