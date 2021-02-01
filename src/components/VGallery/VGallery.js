import axios from 'axios';

export default {
    name: 'VGallery',
    data() {
        return {
            searchValue: '',
            options: {
                shareEl: false,
                showHideOpacity: true,
                getThumbsBoundsFn: false
            },
            items : [],
            categories : {},            
        };
    },
    methods: {
        updateSearch(name) {
            if (name === this.searchValue) {
                this.searchValue = '';
            } else {
                this.searchValue = name;
            }
        },
      },
    computed: {
        filteredItems(){
            if(this.searchValue !== '') {
                return this.items.filter((item) => {
                    for (let i = 0; i < item.category.length; i++) {
                        const category = item.category[i];
                        if (category.slug === this.searchValue) {
                            return true;
                        }
                                         }
                    return false;                        
                })
            }
            return this.items;
        }
    },
    created() {
        const API = 'http://iwona.cms.everse.pl/wp-json/wp/v2/media?parent=5&per_page=50&_embed'
        
        let items = []
        let categoriesTmp = {}
        
        axios.get(API)
        .then((res) => {
            let element = res.data;
        
            for (let i = 0; i < element.length; i++) {

                let image = element[i];
                let categories = image._embedded["wp:term"][0];
                items.push({
                    src: image.media_details.sizes.full.source_url,
                    thumbnail: image.media_details.sizes.thumbnail.source_url,
                    w: image.media_details.sizes.full.width,
                    h: image.media_details.sizes.full.height,
                    alt: image.alt_text,
                    category: categories
                })

                for (let j = 0; j < categories.length; j++) {
                    const category = categories[j];
                    categoriesTmp[category.slug] = category.name;  

                }
             }
        })
        this.items = items
        this.categories = categoriesTmp
    },

    components: {
        VPictureSwipe: require("vue-picture-swipe").default
    },
}
