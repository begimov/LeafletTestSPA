import api from './api'

export default {
    getCategories({ commit, dispatch}) {
        api.home.getCategories().then(res => {
            commit('setCategories', res.data.data);
        });
    },
}