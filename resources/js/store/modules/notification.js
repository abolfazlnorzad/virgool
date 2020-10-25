export const namespaced = true;

export const state = {
    notifications: []
};
export const mutations = {
    getnotifications(state, data) {
        state.notifications = data;
    }
};
export const actions = {

    async getnotifications({commit,state}) {
        if (state.notifications.length === 0){
            let {data} = await axios.get('/api/notifications');
            commit('getnotifications', data.data);
            return;
        }
    }
};
