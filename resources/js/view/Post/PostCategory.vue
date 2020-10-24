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
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
  import NewPost from "../../components/posts/NewPost";


    export default {
        name: "PostCategory",
        components: {
            NewPost
        },

        metaInfo(){
          return{
              title:this.category.title
          }
        },

        data() {
            return {
                posts: {},
                category: {},
            }
        },

        created() {
            axios.get(`/api/posts/category/${this.$route.params.slug}`)
                .then(({ data }) => {
                    this.posts = data.posts;
                    this.category = data.category;
                })
        }
    }
</script>

<style scoped>

</style>
