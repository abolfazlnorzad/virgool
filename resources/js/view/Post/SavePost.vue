<template>
    <v-container>
        <v-row>
            <v-col col="12" md="6">
                <p>عکس خود را آپلود کنید</p>
                <input type="file"
                       @change="UploadImage"
                >
                <v-img
                    v-if="form.image"
                    :src="form.image"
                    class="mt-7"
                    width="300px"
                    height="300px"
                ></v-img>
                <p> {{form.title}} </p>
                <v-textarea
                    v-model="form.description"
                    placeholder="توضیحات را بنویسید"
                ></v-textarea>
            </v-col>
            <v-col col="12" md="6">
                <p>دسته بندی پستتان را وارد کنید</p>
                <v-combobox
                    v-model="form.categories"
                    placeholder="دسته بندی ها"
                    multiple
                    chips
                    append-icon=""
                    hint="شما حداکثر 5 دسته بندی میتوانید انتخاب کنید"
                    persistent-hint
                >
                </v-combobox>
                <div class="d-flex flex-row">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="info"
                        class="mt-7"
                        @click="savePost"
                    >
                        ذخیره نوشته
                    </v-btn>
                </div>

            </v-col>
        </v-row>
        <v-snackbar
        color="error"
        :timeout="0"
        v-model="error.show"
        v-for="(error,index) in errors"
        :key="index"
        >
            {{error.text}}

            <v-btn @click="error.show=false" text >X</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import {ref, reactive, watch} from '@vue/composition-api';
    import Upload64 from "../../module/file/Upload64";

    export default {
        name: "SavePost",
        setup(props, {root}) {

            const form = reactive({
                image: null,
                image_name: null,
                title: null,
                content: null,
                description: null,
                categories: [],
            });
            root.$store.dispatch('draft/getDraft', root.$route.params.link)
                .then((data) => {
                    form.title = data.title
                    form.content = data.content
                })


            const UploadImage = (event) => {

                form.image_name = event.target.files[0].name;
                form.image = Upload64(event);

            };
            watch(
                () => form.categories,
                (value) => {
                    if (value.length > 5) {
                        form.categories.pop();
                    }
                }
            );
            const errors = ref([]);
            const savePost = () => {
                axios.post('/api/post', form)
                    .catch(({response}) => {
                        Object.values(response.data.errors).forEach(e => {
                            errors.value.push({
                                text:e[0],
                                show:true
                            })
                        })
                    })
            };


            return {
                UploadImage,
                form,
                savePost,
                errors
            }
        }


    }
</script>

<style scoped>

</style>
