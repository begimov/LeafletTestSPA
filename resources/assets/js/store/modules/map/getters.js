export default {
    points(state, getters, rootState, rootGetters) {
        return rootGetters.points;
    },
    filteredPoints(state, getters, rootState, rootGetters) {
        return rootGetters.filteredPoints;
    }
}