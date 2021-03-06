import Map from "../mixins/map";
import { mapActions, mapGetters } from 'vuex'

export default {
    mixins: [Map],
    methods: {
        ...mapActions('newpoint', [
            'updateSelectedPoint',
            'updateSelectedPointCategory',
            'savePoint'
        ])
    },
    computed: {
        ...mapGetters('newpoint', [
            'selectedPoint',
            'categories',
            'selectedPointCategory',
            'errors',
            'message'
        ]),
        'selectedCategory': {
            get () {
              return this.selectedPointCategory;
            },
            set (value) {
              this.updateSelectedPointCategory(value);
            }
        },
    },
    mounted() {
        this.initBaseMap();
        this.initInteractiveMap();
    }
}

