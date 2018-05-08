<template>
    <div>
        <div class="row">
            <div class="col">
                <div id="mapid" class="leaflet-map"></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <select class="custom-select" v-if="categories.length" v-model="selectedCategory">
                    <option disabled value="0">Выберите категорию</option>
                    <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script src="./map.js"></script>
