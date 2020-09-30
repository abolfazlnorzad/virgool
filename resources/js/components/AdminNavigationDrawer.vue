<template>
    <v-navigation-drawer right
                         app
                         v-model="drawer"
    >
        <v-list>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <v-avatar>
                        <v-img src="https://files.virgool.io/upload/users/138006/avatar/s05zpH.png?x-oss-process=image/resize,h_90,w_90,center"
                        ></v-img>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>اسم کاربر</v-list-item-title>
                    <v-list-item-subtitle>نقش کاربر</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.text">
                <v-list-item-content>
                    <p>{{ item.text }}</p>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "AdminNavigationDrawer",

        props: ['drawer'],

        data() {
            return {
                items: [
                    {
                        text: 'داشبورد',
                        class: 'white--text'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
