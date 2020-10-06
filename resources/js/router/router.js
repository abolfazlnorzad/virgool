import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from '@/store'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((routeTo, routeFrom, next) => {

    if (routeTo.meta.guest && store.state.user.isLoggedIn) {
        next({name: 'home'})
    }

    if (routeTo.meta.auth && !store.state.user.isLoggedIn) {
        next({name: 'login'})
    }

    if (routeTo.meta.verified && store.state.user.user.isVerified == 1) {
        next({name: 'home'})
    }

    next()
});

export default router;
