require('./bootstrap');

window.Vue = require('vue');
import vuetify from './plugin/vuetify';
import router from './router/router';
import store from './store';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store
});
