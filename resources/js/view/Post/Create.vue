
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-form class="editor">
                    <v-text-field placeholder="عنوان متن"
                    ></v-text-field>
                    <tip-tap
                        v-model="content"
                    ></tip-tap>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import TipTap from "../../components/TipTap";

    export default {
        name: "Create",
        components: {TipTap},
        data() {
            return {
                content: ''
            }
        },
        methods:{
            setContent(event){
                this.content=event
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
