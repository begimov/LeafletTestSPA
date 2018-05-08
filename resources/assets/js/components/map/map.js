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
        ])
    },
    watch: {
        points: function() { 
            this.initDisplayMap()
        }
    },
    mounted() {
        //
    }
}

