<template>
    <v-navigation-drawer right
                         app
                         temporary
                         :value="value"
                         @input="change"
    >
        <v-list>
            <v-list-item v-for="item in items" :key="item.text">
                <v-list-item-content>
                    <router-link
                        :to="item.to"
                    >{{ item.text }}
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "FrontNavigationDrawer",

        props: ['value'],
        methods: {
            change(event) {
                this.$emit('input', event);
            }
        },

        data() {
            return {
                items: [
                    {
                        text: 'ساخت پست جدید',
                        class: 'white--text',
                        to: {name: 'create-posts'}
                    },
                    {
                        text: 'جدیدترین پست‌ها',
                        class: 'white--text',
                        to: {name: 'home'}
                    },
                    {
                        text: 'پست‌های دوستان',
                        class: 'white--text',
                        to: {name: 'home'}
                    },
                    {
                        text: 'استارتاپ',
                        class: 'blue--text text--lighten-4',
                        to: {name: 'home'}
                    },
                    {
                        text: 'دلنوشته',
                        class: 'blue--text  text--lighten-4',
                        to: {name: 'home'}
                    },
                    {
                        text: 'زندگی',
                        class: 'blue--text  text--lighten-4',
                        to: {name: 'home'}
                    },
                    {
                        text: 'کتاب',
                        class: 'blue--text  text--lighten-4',
                        to: {name: 'home'}
                    },
                    {
                        text: 'برنامه نویسی',
                        class: 'blue--text  text--lighten-4',
                        to: {name: 'home'}
                    },
                    {
                        text: 'روانشناسی',
                        class: 'blue--text  text--lighten-4',
                        to: {name: 'home'}
                    },
                    {
                        text: 'حال خوبتو',
                        class: 'blue--text  text--lighten-4',
                        to: {name: 'home'}
                    },
                    {
                        text: 'با من تقسیم کن',
                        class: 'blue--text  text--lighten-4',
                        to: {name: 'home'},
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
