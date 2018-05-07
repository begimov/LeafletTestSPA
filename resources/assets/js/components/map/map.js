import Map from "../mixins/map";

export default {
    mixins: [Map],
    methods: {
        //
    },
    mounted() {
        this.initLeaflet();
    }
}

