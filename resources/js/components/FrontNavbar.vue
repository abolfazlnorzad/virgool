<template>

    <v-app-bar
        flat
        :dark="$vuetify.theme.dark"
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
                            <router-link
                                to="/"
                            >
                                <v-img src="/images/logo.png"
                                       alt="website logo"

                                ></v-img>
                            </router-link>
                            <router-link
                                class="mt-10 mr-4 hidden-sm-and-down"
                                :to="{name:'create-posts'}"
                            >
                                ایجاد پست جدید
                            </router-link>
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
                                >ورود
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
                                    <template v-slot:activator="{ on }">

                                        <v-btn v-on="on">
                                            <v-icon>mdi-account</v-icon>
                                        </v-btn>
                                        <v-btn
                                            @click="$emit('notif')"
                                            text
                                        >
                                            <v-icon>
                                                mdi-bell
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list width="250px">
                                        <v-list-item class="body-2"
                                                     two-line
                                        >
                                            <router-link :to="{name:'profile'}">
                                                <v-list-item-content>
                                                    <v-list-item-title>{{ name }}</v-list-item-title>
                                                    <v-list-item-subtitle>پروفایل من</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </router-link>
                                        </v-list-item>

                                        <v-list-item class="body-2"
                                        >
                                            <router-link :to="{name:'my-posts'}">
                                                نوشته های من

                                            </router-link>
                                        </v-list-item>

                                        <v-list-item class="body-2"
                                        >
                                            <router-link :to="{name:'liked-posts'}">
                                                نوشته های مورد علاقه من

                                            </router-link>
                                        </v-list-item>


                                        <v-list-item class="body-2"
                                        >
                                            <router-link :to="{name:'bookmarked-posts'}">
                                                نوشته های ذخیره شده ی من

                                            </router-link>
                                        </v-list-item>


                                        <v-list-item @click.prevent="logout"
                                                     class="body-2"
                                        >
                                            خروج از حساب کاربری
                                        </v-list-item>
                                        <v-divider></v-divider>
                                        <v-list-item @click.prevent="nightMode"
                                                     class="body-2"
                                        >
                                            حالت {{ isDark ? 'روز' : 'شب' }}
                                        </v-list-item>
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
                                <v-hover v-for="category in $store.state.category.categories"
                                         :key="category.id"
                                         v-slot:default="{ hover }"
                                >
                                    <router-link class="body-2 pl-3"
                                                 :to="{name:'post-category',params:{slug:category.slug}}"

                                                 :class="hover ? 'white--text' : 'blue--text text--lighten-4'"

                                    >


                                        {{ category.title }}

                                    </router-link>
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
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "FrontNavbar",

        data() {
            return {
                search: false,
            }
        },

        computed: {

            ...mapState({
                auth: state => state.user.isLoggedIn,
                name: state => state.user.user.name
            }),
            isDark() {
                return this.$vuetify.theme.dark;
            }
        },


        created() {

            this.$store.dispatch('category/getNavCate');

        },

        methods: {
            logout() {
                this.$store.dispatch('user/logout')
                    .then(() => {
                        this.$router.push('/');
                    })
            },

            nightMode() {
                this.$vuetify.theme.dark = !this.isDark;
                this.isDark ? localStorage.setItem('isDark', 1) : localStorage.removeItem('isDark');
            }
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
