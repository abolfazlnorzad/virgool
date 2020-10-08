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
                        v-model="content"
                        @input="changeDraft"
                    ></tip-tap>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import TipTap from "../../components/TipTap";
    import lodash from 'lodash';

    export default {
        name: "Create",
        components: {TipTap},
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            setContent(event) {
                this.content = event
            },

            changeDraft: lodash.debounce(function(){
                axios.post('/api/posts/create', {
                    title: this.title,
                    content: this.content,
                })
                    .then(({data}) => {
                        history.replaceState({  }, '', data.link)
                    })
            },2000)

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
