export const namespaced = true;

export const state = {
    draft: null,
    drafts: null,
    drafts_count: null,
};
export const mutations = {
    saveDraft(state, data) {
        state.draft = data;
    },

    fetchAllDrafts(state, data) {
        state.drafts = data;
    },

    countAllDrafts(state, data) {
        state.drafts_count = data;
    },
    deleteDraft(state, index) {
        state.drafts.splice(index, 1);
        state.drafts_count--;
    }

};
export const actions = {

    async saveDraft({commit}, {requestType, requestURI, title, content}) {
        await axios.get('/sanctum/csrf-cookie');
        const data = {title, content};
        commit('saveDraft', data)
        return axios[requestType](requestURI, data)

    },

    async getDraft({commit, state}, link) {
        if (state.draft == null) {
            let response = await axios.get(`/api/drafts/${link}`)
            const data = {
                title: response.data.title,
                content: response.data.content
            }
            commit('saveDraft', data);
        }

        return state.draft;
    },

    async fetchAllDrafts({commit, state}) {
        if (!state.drafts) {
            let {data} = await axios.get('/api/posts/all-drafts');
            commit('fetchAllDrafts', data.data)
            commit('countAllDrafts', data.drafts_count)
            commit('post/countAllPosts', data.posts_count, {root: true})
        }
    },

    deleteDraft({commit}, {index, link}) {
        axios.delete(`/api/drafts/${link}/delete`)
            .then(() => {
                commit('deleteDraft', index)
            })
    }


}

