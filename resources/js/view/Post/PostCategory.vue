<template>
    <v-content>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="8" class="d-flex">
                    <div>
                        <p>نوشته های مربوط به دسته بندی</p>
                        <p class="title">{{ category.title }}</p>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <p>تعداد نوشته های مربوطه: {{ category.posts_count }}</p>
                        <p></p>
                    </div>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col cols="8">
                    <new-post v-for="post in posts.data"
                              :data="post"
                              :key="post.id"
                              class="mt-10"
                    ></new-post>
                    <v-btn class="mt-12 mx-auto"
                           v-if="!!posts.next_page_url"
                           @click="fetchNextPost"
                    >
                        بارگذاری مطالب بیشتر
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import NewPost from "../../components/posts/NewPost";
    import {ref} from "@vue/composition-api";


    export default {
        name: "PostCategory",
        components: {
            NewPost
        },

        metaInfo() {
            return {
                title: this.category.title
            }
        },

        setup(props, {root}) {
            const posts = ref({});
            const category = ref({});
            axios.get(`/api/posts/category/${root.$route.params.slug}`)
                .then(({data}) => {
                    posts.value = data.posts;
                    category.value = data.category;
                });

            const fetchNextPost=()=>{
                axios.get(posts.value.next_page_url)
                    .then(({data}) => {
                        posts.value.data.push(...data.posts.data);
                        posts.value.next_page_url = data.posts.next_page_url;
                    })
            }

            return {
                posts,
                category,
                fetchNextPost
            }
        },




    }
</script>

<style scoped>

</style>
