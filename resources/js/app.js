require('./bootstrap');

window.Vue = require('vue');
import vuetify from './plugin/vuetify';
import router from './router/router';

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    vuetify,
    router
});
