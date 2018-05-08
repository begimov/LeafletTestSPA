<template>
    <div class="row">
        <div class="col">
            <div id="mapid" class="leaflet-map"></div>
            <div class="card m-2" v-if="selectedPoint">
                <div class="card-body text-white bg-success">
                    <h2>Отмечена новая точка:</h2>
                    <p class="lead">
                        Широта: {{ selectedPoint.lat }}<br/>
                        Долгота: {{ selectedPoint.lng }}
                    </p>
                    <p>
                        <select class="custom-select" v-if="categories.length" v-model="selectedCategory">
                            <option disabled value="0">Выберите категорию</option>
                            <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
                        </select>
                    </p>
                    <p><a href="#" @click.prevent="savePoint" class="btn btn-dark">СОХРАНИТЬ</a></p>
                    <div class="alert alert-danger" v-if="errors">{{ errors.category ? errors.category[0] : '' }}</div>
                </div>
            </div>
            <div class="card m-2" v-else>
                <div class="card-body text-white bg-danger">
                    <p class="mb-0">Кликните на карте, чтобы выбрать новую точку...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./newpoint.js"></script>
