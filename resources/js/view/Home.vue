<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12" :md="index ==0 || index==3 ? 8 :4 "
                       v-for="(featurePost,index) in featurePosts"
                       :key="featurePost.post.slug">
                    <related-post :data="featurePost.post"></related-post>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <span class="blue--text subtitle">جدیدترین نوشته ها</span>

                    <template v-for="post in posts.data">
                        <new-post
                            :data="post"
                            :key="post.slug"
                            class="mt-7"
                        ></new-post>
                        <v-divider class="my-7"></v-divider>
                    </template>

                    <div class="d-flex justify-center">
                        <v-btn
                            @click="fetchNewPosts"
                            v-if="posts.next_page_url"
                        >
                            بارگذاری مطالب بیشتر
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="4" class="hidden-sm-and-down">
                    <v-banner sticky
                    >
                        <following-posts></following-posts>
                        <popular-posts></popular-posts>

                    </v-banner>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import RelatedPost from "@/components/posts/RelatedPost";
    import NewPost from "@/components/posts/NewPost";
    import PopularPosts from "@/components/posts/PopularPosts";
    import FollowingPosts from "@/components/posts/FollowingPosts";
    import {ref} from "@vue/composition-api";

    export default {
        name: "Home",
        metaInfo: {
            title: 'صفحه اصلی'
        },
        components: {
            PopularPosts,
            NewPost,
            RelatedPost,
            FollowingPosts,
        },

        setup() {
            const posts = ref({});
            const featurePosts = ref({});

            axios.get('/api/home')
                .then(({data}) => {
                    posts.value = data.posts
                });
            const fetchNewPosts = () => {
                axios.get(posts.value.next_page_url)
                    .then(({data}) => {
                        posts.value.next_page_url = data.next_page_url
                        posts.value.data.push(...data.posts.data)
                    })
            };

            axios.get('/api/feature-posts')
                .then(({data}) => {
                    featurePosts.value = data.data
                })


            return {
                posts,
                featurePosts,
                fetchNewPosts,

            }
        }
    }
</script>

<style>
    .v-toolbar__content {
        padding: 0 !important;
    }
</style>
