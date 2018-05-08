import api from './../../api'

export default {
    updateSelectedPoint({ commit, dispatch }, payload) {
        commit('updateSelectedPoint', payload);
    },
    updateSelectedPointCategory({ commit, dispatch }, payload) {
        commit('updateSelectedPointCategory', payload);
    },
    savePoint({ commit, state }) {
        commit('setIsLoading', true, {root: true});
        commit('setErrors', null);
        commit('setMessage', null);
        api.newpoint.savePoint({
            position: state.selectedPoint,
            category: state.selectedPointCategory
        }).then(res => {
            commit('setMessage', 'Новая точка успешно сохранена');
            commit('setIsLoading', false, {root: true});
        }).catch(err => {
            commit('setErrors', err.response.data.errors);
            commit('setIsLoading', false, {root: true});
        });
    }
}