<template>
    <v-container fluid class="pa-0 ma-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
            <auth-banner></auth-banner>
            <v-col cols="12" md="4" class="d-flex align-end">
                <div class="w-100 mx-5">
                    <span class="blue--text font-weight-bold">ورود به حساب کاربری</span>
                    <v-text-field label="نام کاربری یا ایمیل"
                                  outlined
                                  rounded
                                  v-model="form.email"
                                  class="mt-9"
                    ></v-text-field>
                    <v-text-field label="رمز عبور"
                                  outlined
                                  rounded
                                  v-model="form.password"
                    ></v-text-field>
                    <div class="d-flex">
                        <span class="body-2">فراموشی رمز عبور</span>
                        <v-spacer></v-spacer>
                        <v-btn color="info"
                               class="px-6"
                               @click="login"
                               rounded
                        >
                            <template v-if="loading">
                                <v-progress-circular
                                    color="white"
                                    :indeterminate="true"
                                ></v-progress-circular>
                            </template>

                            <template v-else>
                                ورود به حساب کاربری
                                <v-icon class="mr-2">mdi-chevron-left</v-icon>
                            </template>

                        </v-btn>
                    </div>
                    <div class="d-flex flex-column align-center justify-center mt-9 body-2 grey--text">
                        <span class="mt-6">ورود با اکانت گوگل</span>
                        <span class="mt-6">ثبت نام در ویرگول به منزله موافقت با قوانین است</span>
                        <router-link :to="{ name: 'register' }" class="my-6">عضو نیستید؟ ثبت نام از طریق آدرس ایمیل</router-link>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AuthBanner from '@/components/auth/AuthBanner';

    export default {
        name: "Login",
        components: {
            AuthBanner
        },
        data(){
            return{
                form:{
                    email:null,
                    password:null,
                },
                loading: false,
            }
        },
        methods:{
            login(){
                this.loading = true;
                axios.post('/login', this.form)
                    .finally(() => {
                        this.loading = false;
                    })
            }
        }
    }
</script>

<style scoped>
    .gra-bg {
        background-image: linear-gradient(to bottom right,#054592 0,#1897d4);
    }
</style>
