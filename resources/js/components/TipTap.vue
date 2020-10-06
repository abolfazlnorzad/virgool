<template>
    <div>

        <editor-floating-menu :editor="editor"
                              v-slot="{ commands, menu, isActive }"
        >
            <div class="editor__floating-menu"
                 :class="{ 'is-active': menu.isActive }"
                 :style="`top: ${menu.top}px`"
            >
                <v-tooltip top v-for="button in floatingMenuButtons" :key="button.icon">
                    <template v-slot:activator="{ on }">
                        <v-btn class="menubar__button"
                               :class="{ 'is-active': isActive[button.active](button.context) }"
                               @click="commands[button.command](button.context)"
                               small
                               text
                               v-on="on"
                        >
                            <v-icon>mdi-{{ button.icon }}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{ button.tooltip }}</span>
                </v-tooltip>
            </div>
        </editor-floating-menu>
        <editor-menu-bubble :editor="editor"
                            v-slot="{ commands, menu, isActive }"
                            :keep-in-bounds="true"
        >
            <div class="menububble"
                 :class="{ 'is-active': menu.isActive }"
                 :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
            >
                <v-btn class="menububble__button"
                       :class="{ 'is-active': isActive[button.active](button.context) }"
                       @click="commands[button.command](button.context)"
                       small
                       text
                       dark
                       v-for="button in bubbleMenuButtons"
                       :key="button.icon"
                >
                    <v-icon>mdi-{{ button.icon }}</v-icon>
                </v-btn>
            </div>
        </editor-menu-bubble>
        <editor-content :editor="editor">
        </editor-content>
    </div>
</template>
<script>
    import {Editor, EditorContent, EditorFloatingMenu, EditorMenuBubble} from "tiptap";
    import { Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Image,
        Italic,
        Link,
        Strike,
        Underline,
        History,
        Placeholder } from "tiptap-extensions";

    export default {
        name: "TipTap",
        components: {
            EditorFloatingMenu,
            EditorContent,
            EditorMenuBubble
        },
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

                bubbleMenuButtons: [
                    {
                        active: 'italic',
                        command: 'italic',
                        icon: 'format-italic',
                        tooltip: 'ایتالیک',
                        context: {}
                    },
                    {
                        active: 'bold',
                        command: 'bold',
                        icon: 'format-bold',
                        tooltip: 'درشت',
                        context: {}
                    },
                ],
                floatingMenuButtons: [
                    {
                        active: 'heading',
                        command: 'heading',
                        icon: 'format-header-1',
                        tooltip: 'هدر 1',
                        context: {level: 1}
                    },
                    {
                        active: 'heading',
                        command: 'heading',
                        icon: 'format-header-2',
                        tooltip: 'هدر 2',
                        context: {level: 2}
                    },
                    {
                        active: 'heading',
                        command: 'heading',
                        icon: 'format-header-3',
                        tooltip: 'هدر 3',
                        context: {level: 3}
                    },
                ],
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new CodeBlock(),
                        new HardBreak(),
                        new HorizontalRule(),
                        new OrderedList(),
                        new BulletList(),
                        new ListItem(),
                        new TodoItem(),
                        new TodoList(),
                        new Bold(),
                        new Code(),
                        new Image(),
                        new Italic(),
                        new Link(),
                        new Strike(),
                        new Underline(),
                        new History(),
                        new Heading({ level: [1, 2, 3] }),
                        new Placeholder({
                            emptyEditorClass: 'is-editor-empty',
                            emptyNodeClass: 'is-empty',
                            emptyNodeText: 'هرچیزی که میخای بنویس ...',
                            showOnlyWhenEditable: true,
                            showOnlyCurrent: true,
                        })
                    ],
                    content: this.value,
                    onUpdate: ({getHTML}) => {
                        this.$emit('input', getHTML());
                    }
                })
            }
        },
        beforeDestroy() {
            this.editor.destroy();
        }
    }
</script>

<style scoped>

</style>
