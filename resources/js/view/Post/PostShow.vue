<template>
    <v-content v-if="post.user">
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <v-list-item>
                        <v-list-item-avatar size="80">
                            <v-avatar size="80">
                                <v-img
                                    :src="post.user.profile_src"
                                ></v-img>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-bold">
                                {{post.user.name}}
                                <v-btn color="grey"
                                       rounded
                                       dark
                                       small
                                       class="darken-2 px-5 mr-3 mb-3"
                                >دنبال کنید
                                </v-btn>
                            </v-list-item-title>
                            <v-list-item-subtitle class="body-2 grey--text">
                                {{post.user.bio}}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="caption grey--text">
                                {{moment(post.created_at).fromNow()}} / خواندن {{post.min_read}} دقیقه
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <div class="my-10">
                        <h1 class="title">{{post.title}} </h1>
                    </div>

                    <div>
                        <v-img
                            :src="post.image"
                        ></v-img>
                    </div>

                    <div class="mt-12" v-html="post.content">

                    </div>

                    <div class="my-10">
                        <v-btn depressed
                               v-for="cate in post.categories"
                               :key="cate.slug"

                               class="mr-5 "
                        >

                            {{cate.title}}

                        </v-btn>

                    </div>

                    <div class="d-flex flex-row mb-5">
                        <span class="ml-5">
                            <v-icon>mdi-bookmark-outline</v-icon>
                        </span>
                        <span class="ml-5">
                            <v-icon>mdi-heart-outline</v-icon>
                            0
                        </span>
                        <span class="ml-5">
                            <v-icon>mdi-comment-outline</v-icon>
                            2
                        </span>
                        <v-spacer></v-spacer>
                        <v-icon>mdi-telegram</v-icon>
                        <v-btn outlined
                               rounded
                               class="mr-3"
                        >aaaaaaaaafio
                        </v-btn>
                    </div>

                    <v-divider></v-divider>

                    <div class="mt-12">
                        <p class="body-2 font-weight-bold">شاید از این نوشته‌ها هم خوشتان بیاید</p>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" md="4" v-for="post in related_post">
                                    <v-card>
                                        <v-img
                                            :src="post.image"
                                        ></v-img>
                                        <v-card-title>
                                            {{post.title}}
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-list-item>
                                                <v-list-item-avatar>
                                                    <v-avatar>
                                                        <v-img
                                                            :src="post.user.profile_src"
                                                        ></v-img>
                                                    </v-avatar>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title class="body-2 font-weight-bold">
                                                        {{post.user.name}}
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle class="caption grey--text">
                                                        ‌‌‌‌خواندن
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-spacer></v-spacer>

                                            <v-icon>mdi-bookmark-outline</v-icon>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>

                    <div>
                        <p>پاسخ ها</p>
                        <v-text-field label="نظر خود را بنویسید"></v-text-field>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import {ref} from "@vue/composition-api";
    import moment from "moment-jalaali";

    moment.loadPersian({
        usePersianDigits: true
    });

    export default {
        name: "PostShow",
        metaInfo() {
            return {
                title: this.post.title,
                meta: [
                    {name: 'description', content: this.post.description},
                ]
            }
        },

        setup(props, {root}) {
            const post = ref({});
            const related_post = ref({});

            axios.get(`/api/posts/${root.$route.params.slug}`)
                .then(({data}) => {
                    post.value = data.post,
                        related_post.value = data.related_post
                });


            return {
                post,
                related_post,
                moment
            }
        }


    }
</script>

<style scoped>
    .body-text {
        text-align: justify;
        line-height: 2.3rem;
    }
</style>
