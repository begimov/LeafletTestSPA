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
        const filteredPoints = _.filter(state.options.points, ['category.data.id', payload]);
        state.points = [ ...filteredPoints ];
    },
    setIsLoading(state, payload) {
        state.isLoading = payload;
    }
}