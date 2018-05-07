import Map from "../mixins/map";
import { mapActions, mapGetters } from 'vuex'

export default {
    mixins: [Map],
    methods: {
        //
    },
    computed: {
        ...mapGetters('map', [
            'markers',
        ])
    },
    mounted() {
        this.initLeaflet();
    }
}

