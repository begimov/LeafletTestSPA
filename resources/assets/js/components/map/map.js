import Map from "../mixins/map";
import { mapActions, mapGetters } from 'vuex'

export default {
    mixins: [Map],
    methods: {
        //
    },
    computed: {
        ...mapGetters('map', [
            'points',
            'filteredPoints',
        ])
    },
    watch: {
        filteredPoints: function() { 
            this.initDisplayMap();
        }
    },
    mounted() {
        if (this.filteredPoints.length) {
            this.initDisplayMap();
        }
    }
}

