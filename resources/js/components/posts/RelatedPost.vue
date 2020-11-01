<template>
    <v-img :src="data.image"
           min-height="300px"
           max-height="300px"
           class="d-flex align-end white--text"
    >
        <v-card-title>{{ data.title }}</v-card-title>
        <v-card-actions class="mr-3 mb-3">
            <v-avatar>
                <v-img :src="data.user.profile"></v-img>
            </v-avatar>
            <div class="d-flex flex-column mr-3">
                <span class="body-1">{{ data.user.name }}</span>
                <span class="body-2">3 روز پیش</span>
            </div>
        </v-card-actions>
    </v-img>
</template>

<script>
    export default {
        name: "RelatedPost",

        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
