<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="search"
                                  placeholder="متن جستجو"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import { ref } from '@vue/composition-api';

    export default {
        name: "Index",

        setup(props, { root }) {
            // state
            const search = ref(root.$route.query.q)

            return {
                search
            }
        }
    }
</script>

<style scoped>

</style>
