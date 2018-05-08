export default {
    methods: {
        initBaseMap() {
            const mymap = Leaflet.map('mapid').setView([51.505, -0.09], 13);

            Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVnaW1vdiIsImEiOiJjamd3MzZkNG4xcGVvMndvZms4b3dweGQ3In0.jJoQoXTWOnFA5hBW83VReg', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

            return mymap;
        },

        initDisplayMap() {
            const mymap = this.initBaseMap();

            this.points.forEach(point => {
                Leaflet.marker(point.position).addTo(mymap)
                    .bindPopup("Широта: " + point.position.lat + "<br/>Долгота: " + point.position.lng);
            });
        },

        initInteractiveMap() {
            const mymap = this.initBaseMap();

            if (this.selectedPoint) {
                Leaflet.popup()
                    .setLatLng(this.selectedPoint)
                    .setContent("Новая точка")
                    .openOn(mymap);
            }

            mymap.on('click', (e) => {
                const popup = Leaflet.popup();
                popup.setLatLng(e.latlng)
                    .setContent(
                        "Новая точка"
                    )
                    .openOn(mymap);

                this.updateSelectedPoint(e.latlng);
            });

            mymap.on('popupclose', (e) => {
                this.updateSelectedPoint(null);
            });
        }
    },
}