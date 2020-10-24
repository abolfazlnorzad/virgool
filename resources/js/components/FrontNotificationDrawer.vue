<template>
    <v-navigation-drawer
        app
        temporary
        :value="value"
        @input="change"
    >
        <v-list>
            <v-list-item v-for="item in items" :key="item.id">
                <v-list-item-content>
                    <a
                        :href="item.data.link"
                        class="pa-3"
                        :class="{ 'grey white--text': !! item.read_at }"
                        @click.prevent="read(item)"
                    >
                        {{ item.data.text }}

                    </a>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "FrontNotificationDrawer",

        props: ['value'],
        methods: {
            change(event) {
                this.$emit('input', event);
            },
            read(notif) {
                axios.patch(`/api/notifications/${notif.id}`)
                    .then(() => {
                        this.$router.push(notif.data.link)
                    })
            }
        },

        data() {
            return {
                items: []
            }
        },

        created() {
            axios.get('/api/notifications')
                .then(({data}) => {
                    this.items = data.data;
                })
        }


    }
</script>

<style scoped>

</style>
