import Map from "../mixins/map";
import { mapActions, mapGetters } from 'vuex'

export default {
    mixins: [Map],
    methods: {
        //
    },
    computed: {
        //
    },
    mounted() {
        this.initInteractiveMap();
    }
}

