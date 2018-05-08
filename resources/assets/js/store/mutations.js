export default {
    setCategories(state, payload) {
        state.options.categories = payload;
    },
    setPoints(state, payload) {
        state.options.points = payload;
    }
}