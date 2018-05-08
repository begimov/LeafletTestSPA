import api from './../../api'

export default {
    updateSelectedPoint({ commit, dispatch }, payload) {
        commit('updateSelectedPoint', payload);
    },
    updateSelectedPointCategory({ commit, dispatch }, payload) {
        commit('updateSelectedPointCategory', payload);
    },
    savePoint({ commit, state }) {
        api.newpoint.savePoint({
            position: state.selectedPoint,
            category: state.selectedPointCategory
        }).then(res => {
            // commit('setCategories', res.data.data);
        });
    }
}