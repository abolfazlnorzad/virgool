<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="search"
                                  placeholder="متن جستجو"
                                  @change="searchItems"
                    ></v-text-field>
                    <v-divider class="my-7"></v-divider>

                    <v-tabs v-model="activeTab">
                        <v-tab href="#posts" @click.stop="goTo('posts')">پست ها</v-tab>
                        <v-tab href="#categories" @click.stop="goTo('categories')">دسته بندی</v-tab>
                        <v-tab href="#users" @click.stop="goTo('users')">کاربران</v-tab>
                        <v-tab href="#no" style="display: none">چیزی یافت نشد</v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="activeTab">
                        <v-tab-item value="posts" v-if="activeTab ==='posts' &&items.data">
                            <div class="my-12"

                                 v-for="post in items.data"
                                 :key="post.id"
                            >
                                <new-post

                                    :data="post"
                                ></new-post>

                                <v-divider class="my-7"></v-divider>
                            </div>
                            <v-btn
                                v-if="!! items.next_page_url"
                                @click="fetchNextItems">بارگزاری
                            </v-btn>
                            <p class="my-12" v-if="! items.data.length">هیچ نتیجه ای یافت نشد</p>
                        </v-tab-item>
                        <v-tab-item value="categories" v-if="activeTab ==='categories'">

                            <div class="my-10">
                                <v-btn v-for="cate in items"
                                       :key="cate.slug"
                                       class="mx-4"
                                       depressed
                                       :to="{name:'post-category',params:{slug:cate.slug}}"
                                >
                                    {{cate.title}}
                                </v-btn>
                            </div>
                            <p class="my-12" v-if="! items.length">هیچ نتیجه ای یافت نشد</p>

                        </v-tab-item>
                        <v-tab-item value="users" v-if="activeTab ==='users' &&items.data">
                            <template

                                v-for="(user,index) in items.data"
                            >
                                <div
                                    class="d-flex flex-row my-12"
                                    :key="user.id"
                                >
                                    <div>
                                        <router-link
                                            :to="{name:'user-posts',params:{username:user.username}}"
                                        >
                                            <v-avatar>
                                                <v-img
                                                    :src="user.profile_src"></v-img>
                                            </v-avatar>
                                        </router-link>
                                        <router-link
                                            :to="{name:'user-posts',params:{username:user.username}}"
                                        >
                                            <span class="mx-3"> {{user.name}}</span>
                                        </router-link>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div>
                                        <v-btn
                                            color="info"
                                            :outlined="user.is_follows"
                                            @click="follow(index,user.username)"
                                            v-if="$store.state.user.isLoggedIn&&$store.state.user.user.id !=user.id"
                                        >

                                            {{user.is_follows ? 'دنبال میکنید':'دنبال کردن'}}


                                        </v-btn>
                                    </div>

                                </div>
                            </template>
                            <v-btn
                                v-if="!! items.next_page_url"
                                @click="fetchNextItems">بارگزاری
                            </v-btn>
                            <p class="my-12" v-if="! items.data.length">هیچ نتیجه ای یافت نشد</p>

                        </v-tab-item>
                        <v-tab-item value="no">
                            شما هیچ چیزی جستجو نکردید
                        </v-tab-item>
                    </v-tabs-items>


                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import {ref} from '@vue/composition-api';
    import NewPost from "../../components/posts/NewPost";
    import {debounce} from "lodash";

    export default {
        name: "Index",
        components: {NewPost},
        setup(props, {root}) {
            // state
            const search = ref(root.$route.query.q);
            const items = ref({});

            const activeTab = ref(root.$route.params.type);

            const goTo = (type) => {
                root.$router.push({
                    name: 'search',
                    params: {type: type},
                    query: {q: search.value}
                });
            }


            let pageType = root.$route.params.type;
            if (pageType !== 'posts' && pageType !== 'users' && pageType !== 'categories')
                root.$router.push({name: 'not-found'});

            if (search.value == '') {
                activeTab.value = 'no';
            }


            const fetch = () => {
                if (search.value !== '') {
                    activeTab.value = root.$route.params.type;
                    axios.get(`/api/search/${pageType}?q=${search.value}`)
                        .then(({data}) => {
                            items.value = data[pageType];
                        });
                }
            }

            const
                fetchNextItems = () => {
                    axios.get(items.value.next_page_url)
                        .then(({data}) => {
                            items.value.next_page_url = data[pageType].next_page_url
                            items.value.data.push(...data[pageType].data)
                        })
                };

            const searchItems = debounce(function () {
                fetch()
            }, 500);

            const follow = (index, username) => {
                axios.post(`/api/follows/${username}`)
                    .then(res => {
                        items.value.data[index].is_follows = !items.value.data[index].is_follows
                    })
            }

            fetch();
            return {
                follow,
                fetch,
                searchItems,
                fetchNextItems,
                items,
                search,
                activeTab,
                goTo,
            }
        }
    }
</script>

<style scoped>

</style>
