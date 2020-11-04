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
                    <v-list-item-subtitle>
                        <template v-for="role in user.roles">
                            <v-btn
                                text
                            small
                            >{{role}}</v-btn>
                        </template>

                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.text"
                         :to="{name:item.to}"
                         v-if="showLink(item.roles)"
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
        metaInfo: {
            title: 'پنل مدیریت'
        },

        data() {
            return {
                items: [
                    {
                        text: 'داشبورد',
                        class: 'white--text',
                        to: 'admin-dashboard',
                        roles: ['admin']

                    },
                    {
                        text: 'لیست کاربران',
                        class: 'white--text',
                        to: 'admin-user-index',
                        roles: ['admin']
                    },

                    {
                        text: 'مدیریت نقش ها',
                        class: 'white--text',
                        to: 'admin-role-index',
                        roles: ['admin']
                    },

                    {
                        text: 'مدیریت پست ها',
                        class: 'white--text',
                        to: 'admin-post-index',
                        roles: ['admin','author']
                    },
                    {
                        text: 'مدیریت پیش نویس ها',
                        class: 'white--text',
                        to: 'admin-draft-index',
                        roles: ['admin','author']
                    },
                    {
                        text: 'مدیریت دسته بندی ها',
                        class: 'white--text',
                        to: 'admin-category-index',
                        roles: ['admin']
                    },
                    {
                        text: 'مدیریت دیدگاه ها',
                        class: 'white--text',
                        to: 'admin-comment-index',
                        roles: ['admin']
                    },
                ]
            }
        },
        computed: mapState('user', ['user']),
        methods: {
            showLink(roles) {
                return roles.some(
                    (role) => {
                        return this.user.roles.includes(role);
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
