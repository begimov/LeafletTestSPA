export default {
    updateSelectedPoint({ commit, dispatch}, payload) {
        commit('updateSelectedPoint', payload);
    },
    updateSelectedPointCategory({ commit, dispatch}, payload) {
        commit('updateSelectedPointCategory', payload);
    }
}