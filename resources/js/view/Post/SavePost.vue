<template>
    <p>{{draft}}</p>
</template>

<script>
    export default {
        name: "SavePost",
        data() {
            return {
                draft: {},
            }
        },
       async created() {
            this.draft = await this.$store.dispatch('draft/getDraft', this.$route.params.link)
        }
    }
</script>

<style scoped>

</style>
