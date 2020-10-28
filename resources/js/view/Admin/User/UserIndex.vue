<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <p class="headline font-weight-bold">مدیریت کاربران</p>
                    <div class="d-flex flex-row">
                        <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                        <v-spacer></v-spacer>
                        <v-text-field
                            outlined
                            label="جستجو کاربران"
                            v-model="search"
                            @keyup="searchItems"
                        ></v-text-field>
                    </div>

                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="users.data"
                        :server-items-length="total"
                        @update:options="fetchUsers"
                        :loading="loading"
                        loading-text="دریافت اطلاعات..."
                        :footer-props="footerProps"
                        :options.sync="options"
                        :single-select="singleSelect"
                        item-key="name"
                        show-select
                        class="elevation-1"
                    >

                        <template v-slot:item.created_at="{item}">
                            {{moment(item.created_at).format('jYY-jM-jD')}}
                        </template>

                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import moment from "moment-jalaali";
    import {debounce} from "lodash";

    export default {
        name: "UserIndex",

        metaInfo: {
            title: 'مدیریت کابران'
        },

        data() {
            return {
                moment,
                search: this.$route.query.search,
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disable: false,
                        to: {name: 'admin-dashboard'}
                    },
                    {
                        text: 'مدیریت کاربران',
                        disable: true,
                    },
                ],
                singleSelect: false,
                selected: [],
                headers: [],
                users: [],
                total: null,
                loading: false,
                footerProps: {
                    'items-per-page-options': [5, 10, 25, 50]
                },
                options: {
                    page: this.$route.query.page ?? 1,
                    itemsPerPage: this.$route.query.per_page ?? 10,
                    sortBy: this.$route.query.sort_by ? [this.$route.query.sort_by] : ['id'],
                    sortDesc: this.$route.query.sort_type === 'desc' ? [true] : [false]
                }
            }
        },

        created() {
            this.fetchUsers(this.options);
        },

        methods: {
            fetchUsers(options) {
                const params = {
                    page: options.page,
                    per_page: options.itemsPerPage,
                    sort_by: options.sortBy[0],
                    sort_type: options.sortDesc[0] === true ? 'desc' : 'asc',
                    search:this.search
                };

                this.$router.push({name: 'admin-user-index', query: params}, () => {
                });

                this.loading = true;
                axios.get('/api/admin/users', {params})
                    .then(({data}) => {
                        this.headers = data.headers;
                        this.users = data.users;
                        this.total = data.users.total;
                        this.options.page = data.users.current_page;
                        this.options.itemsPerPage = Number(data.users.per_page);
                    }).finally(() => this.loading = false);
            },
            searchItems:debounce(function (){
                this.fetchUsers(this.options);
            },500) ,

        }
    }
</script>

<style scoped>

</style>
