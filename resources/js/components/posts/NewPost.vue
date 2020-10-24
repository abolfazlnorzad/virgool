<template>
    <v-card flat
    >
        <div class="d-flex flex-row">
            <v-list-item>
                <v-list-item-avatar>
                    <router-link :to="{ name: 'user-posts', params: { username: post.user.username } }">
                        <v-img :src="post.user.profile_src"></v-img>
                    </router-link>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link :to="{ name: 'post-show', params: { slug: post.slug } }">
                            {{ post.title }}
                        </router-link>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ moment(post.created_at).fromNow() }} - خواندن {{ post.min_read }} دقیقه</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <span class="grey--text body-2">
                <template v-for="(category, index) in post.categories">
                    {{ category.title }}<template v-if="index != Object.keys(post.categories).length - 1">,</template>
                </template>
            </span>
        </div>

        <router-link :to="{ name: 'post-show', params: { slug: post.slug } }">
            <v-img :src="post.image"
                   height="200px"
                   class="my-5"
            ></v-img>
        </router-link>

        <v-card-text v-html="post.description">
        </v-card-text>

        <v-card-actions class="mt-2">
            <v-icon :class="{ 'red--text': post.is_liked }"
                    @click="likePost"
                    v-if="$store.state.user.isLoggedIn"
            >
                {{ post.is_liked ? 'mdi-heart' : 'mdi-heart-outline' }}
            </v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
            <span class="mr-5">{{ post.likes_count }}</span>
            <v-spacer></v-spacer>
            <v-icon @click="bookmarkPost"
                    v-if="$store.state.user.isLoggedIn"
            >{{ post.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}</v-icon>
        </v-card-actions>
    </v-card>
</template>

<script>
    import moment from 'moment-jalaali';

    moment.loadPersian({
        usePersianDigits: true
    });

    export default {
        name: "NewPost",

        props: {
            data: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                moment,
                post: this.data
            }
        },

        methods: {
            likePost() {
                this.post.is_liked = !this.post.is_liked;
                let reqType = this.post.is_liked ? 'post' : 'delete';
                axios[reqType](`/api/likes/${this.post.slug}`)
                    .then(() => {
                        this.post.is_liked ? this.post.likes_count++ : this.post.likes_count--;
                    })
            },
            bookmarkPost() {
                this.post.is_bookmarked = !this.post.is_bookmarked;
                let reqType = this.post.is_bookmarked ? 'post' : 'delete';
                axios[reqType](`/api/bookmarks/${this.post.slug}`);
            }
        }
    }
</script>

<style scoped>

</style>
