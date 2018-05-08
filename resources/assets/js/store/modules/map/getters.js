export default {
    points(state, getters, rootState, rootGetters) {
        return rootGetters.points;
    },
    filteredPoints(state, getters, rootState, rootGetters) {
        return rootGetters.filteredPoints;
    },
    categories(state, getters, rootState, rootGetters) {
        return rootGetters.categories;
    },
    selectedPointCategory(state) {
        return state.selectedPointCategory;
    }
}