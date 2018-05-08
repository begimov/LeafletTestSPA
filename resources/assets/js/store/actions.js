import api from './api'

export default {
    getInitialData({ commit, dispatch}) {
        api.home.getCategories().then(res => {
            commit('setCategories', res.data.data);

            api.home.getPoints().then(res => {
                commit('setPoints', res.data.data);
            });
        });
    },
}