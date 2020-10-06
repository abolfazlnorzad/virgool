<template>
    <v-container>
        <v-row align="center" justify="center" class="d-flex flex-column">
            <v-col col="12" md="8">

                <v-form>
                    <div class="d-flex flex-row">
                        <v-avatar size="75px">
                            <v-img
                                src="https://files.virgool.io/upload/users/136190/posts/qxig2p9thtnd/wxfzn2gvjkw2.jpeg?x-img=v1/resize,w_250/optimize,q_50"></v-img>
                        </v-avatar>

                        <div class="w-100 mx-7">
                            <v-text-field

                                placeholder="نام و نام خانوادگی"
                            ></v-text-field>
                            <v-textarea
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
                                <v-btn
                                    small
                                    class="my-3"
                                >ویرایش
                                </v-btn>
                            </div>
                            <v-spacer></v-spacer>
                      <span> abolfazlnorzad </span>

                        </div>

                        <v-divider class="my-10"></v-divider>

                        <div class="my-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title"> ایمیل </span>
                                <v-btn

                                    small
                                    class="my-3"
                                >ویرایش
                                </v-btn>
                            </div>
                            <v-spacer></v-spacer>
                            <span> abolfazlnorzad </span>

                        </div>

                        <v-divider class="my-10"></v-divider>



                        <div class="my-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title"> دریافت ایمیل هنگام لایک کردن </span>

                            </div>
                            <v-spacer></v-spacer>
                            <v-switch
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
                                inset
                            ></v-switch>

                        </div>

              <div class="d-flex flex-row">
                  <v-spacer></v-spacer>
                  <v-btn
                  rounded

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
    export default {
        name: "Profile",
        metaInfo:{
            title:'پروفایل من'
        }
    }
</script>

<style scoped>

</style>
