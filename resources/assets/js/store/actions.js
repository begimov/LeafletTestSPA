import api from './api'

export default {
    getInitialData({ commit, dispatch }) {
        commit('setIsLoading', true);
        api.home.getCategories().then(res => {
            commit('setCategories', res.data.data);

            api.home.getPoints().then(res => {
                commit('setPoints', res.data.data);
                commit('setFilteredPoints', res.data.data);
                commit('setIsLoading', false);
            });
        });
    },
}