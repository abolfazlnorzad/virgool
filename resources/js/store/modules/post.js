export const namespaced = true;

export const state = {
    post: {},
};

export const mutations = {

    setPost(state, data) {
        state.post = data;
    }

};

export const actions = {
    async setPost({commit}, form) {
        let res = await axios.post('/api/post', form)
        commit('setPost', res.data.data)
        return res;
    }
};
