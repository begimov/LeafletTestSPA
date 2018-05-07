import Map from "../mixins/map";
import { mapActions, mapGetters } from 'vuex'

export default {
    mixins: [Map],
    methods: {
        ...mapActions('newpoint', [
            'updateSelectedPoint'
        ])
    },
    computed: {
        //
    },
    mounted() {
        this.initInteractiveMap();
    }
}

