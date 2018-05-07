import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.component('leaflet-map', require('./../components/map/Map.vue'));
Vue.component('new-point', require('./../components/map/NewPoint.vue'));

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', name: 'leaflet-map', component: Vue.component('leaflet-map') },
        { path: '/points/create', name: 'new-point', component: Vue.component('new-point') },
    ]
})