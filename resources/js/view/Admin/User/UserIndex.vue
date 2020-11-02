<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                    <base-data-table
                    fetchUrl="/api/admin/users"
                    deleteUrl="/api/admin/users/destroy"
                    routeName="admin-user-index"
                    titleText="مدیریت کاربران"
                    createItemRoute="admin-user-create"
                    ></base-data-table>

                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>

    import BaseDataTable from "@/components/BaseDataTable";

    export default {
        name: "UserIndex",
        components: {
            BaseDataTable
        },
        metaInfo: {
            title: 'مدیریت کابران'
        },
        data() {
            return {
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
            }
        }

    }
</script>

<style scoped>

</style>
