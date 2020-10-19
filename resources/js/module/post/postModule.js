import {computed, reactive, toRefs} from "@vue/composition-api";
import store from "@/store";

export default function postModule() {
 const data=reactive({
     dialogDeletePost: false,
     deleteablePost: {},
     posts: computed(() => {
         return store.state.post.posts
     }),
     posts_count: computed(() => {
         return store.state.post.posts_count
     }),
 });

    //post delete
    const openDialogPost = (index, slug) => {
        data.dialogDeletePost = true;
        data.deleteablePost = {index, slug};
    };
    const deletePost = () => {
        data.dialogDeletePost = false;
       store.dispatch('post/deletePost', data.deleteablePost);
        data.deleteablePost = {};
    };
    const cancelDeletePost = () => {
        data.dialogDeletePost = false;
        data.deleteablePost = {};
    };
    const fetchAllPosts = () => store.dispatch('post/fetchAllPosts');


 return{
     ...toRefs(data),
     openDialogPost,
     deletePost,
     cancelDeletePost,
     fetchAllPosts,


 }



}
