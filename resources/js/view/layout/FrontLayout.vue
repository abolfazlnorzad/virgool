<template>
    <div>
        <verify-banner v-if="user&&user.isVerified==1?true:false"></verify-banner>
        <front-navbar @show-navigation="drawer = true"
        ></front-navbar>

        <front-navigation-drawer :drawer="drawer"
        ></front-navigation-drawer>

        <router-view></router-view>
    </div>
</template>

<script>
    import FrontNavbar from "@/components/FrontNavbar";
    import FrontNavigationDrawer from "@/components/FrontNavigationDrawer";
    import VerifyBanner from "@/components/VerifyBanner";
    import {mapState} from "vuex";

    export default {
        name: "FrontLayout",

        components: {
            VerifyBanner,
            FrontNavbar,
            FrontNavigationDrawer
        },

        data() {
            return {
                drawer: false,
            }
        },
        computed: {
            ...mapState('user', ['user'])
        }
    }
</script>

<style scoped>

</style>
