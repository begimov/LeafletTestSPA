export default {
    setCategories(state, payload) {
        state.options.categories = payload;
    },
    setPoints(state, payload) {
        state.options.points = payload;
    },
    setFilteredPoints(state, payload) {
        state.points = payload;
    },
    updateFilteredPoints(state, payload) {
        const points = state.options.points;
        // TODO: filtering points by category id
    }
}