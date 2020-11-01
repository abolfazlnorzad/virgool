export const namespaced = true;

export const state = {
    categories: []
};
export const mutations = {
    getNavCate(state, data) {
        state.categories = data;
    }
};
export const actions = {

    async getNavCate({commit,state}) {
        if (state.categories.length === 0){
        let {data} = await axios.get('/api/category-navbar');
        commit('getNavCate', data.data);
            return;
        }
    }
};
