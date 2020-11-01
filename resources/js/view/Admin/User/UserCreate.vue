<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <p class="headline">ساخت کاربر</p>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <v-form ref="createUser" class="mt-10">
                        <v-text-field name="name"
                                      label="نام"
                                      outlined
                                      v-model="form.name"
                                      :rules="[
                                          required('این فیلد الزامیست')
                                      ]"
                        ></v-text-field>
                        <v-text-field name="username"
                                      label="نام کاربری"
                                      outlined
                                      v-model="form.username"
                                      :rules="[
                                          required('این فیلد الزامیست')
                                      ]"
                                      :error-messages="errors.username"
                        ></v-text-field>
                        <v-text-field name="email"
                                      label="ایمیل"
                                      outlined
                                      v-model="form.email"
                                      :rules="[
                                          required('این فیلد الزامیست'),
                                          verifyEmail()
                                      ]"
                                      :error-messages="errors.email"
                        ></v-text-field>
                        <v-text-field name="password"
                                      label="رمزعبور"
                                      outlined
                                      v-model="form.password"
                                      :rules="[
                                          required('این فیلد الزامیست')
                                      ]"
                        ></v-text-field>
                        <v-btn color="info"
                               @click="save"
                        >ذخیره</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import { required, verifyEmail } from "@/rules";

    export default {
        name: "UserCreate",

        metaInfo: {
            title: 'ساخت کاربر'
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disabled: false,
                        to: { name: 'admin-dashboard' },
                        exact: true
                    },
                    {
                        text: 'مدیریت کاربران',
                        disabled: false,
                        to: { name: 'admin-user-index' },
                        exact: true
                    },
                    {
                        text: 'ساخت کاربر',
                        disabled: true,
                        to: { name: 'admin-user-create' },
                        exact: true
                    },
                ],
                form: {
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                },
                errors: {
                    username: null,
                    email: null,
                },
                required,
                verifyEmail
            }
        },

        methods: {
            save() {
                this.errors = {
                    username: null,
                    email: null,
                }
                if (this.$refs.createUser.validate()) {
                    axios.post('/api/admin/users', this.form)
                        .then(() => {
                            this.$router.push({ name: 'admin-user-index' });
                        }).catch(({ response }) => {
                        if (response.data.errors.email) {
                            this.errors.email = response.data.errors.email[0];
                        }
                        if (response.data.errors.username) {
                            this.errors.username = response.data.errors.username[0];
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
