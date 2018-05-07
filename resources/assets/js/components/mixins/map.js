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

            this.markers.forEach(marker => {
                Leaflet.marker(marker).addTo(mymap)
                    .bindPopup("Широта: " + marker[0] + "<br/>Долгота: " + marker[1]);
            });
        },

        initInteractiveMap() {
            const mymap = this.initBaseMap();

            mymap.on('click', (e) => {
                const popup = Leaflet.popup();
                popup.setLatLng(e.latlng)
                    .setContent(
                        "Новая точка"
                    )
                    .openOn(mymap);

                this.updateSelectedPoint(e.latlng);
            });
        }
    },
}