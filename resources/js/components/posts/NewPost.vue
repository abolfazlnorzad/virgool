<template>
    <v-card flat
            class="mt-7"
    >
        <div class="d-flex flex-row">
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://files.virgool.io/upload/users/140624/avatar/e1doRu.png?x-oss-process=image/resize,h_90,w_90,center"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Stopcorona | استاپ کرونا</v-list-item-title>
                    <v-list-item-subtitle>۵ دقیقه پیش - خواندن ۲ دقیقه</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <span class="grey--text body-2">غذا</span>
        </div>

        <v-img src="https://files.virgool.io/upload/users/140624/posts/grri9gted9sx/gkquzhysyhic.jpeg?x-oss-process=image/resize,w_700/crop,h_250,g_center/quality,q_80"
               height="200px"
               class="my-5"
        ></v-img>

        <v-card-text>
            جهت کاهش اضطراب، در کنار انجام ورزش و مدیتیشن، حفظ یک رژیم غذایی سالم...
        </v-card-text>

        <v-card-actions class="mt-2">
            <v-icon>mdi-heart-outline</v-icon>
            <span class="mr-5">0</span>
            <v-spacer></v-spacer>
            <v-icon>mdi-bookmark-outline</v-icon>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "NewPost"
    }
</script>

<style scoped>

</style>
