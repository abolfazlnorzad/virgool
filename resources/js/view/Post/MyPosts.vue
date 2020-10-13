<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="mt-10 d-flex flex-row">
                        <span class="headline font-weight-bold">نوشته های شما</span>
                        <v-spacer></v-spacer>
                        <v-btn color="info" outlined>نوشتن پست جدید</v-btn>
                    </div>

                    <v-tabs class="mt-5" color="grey darken-3" v-model="menu">
                        <v-tab href="#drafts"
                               @click="fetchAllDrafts"
                        >پیش نویس ها
                        </v-tab>
                        <v-tab href="#posts"
                        @click="fetchAllPosts"
                        >مطالب منتشر شده</v-tab>
                    </v-tabs>
                    <v-divider></v-divider>

                    <v-tabs-items v-model="menu">
                        <v-tab-item value="drafts">
                            <div class="my-5" v-for="item in [1,2,3,4,5,6,7]">
                                <p class="title">بدون عنوان</p>
                                <div class="d-flex flex-row">
                                    <span class="body-2 grey--text">آخرین ویرایش: ۲ هفته پیش (۳ کلمه)</span>
                                    <v-spacer></v-spacer>
                                    <v-icon class="info--text text--lighten-1 ml-5">mdi-file-document-edit</v-icon>
                                    <v-icon class="red--text text--lighten-1">mdi-delete</v-icon>
                                </div>
                                <v-divider class="mt-5"></v-divider>
                            </div>

                        </v-tab-item>
                        <v-tab-item value="posts">
                            <p>post</p>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "MyPosts",
        metaInfo: {
            title: 'نوشته های من'
        },

        data() {
            return {
                menu: null
            }
        },
        created() {
            this.fetchAllDrafts();
        },

        methods: {
            fetchAllPosts() {
                axios.get('/api/posts/all-posts');
            },

            fetchAllDrafts() {
                axios.get('/api/posts/all-drafts');
            }
        }

    }
</script>

<style scoped>

</style>
