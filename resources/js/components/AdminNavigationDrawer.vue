<template>
    <v-navigation-drawer right
                         app
                         v-model="drawer"
    >
        <v-list>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <v-avatar>
                        <v-img
                            :src="user.profile_src"
                        ></v-img>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{user.name}}</v-list-item-title>
                    <v-list-item-subtitle>نقش کاربر</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.text"
            :to="{name:item.to}"
            >
                <v-list-item-content>
                    <p>{{ item.text }}</p>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "AdminNavigationDrawer",

        props: ['drawer'],
        metaInfo:{
            title:'پنل مدیریت'
        },

        data() {
            return {
                items: [
                    {
                        text: 'داشبورد',
                        class: 'white--text',
                        to:'admin-dashboard'
                    },
                    {
                        text: 'لیست کاربران',
                        class: 'white--text',
                        to:'admin-user-index'
                    },
                    {
                        text: 'مدیریت پست ها',
                        class: 'white--text',
                        to:'admin-post-index'
                    },
                    {
                        text: 'مدیریت پیش نویس ها',
                        class: 'white--text',
                        to:'admin-draft-index'
                    },
                    {
                        text: 'مدیریت دسته بندی ها',
                        class: 'white--text',
                        to:'admin-category-index'
                    },
                ]
            }
        },
        computed: mapState('user', ['user'])
    }
</script>

<style scoped>

</style>
