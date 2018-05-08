export default {
    updateSelectedPoint(state, payload) {
        state.selectedPoint = payload;
    },
    updateSelectedPointCategory(state, payload) {
        state.selectedPointCategory = payload;
    },
    setErrors(state, payload) {
        state.errors = payload;
    }
}