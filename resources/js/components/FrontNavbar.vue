<template>
    <v-app-bar color="#fff"
               flat
               :height="$vuetify.breakpoint.smAndDown ? 80 : 160"
    >
        <v-container fluid>
            <v-row>
                <v-container>
                    <v-row align="center">
                        <v-col cols="auto" class="d-flex flex-row">
                            <v-app-bar-nav-icon class="hidden-md-and-up"
                                                @click="$emit('show-navigation')"
                            ></v-app-bar-nav-icon>
                            <v-img src="/images/logo.png"
                                   alt="website logo"
                                   max-height="50px"
                                   min-width="200px"
                                   max-width="250px"
                            ></v-img>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                            <v-menu v-model="search"
                                    :close-on-content-click="false"
                                    absolute
                                    top
                                    min-width="100%"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn text @click="search = true">
                                        <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                </template>
                                <v-list class="d-flex flex-row align-center">
                                    <v-text-field class="mr-10"
                                                  placeholder="در بین مقالات، نویسندگان و… جستجو کنید"
                                    ></v-text-field>
                                    <v-btn class="ml-10 title"
                                           text
                                           large
                                           @click="search = false"
                                    >x
                                    </v-btn>
                                </v-list>
                            </v-menu>
                            <template v-if="! auth">
                                <v-btn :to="{ name: 'login' }"
                                       text
                                       small
                                       color="primary"
                                >
                                    ورود

                                </v-btn>
                                <span>/</span>
                                <v-btn :to="{ name: 'register' }"
                                       text
                                       small
                                       color="primary"
                                >ثبت نام
                                </v-btn>
                            </template>
                            <template v-else>
                                <v-menu offset-y>
                                    <template v-slot:activator="{on}">
                                        <v-btn v-on="on">
                                            <v-icon>mdi-account</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item>{{user.name}}</v-list-item>
                                        <v-list-item @click.prevent="logout">خروج از حساب کاربری</v-list-item>
                                    </v-list>
                                </v-menu>
                            </template>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
            <v-row class="blue darken-2" v-if="$vuetify.breakpoint.mdAndUp">
                <v-col cols="12">
                    <v-container class="py-0">
                        <v-row>
                            <v-col cols="12" class="py-1">
                                <v-hover v-for="item in items"
                                         :key="item.text"
                                         v-slot:default="{ hover }"
                                >
                                    <span class="body-2 pl-3"

                                          :class="item.class + ' ' + (hover || item.class === 'white--text' ? 'white--text' : 'blue--text')"
                                    >
                                        {{ item.text }}
                                    </span>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>

    </v-app-bar>
</template>

<script>
    import {mapState, mapActions} from "vuex";

    export default {
        name: "FrontNavbar",

        data() {
            return {
                search: false,
                items: [
                    {
                        text: 'جدیدترین پست‌ها',
                        class: 'white--text'
                    },
                    {
                        text: 'پست‌های دوستان',
                        class: 'white--text'
                    },
                    {
                        text: 'استارتاپ',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'دلنوشته',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'زندگی',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'کتاب',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'برنامه نویسی',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'روانشناسی',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'حال خوبتو',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'با من تقسیم کن',
                        class: 'text--lighten-4'
                    },
                ]
            }
        },
        computed: {
            ...mapState({
                auth: 'isLoggedIn',
                user: 'user',
            }),

        },
        methods: {
...mapActions(['logout'])
        }
    }
</script>

<style>
    .v-input__control .v-input__slot::before {
        border-color: white !important;
    }

    .v-menu__content {
        box-shadow: unset;
    }

    .v-menu__content, .v-list {
        border-radius: 0;
    }
</style>
