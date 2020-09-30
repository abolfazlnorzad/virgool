<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col :cols="post.col" v-for="(post, index) in posts" :key="index">
                    <related-post :data="post"></related-post>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <span class="blue--text subtitle">جدیدترین نوشته ها</span>
                    <new-post v-for="item in [1,1,1,1,1,1,1]"></new-post>
                </v-col>
                <v-col cols="4" class="hidden-sm-and-down">
                    <popular-posts></popular-posts>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import RelatedPost from "@/components/posts/RelatedPost";
    import NewPost from "@/components/posts/NewPost";
    import PopularPosts from "@/components/posts/PopularPosts";

    export default {
        name: "Home",

        components: {
            PopularPosts,
            NewPost,
            RelatedPost,
        },

        data() {
            return {
                posts: [
                    {
                        col: 8,
                        image: 'https://files.virgool.io/upload/users/138006/posts/nwjyjkex6h5u/oehgv1p1wus6.jpeg?x-oss-process=image/resize,w_700/crop,h_330,center/quality,q_80',
                        title: '8 مارس، روزی برای بزرگداشت مبارزات جمعی زنان',
                        user: {
                            profile: 'https://files.virgool.io/upload/users/138006/avatar/s05zpH.png?x-oss-process=image/resize,h_90,w_90,center',
                            name: 'دیدبان آزار'
                        }
                    },
                    {
                        col: 4,
                        image: 'https://files.virgool.io/upload/users/92127/posts/bysqyjaqo6nu/osxii9ymuzji.png?x-oss-process=image/resize,w_700/crop,h_330,center/quality,q_80',
                        title: 'رنج‌های کودکی (بخش دوازدهم) ',
                        user: {
                            profile: 'https://files.virgool.io/upload/users/92127/avatar/Cc8JiU.png?x-oss-process=image/resize,h_90,w_90,center',
                            name: 'مجتبی شکوری'
                        }
                    },
                    {
                        col: 4,
                        image: 'https://files.virgool.io/upload/users/5689/posts/barlw2t5m6nt/xxt9vzgomltn.jpeg?x-oss-process=image/resize,w_700/crop,h_330,center/quality,q_80',
                        title: 'تجربه مهاجرت به ایران: موئد از کشمیر، معظم از لبنان',
                        user: {
                            profile: 'https://files.virgool.io/upload/users/5689/avatar/fPK9GC.png?x-oss-process=image/resize,h_90,w_90,center',
                            name: 'حسن شیخ'
                        }
                    },
                    {
                        col: 8,
                        image: 'https://files.virgool.io/upload/users/16966/posts/qdgcvfckel7o/pf7hac7xavvn.jpeg?x-oss-process=image/resize,w_700/crop,h_330,center/quality,q_80',
                        title: 'مگه دیجی کالا تمام بازارو نگرفته؟',
                        user: {
                            profile: 'https://files.virgool.io/upload/users/16966/avatar/zXsFgs.png?x-oss-process=image/resize,h_90,w_90,center',
                            name: 'مهران دهقانی'
                        }
                    }
                ]
            }
        }
    }
</script>

<style>
 .v-toolbar__content {
     padding: 0 !important;
 }
</style>
