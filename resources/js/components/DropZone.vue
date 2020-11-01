<template>
    <v-dialog

        v-model="imageModal"
              max-width="360px"
    >
        <v-card>
            <v-card-title>عکس خود را اپلود کنین</v-card-title>
            <vue-dropzone
                ref="dropzone"
                id="dropzone"
                :options="dropzoneOptions"
                @vdropzone-success="upload"
            ></vue-dropzone>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="imageModal = false"
                >
                    بستن
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {ref} from '@vue/composition-api';
    import vueDropzone from 'vue2-dropzone';
    import 'vue2-dropzone/dist/vue2Dropzone.min.css';

    export default {
        name: "DropZone",
        components: {
            vueDropzone,
        },
        setup(props,{emit}) {
            const dropzoneOptions = ref({
                url: '/api/upload-post-image',
                maxFile: 1,
                headers: {
                    'X-CSRF-TOKEN': window.csrf_token
                }
            });
            const imageModal = ref(false);
            const dropzone = ref(null);
            const imageCommand = ref(false);

            function showModal(image) {
                imageModal.value = true;
                imageCommand.value = image;
            }
            function upload(file, response) {
                const data = {
                    imageCommand: imageCommand.value,
                    attrs: {
                        src: response.data
                    }
                }
                emit('image', data);
                imageModal.value = false;
                imageCommand.value = null;
                dropzone.value.removeFile(file);
            }


            return {
                dropzoneOptions,
                imageModal,
                imageCommand,
                showModal,
                upload,
                dropzone
            }
        },


    }
</script>

<style scoped>

</style>
