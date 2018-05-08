export default {
    data() {
        return {
            mymap: null,
            markers: []
        }
    },
    methods: {
        initBaseMap() {
            this.mymap = Leaflet.map('mapid').setView([51.505, -0.09], 13);

            Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVnaW1vdiIsImEiOiJjamd3MzZkNG4xcGVvMndvZms4b3dweGQ3In0.jJoQoXTWOnFA5hBW83VReg', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'your.mapbox.access.token'
            }).addTo(this.mymap);
        },

        initDisplayMap() {
            if (this.markers.length) {
                this.markers.forEach(marker => {
                    this.mymap.removeLayer(marker)
                });
            }

            this.filteredPoints.forEach(point => {
                this.markers.push(Leaflet.marker(point.position).addTo(this.mymap)
                    .bindPopup(
                        "<b>Широта:</b> " + point.position.lat 
                        + "<br/><b>Долгота:</b> " + point.position.lng
                        + "<br/><b>Категория:</b> " + point.category.data.name
                        + "<br/><b>Дата:</b> " + point.created_at
                    ));
            });
        },

        initInteractiveMap() {
            if (this.selectedPoint) {
                Leaflet.popup()
                    .setLatLng(this.selectedPoint)
                    .setContent("Новая точка")
                    .openOn(this.mymap);
            }

            this.mymap.on('click', (e) => {
                const popup = Leaflet.popup();
                popup.setLatLng(e.latlng)
                    .setContent(
                        "Новая точка"
                    )
                    .openOn(this.mymap);

                this.updateSelectedPoint(e.latlng);
            });

            this.mymap.on('popupclose', (e) => {
                this.updateSelectedPoint(null);
            });
        }
    },
}