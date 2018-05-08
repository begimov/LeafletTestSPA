export default {
    updateSelectedPointCategory({ commit, dispatch}, payload) {
        commit('updateSelectedPointCategory', payload);
        commit('updateFilteredPoints', payload, { root: true });
    }
}