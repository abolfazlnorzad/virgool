export const namespaced = true;

export const state = {
    post: {},
    posts: null,
    posts_count:null
};

export const mutations = {

    setPost(state, data) {
        state.post = data;
    },


    fetchAllPosts(state, data) {
        state.posts = data;
    },

    countAllPosts(state, data) {
        state.posts_count = data;
    }


};

export const actions = {
    async setPost({commit}, form) {
        let res = await axios.post('/api/post', form)
        commit('setPost', res.data.data)
        return res;
    },

    async fetchAllPosts({commit,state}) {
       if(! state.posts){
           let {data} = await axios.get('/api/posts/all-posts');
           commit('fetchAllPosts', data.data)
       }

    }
};
