<template>
    <v-container>
        <v-row>
            <v-col>
                <v-form class="editor">
                    <v-text-field placeholder="عنوان متن"
                                  v-model="title"
                                  @input="changePost"
                    ></v-text-field>
                    <tip-tap
                        ref="tiptap"
                        v-model="content"
                        @input="changePost"
                    ></tip-tap>
                </v-form>
                <v-btn color="info"
                       v-if="showPostSave"
                       @click.stop="savePost"
                >
                    ویرایش ی پیش نویس
                </v-btn>
            </v-col>
        </v-row>

        <v-snackbar
            v-model="snackbar.saved"
            color="primary"
            timeout="3000"
        >
            پیش نویس شما با موفقیت ویرایش گردید
            <v-btn
                text
                @click.stop="snackbar.saved = false"
            >
                بستن
            </v-btn>
        </v-snackbar>

        <v-snackbar
            v-model="snackbar.error"
            color="error"
            timeout="0"
        >
            پیش نویس شما با موفقیت ایجاد نشد
            <v-btn
                text
                @click.stop="snackbar.error = false"

            >
                بستن
            </v-btn>
        </v-snackbar>

    </v-container>
</template>

<script>

    import {ref, reactive, computed} from '@vue/composition-api';
    import TipTap from "../../components/TipTap";
    import {debounce} from 'lodash';

    export default {
        name: "Edit",
        components: {TipTap},
        setup(props, {root, refs}) {
            const title = ref('');
            const content = ref('');
            const snackbar = reactive({
                saved: false,
                error: false,
            });

            axios.get(`/api/posts/${root.$route.params.slug}/edit`)
                .then(({data}) => {
                    title.value = data.title;
                    content.value = data.content;
                    refs.tiptap.editor.setContent(data.content)
                })
                .catch(({response}) => {
                    if (response.status === 404) {
                        root.$router.push({name: 'not-found'})
                    }
                    if (response.status === 403) {
                        root.$router.push({name: 'access-denied'})
                    }
                })

            const setContent = (event) => {
                content.value = event
            };

            const changePost = debounce(function () {
                savePostUpdate()
                    .then(() => {
                        snackbar.saved = true;
                    })
                    .catch(() => {
                        snackbar.error = true;
                    })
            }, 2000);


            const savePostUpdate = () => {
                return root.$store.dispatch('post/updatePost', {
                    title: title.value,
                    content: content.value,
                    slug: root.$route.params.slug
                });
            };


            const savePost = () => {
                changePost.cancel();
                savePostUpdate()
                    .then(({data}) => {
                        const slug = data.slug ? data.slug : `/posts/${root.$route.params.slug}`;
                        root.$router.push(`${slug}/update`);
                    })
            }


            const showPostSave = computed(() => {
                return title.value && content.value;
            });


            return {
                savePost,
                showPostSave,
                title,
                content,
                snackbar,
                changePost,
                setContent
            }
        },


    }
</script>

<style lang="scss">
    .editor {
        position: relative;

        &__floating-menu {
            position: absolute;
            z-index: 1;
            margin-top: -0.25rem;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.2s, visibility 0.2s;

            &.is-active {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    .editor p.is-editor-empty:first-child::before {
        content: attr(data-empty-text);
        float: right;
        color: #aaa;
        pointer-events: none;
        height: 0;
        font-style: italic;
    }
</style>
