<template>
    <div class="container">
        <div class="row mt-4 mb-3">
            <div class="col">
                <div v-bind:class="{ 'isActive': isLoading, 'loader': true, 'loader-def': true }"></div>
                {{isLoading ?  'AAA' : ''}}
                <h1 class="text-secondary">Тестовое задание</h1>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'leaflet-map'}" class="nav-link">Карта</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'new-point'}" class="nav-link">Добавить точку</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row">
            <div class="col">
                <div class="card card-default">
                    <div class="card-body p-0">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    methods: {
        ...mapActions([
            'getInitialData'
        ])
    },
    computed: {
        ...mapGetters([
            'isLoading',
        ]),
    },
    mounted() {
        this.getInitialData();
    }
};
</script>
