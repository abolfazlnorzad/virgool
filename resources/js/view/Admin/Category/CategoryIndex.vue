<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <BaseDataTable
                        fetch-url="/api/admin/categories"
                        delete-url="/api/admin/categories/destroy"
                        title-text="مدیریت دسته بندی ها"
                        route-name="admin-category-index"
                        item-key="slug"
                        show-route="post-category"
                        create-item-route="admin-category-create"
                        edit-route="admin-category-edit"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import BaseDataTable from '@/components/BaseDataTable';

    export default {
        name: "CategoryIndex",

        components: {
            BaseDataTable
        },

        metaInfo: {
            title: 'مدیریت دسته بندی'
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disabled: false,
                        to: { name: 'admin-dashboard' },
                        exact: true
                    },
                    {
                        text: 'مدیریت دسته بندی ها',
                        disabled: true,
                        exact: true
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
