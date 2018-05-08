import api from './api'

export default {
    getCategories({ commit, dispatch}) {
        api.home.getCategories().then(res => {
            console.log(res);
        });
    },
}