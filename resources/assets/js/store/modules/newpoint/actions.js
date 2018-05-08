import api from './../../api'

export default {
    updateSelectedPoint({ commit, dispatch }, payload) {
        commit('updateSelectedPoint', payload);
    },
    updateSelectedPointCategory({ commit, dispatch }, payload) {
        commit('updateSelectedPointCategory', payload);
    },
    savePoint({ commit, state }) {
        commit('setErrors', null);
        commit('setMessage', null);
        api.newpoint.savePoint({
            position: state.selectedPoint,
            category: state.selectedPointCategory
        }).then(res => {
            commit('setMessage', 'Новая точка успешно сохранена');
        }).catch(err => {
            commit('setErrors', err.response.data.errors);
        });
    }
}