<template>

    <v-list
        v-if="posts.length"
    >
        <v-subheader class="subtitle font-weight-bold">محبوب‌ترین‌های وب اموز</v-subheader>
        <v-list-item-group>
            <v-list-item
                v-for="post in posts"
                :key="post.id"
                :to="{name:'post-show',params:{slug:post.slug}}"
            >


                <v-list-item-icon>
                    <v-avatar size="35">
                        <v-img
                            :src="post.user.profile_src"
                        ></v-img>
                    </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                                            <span class="caption d-inline-block text-truncate"
                                                  style="max-width: 240px"
                                            >
                                                {{post.title}}
                                            </span>
                    <span class="grey--text overline">{{post.user.name}}</span>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    import {ref} from "@vue/composition-api";

    export default {
        name: "PopularPosts",
        setup() {
            const posts = ref({});
            axios.get('/api/trending-posts')
                .then(({data}) => {
                    posts.value = data.posts
                });

            return {
                posts
            }
        }

    }
</script>

<style scoped>

</style>
