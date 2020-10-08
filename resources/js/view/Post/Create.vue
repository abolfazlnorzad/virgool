<template>
    <v-container>
        <v-row>
            <v-col>
                <v-form class="editor">
                    <v-text-field placeholder="عنوان متن"
                                  v-model="title"
                                  @input="changeDraft"
                    ></v-text-field>
                    <tip-tap
                        ref="tiptap"
                        v-model="content"
                        @input="changeDraft"
                    ></tip-tap>
                </v-form>
            </v-col>
        </v-row>

        <v-snackbar
            v-model="snackbar.saved"
            color="primary"
            timeout="3000"
        >
            پیش نویس شما با موفقیت ذخیره گردید
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

    import TipTap from "../../components/TipTap";
    import {debounce} from 'lodash';

    export default {
        name: "Create",
        components: {TipTap},
        data() {
            return {
                title: '',
                content: '',
                requestType: 'post',
                requestURI: '/api/posts/create',
                snackbar: {
                    saved: false,
                    error: false,
                }

            }
        },
        methods: {
            setContent(event) {
                this.content = event
            },

            changeDraft: debounce(function () {
                axios[this.requestType](this.requestURI, {
                    title: this.title,
                    content: this.content,
                })
                    .then(({data}) => {
                        if (this.requestType === 'post') {
                            history.replaceState({}, '', data.link);
                            this.requestURI = `/api/${data.link}`;
                        }
                        this.requestType === 'patch';
                        this.snackbar.saved = true;
                    })
                .catch(()=>{
                    this.snackbar.error = true;
                })
            }, 2000)

        },

        created() {
            let link = this.$route.params.link
            if (link) {
                this.requestType = 'patch';
                this.requestURI = '/api/drafts/' + link;
                axios.get(`/api/drafts/${link}`)
                    .then(({data}) => {
                        this.title = data.title
                        this.$refs.tiptap.editor.setContent(data.content)

                    })
                    .catch(({response}) => {
                        if (response.status === 404) {
                            this.$router.push({name: 'not-found'})
                        }
                        if (response.status === 403) {
                            this.$router.push({name: 'access-denied'})
                        }
                    })
            }
        }
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
