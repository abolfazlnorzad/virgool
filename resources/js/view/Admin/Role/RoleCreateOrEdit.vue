<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="headline">{{isEditing ? 'ویرایش نقش کاربری':'ساخت نقش جدید'}}</p>

                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <v-form ref="createRole" class="mt-10">
                        <v-text-field label="نام نقش"
                                      v-model="form.name"
                                      outlined
                                      :rules="[
                                          required('فیلد نام الزامیست')
                                      ]"
                        ></v-text-field>

                        <v-btn color="info"
                               @click="saveRole"
                        >
                            {{isEditing ? 'ویرایش  ':'ذخیره'}}

                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import {required} from "@/rules";

    export default {
        name: "RoleCreateOrEdit",

        metaInfo() {
            return{
                title: this.isEditing ? 'ویرایش نقش کاربری':'ساخت نقش جدید'
            }

        },
        created() {
            if (this.$route.params.id) {
                this.isEditing = true;
                this.breadcrumbs[2].text='ویرایش نقش کاربری'
                axios.get(`/api/admin/roles/${this.$route.params.id}`)
                    .then(({data}) => {
                        this.form.name = data.name
                    })

            }
        },

        computed:{
            requestUrl(){
               return this.isEditing ? `/api/admin/roles/${this.$route.params.id}`:'/api/admin/roles'
            },

            requestType(){
               return this.isEditing ?'patch':'post'
            },
        },

        data() {
            return {
                isEditing: false,
                required,
                form: {
                    name: null
                },
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disabled: false,
                        to: {name: 'admin-dashboard'},
                        exact: true
                    },
                    {
                        text: 'مدیریت نقش ها',
                        to: {name: 'admin-role-index'},
                        disabled: false,
                        exact: true
                    },
                    {
                        text: 'ساختن نقش کاربری',
                        disabled: true,
                        exact: true
                    },
                ],
            }
        },

        methods: {
            saveRole() {
                if (this.$refs.createRole.validate()) {
                    axios[this.requestType](this.requestUrl, this.form)
                        .then(() => {
                            this.$router.push({name: 'admin-role-index'});
                        })
                }
            }
        }
    }
</script>

<style scoped>

</style>
