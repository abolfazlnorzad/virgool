<template>
    <div class="mt-12">

        <v-card class="mx-auto">
            <div class="d-flex flex-row">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img
                            :src="cm.user.profile_src"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{cm.user.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{moment(cm.created_at).fromNow()}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>
                <v-icon class="mx-5" v-if="$store.state.user.isLoggedIn"
                        @click="showReply = true"
                >mdi-undo
                </v-icon>
                <v-icon class="ml-7" v-if="showDeleteIconOrUpdate"
                        @click="deleteComment"
                >mdi-delete
                </v-icon>
                <v-icon class="ml-7" v-if="showDeleteIconOrUpdate"
                        @click="opentTextareaForUpdate"
                >

                    mdi-file-document-edit
                </v-icon>

            </div>
            <v-card-text>
                {{cm.content}}
            </v-card-text>
        </v-card>
        <div v-if="showReply || showUpdate">
            <p>دیدگاه ها</p>
            <template>
                <v-textarea
                    v-model="reply.content"
                    outlined
                    filled
                    label="نظر خود را بنویسید"></v-textarea>

                <div class="d-flex flex-row">
                    <v-spacer></v-spacer>


                    <v-btn
                        color="info"
                        large
                        rounded
                        @click="cancelReply"

                    >لغو
                    </v-btn>

                    <v-btn
                        color="success"
                        large
                        rounded
                        @click="select"

                    >ارسال دیدگاه
                    </v-btn>


                </div>
            </template>
        </div>


        <post-comments
            v-for="comment in data.replies"
            :key="comment.id"
            :data="comment"
            class="mr-4"
        >

        </post-comments>
        <v-snackbar v-model="errors.show"
                    color="error"
        >
            {{errors.msg}}
        </v-snackbar>
    </div>
</template>

<script>
    import moment from 'moment-jalaali';
    import {ref, computed} from "@vue/composition-api";
    import EventBus from '@/Service/EventBus';


    export default {
        name: "PostComments",
        props: ['data'],
        setup(props, {root}) {
            const showReply = ref(false);
            const showUpdate = ref(false);
            const reply = ref({
                content: null,
                comment_id: props.data.id,
            });
            const cm = ref(props.data);

            const updateComment = () => {

                axios.patch(`/api/comments/${cm.value.id}`, reply.value)
                    .then(({data}) => {
                        showUpdate.value = false;
                        reply.value.content = null;
                        cm.value.content = data.data.content;
                    })
                    .catch(() => {
                        errors.value.show = true;
                        errors.value.msg = error.response.data.errors.content[0];
                    })
            }

            const saveReply = () => {
                axios.post(`/api/replies/${root.$route.params.slug}`, reply.value)
                    .then(() => {
                        showReply.value = false;
                        reply.value.content = null;
                    })
                    .catch(error => {
                        errors.value.show = true;
                        errors.value.msg = error.response.data.errors.content[0];
                    })

            };

            const cancelReply = () => {
                showReply.value = false;
                reply.value.content = null;
                showUpdate.value = false;
            };

            const errors = ref({
                show: false,
                msg: '',
            });

            const showDeleteIconOrUpdate = computed(() => {
                return root.$store.state.user.isLoggedIn
                    && root.$store.state.user.user.id == cm.value.user_id;
            });

            const deleteComment = () => {
                axios.delete(`/api/comments/${cm.value.id}`)
            };


            const select = () => {
                return showUpdate.value ? updateComment() : saveReply();
            }

            const opentTextareaForUpdate = () => {
                reply.value.content = cm.value.content;
                showUpdate.value = true
            }

            Echo.channel(`virgool_reply_${cm.value.id}`)
                .listen('.reply.created', ({reply}) => {
                    cm.value.replies.push(reply)
                    EventBus.$emit('comment_created')

                });

            Echo.channel(`virgool_reply_${props.data.id}`)
                .listen('CommentDeletedEvent', ({comment}) => {
                    cm.value.replies = cm.value.replies.filter(c => c.id !== comment.id);
                    EventBus.$emit('comment_deleted');

                })

            return {
                deleteComment,
                showReply,
                moment,
                saveReply,
                reply,
                cancelReply,
                errors,
                showDeleteIconOrUpdate,
                showUpdate,
                select,
                cm,
                opentTextareaForUpdate

            }

        }
    }
</script>

<style scoped>

</style>
