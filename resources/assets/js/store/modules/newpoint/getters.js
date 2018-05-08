export default {
    selectedPoint(state) {
        return state.selectedPoint;
    },
    categories(state, getters, rootState, rootGetters) {
        return rootGetters.categories;
    },
    selectedPointCategory(state) {
        return state.selectedPointCategory;
    },
    errors(state) {
        return state.errors;
    }
}