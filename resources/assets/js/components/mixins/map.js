export default {
    methods: {
        initLeaflet() {
            const mymap = Leaflet.map('mapid').setView([51.505, -0.09], 13);

            Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVnaW1vdiIsImEiOiJjamd3MzZkNG4xcGVvMndvZms4b3dweGQ3In0.jJoQoXTWOnFA5hBW83VReg', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

            mymap.on('click', onMapClick);

            function onMapClick(e) {
                const popup = Leaflet.popup();
                popup.setLatLng(e.latlng)
                    .setContent(
                        "You clicked the map at " + e.latlng.toString() 
                    )
                    .openOn(mymap);
            }
        },
    },
}