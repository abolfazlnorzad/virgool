<template>

        <v-list>
            <v-subheader class="subtitle font-weight-bold">محبوب‌ترین‌های وب اموز </v-subheader>
            <v-list-item-group>
                <v-list-item v-for="item in [1,1,1,1,1]">
                    <v-list-item-icon>
                        <v-avatar size="35">
                            <v-img src="https://files.virgool.io/upload/users/135361/avatar/2BiVCP.png?x-oss-process=image/resize,h_90,w_90,center"
                            ></v-img>
                        </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>
                                            <span class="caption d-inline-block text-truncate"
                                                  style="max-width: 240px"
                                            >
                                                تحلیلی بر گزارش فصل پاییز کافه بازار( قسمت اول )
                                            </span>
                        <span class="grey--text overline">mohamad.zehtabi</span>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
</template>

<script>
    export default {
        name: "PopularPosts"
    }
</script>

<style scoped>

</style>
