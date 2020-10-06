<template>
    <v-container v-if="user">
        <v-row align="center" justify="center" class="d-flex flex-column">
            <v-col col="12" md="8">

                <v-form
                    ref="form"
                >
                    <div class="d-flex flex-row">
                        <v-avatar size="75px">
                            <v-img
                                @click="$refs.profile.click()"
                                :src="user.profile_src || '/images/avatar.png'"
                            >
                            </v-img>
                        </v-avatar>

                        <input type="file"
                               style="display: none"
                               ref="profile"
                               @change="uploadProfile"

                        >


                        <div class="w-100 mx-7">
                            <v-text-field
                                v-model="user.name"
                                :rules="[
required('نام الزامی است')
]"
                                placeholder="نام و نام خانوادگی"
                            ></v-text-field>
                            <v-textarea
                                v-model="user.bio"
                                placeholder="درباره من"
                            ></v-textarea>

                        </div>

                    </div>
                    <v-divider class="my-15"></v-divider>

                    <div>
                        <h2> تظیمات حساب کاربری </h2>

                        <div class="my-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title"> نام کاربری </span>
                                <div class="d-flex flex-row">
                                    <v-btn
                                        small
                                        class="my-3 mx-3"
                                        @click="changeEdit('username')"
                                        :class="{'success':editStatus.username}"
                                    >
                                        {{editStatus.username ? 'ثبت' : 'ویرایش'}}
                                    </v-btn>
                                    <v-btn v-show="editStatus.username"
                                           small
                                           class="my-3"
                                           @click="cancel('username')"

                                    >
                                        انصراف
                                    </v-btn>
                                </div>
                            </div>
                            <v-spacer></v-spacer>

                            <template v-if="editStatus.username">
                                <v-text-field
                                    :error-messages="errors.username"
                                    :rules="[
                            required('نام کاربری الزامی است'),
                            verifyUsername()
                                            ]"
                                    style="direction: ltr"
                                    :prefix="url"
                                    v-model="user.username"
                                >

                                </v-text-field>
                            </template>
                            <template v-else>
                                <span> {{fullusername}} </span>
                            </template>

                        </div>

                        <v-divider class="my-10"></v-divider>

                        <div class="my-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title"> ایمیل </span>
                                <div class="d-flex flex-row">
                                    <v-btn
                                        small
                                        class="my-3 mx-3"
                                        @click="changeEdit('email')"
                                        :class="{'success':editStatus.email}"
                                    >
                                        {{editStatus.email ? 'ثبت' : 'ویرایش'}}
                                    </v-btn>
                                    <v-btn v-show="editStatus.email"
                                           small
                                           class="my-3"
                                           @click="cancel('email')"

                                    >
                                        انصراف
                                    </v-btn>
                                </div>
                            </div>
                            <v-spacer></v-spacer>

                            <template v-if="editStatus.email">
                                <v-text-field
                                    :error-messages="errors.email"
                                    :rules="[
                            required('ایمیل الزامی است'),
                           verifyEmail()

                                            ]"
                                    style="direction: ltr"

                                    v-model="user.email"
                                >

                                </v-text-field>
                            </template>
                            <template v-else>
                                <span> {{user.email}} </span>
                            </template>

                        </div>


                        <v-divider class="mt-10"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title">تغییر رمز عبور</span>
                            </div>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="user.password"
                                          class="ltr"
                                          placeholder="رمز عبور"
                                          outlined
                                          :rules="[
                                              moreThan(8,'رمز عبور',true)
]"

                            ></v-text-field>
                        </div>

                        <v-divider class="my-10"></v-divider>


                        <div class="my-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title"> دریافت ایمیل هنگام لایک کردن </span>

                            </div>
                            <v-spacer></v-spacer>
                            <v-switch
                                v-model="user.email_on_like"
                                inset
                            ></v-switch>

                        </div>


                        <v-divider class="my-10"></v-divider>


                        <div class="my-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title"> دریافت ایمیل هنگام پاسخ  </span>
                            </div>
                            <v-spacer></v-spacer>
                            <v-switch
                                v-model="user.email_on_reply"
                                inset
                            ></v-switch>

                        </div>

                        <v-divider class="my-10"></v-divider>


                        <div class="my-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title"> دریافت ایمیل هنگام دنبال کردن </span>

                            </div>
                            <v-spacer></v-spacer>
                            <v-switch
                                v-model="user.email_on_follow"
                                inset
                            ></v-switch>

                        </div>

                        <div class="d-flex flex-row">
                            <v-spacer></v-spacer>
                            <v-btn
                                rounded
                                @click="update"
                                color="success"
                            >
                                دخیره تغییرات
                            </v-btn>
                        </div>

                    </div>

                </v-form>


            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import {required, verifyEmail, moreThan,verifyUsername} from "../../rules";
    import {profileModule} from "../../module/user/profileModule";

    export default {
        name: "Profile",
        metaInfo: {
            title: 'پروفایل من'
        },
        setup() {

            return {
                ...profileModule(),
                required,
                verifyEmail,
                moreThan,
                verifyUsername
            }
        },


    }
</script>

<style scoped>

</style>
