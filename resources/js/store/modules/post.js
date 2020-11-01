export const namespaced = true;

export const state = {
    post: {},
    posts: null,
    posts_count: null
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
    },

    deletePost(state, index) {
        state.posts.splice(index, 1);
        state.posts_count--;
    }


};

export const actions = {
    async setPost({commit}, form) {
        let res = await axios.post('/api/post', form)
        commit('setPost', res.data.data)
        return res;
    },

    async fetchAllPosts({commit, state}) {
        if (!state.posts) {
            let {data} = await axios.get('/api/posts/all-posts');
            commit('fetchAllPosts', data.data)
        }
    },

    updatePost({commit}, {title, content, slug}) {
        const data = {title, content};
        commit('setPost', data);
        return axios.patch(`/api/posts/${slug}/edit`, data);
    },
    async editPost({commit}, form) {
        let response = await axios.patch(`/api/posts/${form.slug}`, form);
        commit('setPost', response.data.data);
        return response;
    },

    async deletePost({commit}, {slug, index}) {
        await axios.delete(`/api/posts/${slug}/delete`)
                commit('deletePost', index);

    }


};
