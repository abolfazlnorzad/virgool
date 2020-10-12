<template>
    <v-container>
        <v-row>
            <v-col col="12" md="6">
                <p>عکس خود را آپلود کنید</p>
                <input type="file"
                       @change="UploadImage"
                >
                <v-img
                    v-if="form.img"
                    :src="form.img"
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
    </v-container>
</template>

<script>
    import {reactive, watch} from '@vue/composition-api';
    import Upload64 from "../../module/file/Upload64";

    export default {
        name: "SavePost",
        setup(props, {root}) {

            const form = reactive({
                img: null,
                img_name: null,
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

                form.img_name = event.target.files[0].name;
                form.img = Upload64(event);

            };
            watch(
                () => form.categories,
                (value) => {
                    if (value.length > 5) {
                        form.categories.pop();
                    }
                }
            );

            const savePost=()=>{
                axios.post('/api/post',form)
            };


            return {
                UploadImage,
                form,
                savePost,

            }
        }


    }
</script>

<style scoped>

</style>
