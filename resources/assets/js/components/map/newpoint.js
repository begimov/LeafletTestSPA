import Map from "../mixins/map";
import { mapActions, mapGetters } from 'vuex'

export default {
    mixins: [Map],
    methods: {
        test() {
            console.log('TEST')
        }
    },
    computed: {
        //
    },
    mounted() {
        this.initInteractiveMap();
    }
}

