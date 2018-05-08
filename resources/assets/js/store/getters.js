export default {
    categories(state) {
        return state.options.categories;
    },
    points(state) {
        return state.options.points;
    },
    filteredPoints(state) {
        return state.points;
    },
    isLoading(state) {
        return state.isLoading;
    }
}