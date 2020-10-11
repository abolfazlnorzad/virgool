export const namespaced = true;

export const state = {
    draft: null,
};
export const mutations = {
    saveDraft(state, data) {
        state.draft = data;
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
                title:response.data.title,
                content:response.data.content
            }
            commit('saveDraft',data);
        }

        return state.draft;
    }

};
