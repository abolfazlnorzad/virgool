<template>


    <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items.data"
        :server-items-length="total"
        @update:options="updateOption"
        :loading="loading"
        loading-text="دریافت اطلاعات..."
        :footer-props="footerProps"
        :options.sync="options"
        :single-select="singleSelect"
        item-key="itemKey"
        show-select
        class="elevation-1"
    >
        <template v-slot:top>
            <div class="d-flex  pa-10 flex-row">
                <p class="headline font-weight-bold">{{titleText}}</p>
                <v-spacer></v-spacer>
                <v-text-field
                    label="جستجو کاربران"
                    v-model="search"
                    @keyup="searchItems"
                ></v-text-field>

                <v-btn
                    v-if="createItemRoute"
                    :to="{name:createItemRoute}"
                    color="info"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>

                <v-btn
                    @click="deleteItem"
                    :disabled="! selected.length"
                    class="mx-3"

                >
                    <v-icon color="error">mdi-delete</v-icon>
                </v-btn>
            </div>
        </template>

        <template v-slot:item.created_at="{item}">
            {{moment(item.created_at).format('jYY-jM-jD')}}
        </template>

        <template
            v-slot:item.actions="{item}"
        >
            <v-btn
                small
                color="info"
                v-if="editRoute"
                :to="{name:editRoute,params:{id:item.id}}"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>

    </v-data-table>
</template>

<script>
    import moment from "moment-jalaali";
    import {debounce} from "lodash";

    export default {
        name: "BaseDataTable",

        props: {
            editRoute: {
                type: String,
                required: false,
            },
            createItemRoute: {
                type: String,
                required: false,
            },
            fetchUrl: {
                type: String,
                required: true,
            },
            deleteUrl: {
                type: String,
                required: true,
            },
            routeName: {
                type: String,
                required: true,
            },
            titleText: {
                type: String,
                required: true,
            },
            itemKey: {
                type: String,
                default: 'id',
            }
        },
        data() {
            return {
                moment,
                search: this.$route.query.search,

                singleSelect: false,
                selected: [],
                headers: [],
                items: [],
                total: null,
                loading: false,
                footerProps: {
                    'items-per-page-options': [5, 10, 25, 50]
                },
                options: {
                    page: this.$route.query.page ?? 1,
                    itemsPerPage: this.$route.query.per_page ?? 10,
                    sortBy: this.$route.query.sort_by ? [this.$route.query.sort_by] : ['id'],
                    sortDesc: this.$route.query.sort_type === 'desc' ? [true] : [false],
                    groupBy: [],
                    groupDesc: [],
                    multiSort: false,
                    mustSort: false,
                }
            }
        },

        created() {
            this.fetchSearch();
        },
        computed: {
            selectedIds() {
                return this.selected.map((item) => {
                    return item.id
                })
            }
        },

        methods: {
            updateOption(options) {
                const params = this.paramsMethod(options);
                this.$router.push({name: this.routeName, query: params}, () => {
                });


            },
            fetchSearch() {
                this.loading = true;
                const params = this.paramsMethod(this.options);
                axios.get(this.fetchUrl, {params})
                    .then(({data}) => {
                        this.headers = data.headers;
                        this.items = data.items;
                        this.total = data.items.total;
                        this.options.page = data.items.current_page;
                        this.options.itemsPerPage = Number(data.items.per_page);
                    }).finally(() => this.loading = false);
            },
            searchItems: debounce(function () {
                this.options.page = 1;
                this.updateOption(this.options);
            }, 500),

            paramsMethod(options) {
                return {
                    page: options.page,
                    per_page: options.itemsPerPage,
                    sort_by: options.sortBy[0],
                    sort_type: options.sortDesc[0] === true ? 'desc' : 'asc',
                    search: this.search
                };
            },
            deleteItem() {
                axios.post(this.deleteUrl, {items: this.selectedIds})
                    .then(() => {
                        this.items.data = this.items.data.filter((item) => {
                            return !this.selected.includes(item)
                        });
                        this.selected = [];
                    })

            }


        }
    }
</script>

<style scoped>

</style>
