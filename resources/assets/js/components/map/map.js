import Map from "../mixins/map";
import { mapActions, mapGetters } from 'vuex'

export default {
    mixins: [Map],
    methods: {
        ...mapActions('map', [
            'updateSelectedPointCategory'
        ])
    },
    computed: {
        ...mapGetters('map', [
            'points',
            'filteredPoints',
            'categories',
            'selectedPointCategory'
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

