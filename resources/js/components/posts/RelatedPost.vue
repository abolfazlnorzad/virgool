<template>
    <v-img :src="data.image"
           min-height="300px"
           max-height="300px"
           class="d-flex align-end white--text"
    >
        <v-card-title>

            <router-link
                :to="{name:'post-show',params:{slug:data.slug}}"
            >
                {{ data.title }}
            </router-link>
        </v-card-title>
        <v-card-actions class="mr-3 mb-3">
            <v-avatar>
                <router-link
                    :to="{name:'user-posts',params:{username:data.user.username}}"
                >
                    <v-img :src="data.user.profile_src"></v-img>
                </router-link>
            </v-avatar>
            <div class="d-flex flex-column mr-3">
                <span class="body-1">
                                   <router-link
                                       :to="{name:'user-posts',params:{username:data.user.username}}"
                                   >
                    {{ data.user.name }}
                                   </router-link>
                </span>
                <span class="body-2">{{moment(data.created_at).fromNow()}}</span>
            </div>
        </v-card-actions>
    </v-img>
</template>

<script>
    import moment from 'moment-jalaali';

    export default {
        name: "RelatedPost",

        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                moment
            }
        }
    }
</script>

<style scoped>

</style>
