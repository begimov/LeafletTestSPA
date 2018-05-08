export default {
    updateSelectedPoint(state, payload) {
        state.selectedPoint = payload;
    },
    updateSelectedPointCategory(state, payload) {
        state.selectedPointCategory = payload;
    },
    setMessage(state, payload) {
        state.message = payload;
    },
    setErrors(state, payload) {
        state.errors = payload;
    }
}