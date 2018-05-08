import api from './../../api'

export default {
    updateSelectedPoint({ commit, dispatch}, payload) {
        commit('updateSelectedPoint', payload);
    },
    updateSelectedPointCategory({ commit, dispatch}, payload) {
        commit('updateSelectedPointCategory', payload);
    },
    savePoint({ commit, dispatch}, payload) {
        api.newpoint.savePoint().then(res => {
            // commit('setCategories', res.data.data);
        });
    }
}