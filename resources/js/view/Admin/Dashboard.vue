<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <p class="headline font-weight-bold">داشبورد</p>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <p class="headline mb-10">پست های ویژه صفحه اصلی</p>
                    <v-autocomplete
                        v-model="model"
                        :items="items"
                        :loading="isLoading"
                        :search-input.sync="search"
                        @change="sendPost"
                        color="white"
                        hide-no-data
                        hide-selected
                        item-text="title"
                        item-value="slug"
                        label="اضافه کردن به پست های ویژه"
                        placeholder="جستجو در همه عنوان و محتوای پست ها"
                        return-object
                        outlined
                    ></v-autocomplete>

                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-right">عکس نوشته</th>
                                <th class="text-right">عنوان نوشته</th>
                                <th class="text-right">نویسنده</th>
                                <th class="text-right"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="featurePost in posts" :key="featurePost.post.slug">
                                <td><v-img :src="featurePost.post.image"
                                           max-width="80px"
                                           max-height="80px"
                                           class="my-3"
                                ></v-img></td>
                                <td>{{ featurePost.post.title }}</td>
                                <td>{{ featurePost.post.user.name }}</td>
                                <td>
                                    <v-btn @click="deleteFeaturePost(featurePost.post.slug)">
                                        <v-icon class="red--text">mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Dashboard",

        metaInfo: {
            title: 'داشبورد ادمین'
        },

        data() {
            return {
                search: null,
                model: null,
                isLoading: false,
                items: [],
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disabled: true,
                        to: { name: 'admin-dashboard' },
                        exact: true
                    },
                ],
                posts: []
            }
        },

        watch: {
            search(value) {
                if (value.length <= 0) return;

                if (this.isLoading) return;

                this.isLoading = true;

                axios.get(`/api/admin/feature-posts-search?q=${value}`)
                    .then(({ data }) => {
                        this.items = data.data;
                    })
                    .finally(() => this.isLoading = false);
            }
        },

        created() {
            this.fetchFeaturePosts();
        },

        methods: {
            sendPost(event) {
                axios.post(`/api/admin/feature-post/${event.slug}`)
                    .then(() => {
                        this.fetchFeaturePosts();
                        this.model = null;
                        this.search = null;
                    });
            },
            fetchFeaturePosts() {
                axios.get('/api/admin/feature-posts')
                    .then(({ data }) => {
                        this.posts = data.posts;
                    });
            },
            deleteFeaturePost(slug) {
                axios.delete(`/api/admin/feature-post/${slug}`)
                    .then(() => {
                        this.fetchFeaturePosts();
                    });
            }
        }
    }
</script>

<style scoped>

</style>
