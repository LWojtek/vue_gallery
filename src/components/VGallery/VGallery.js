import axios from 'axios';

export default {
        name: 'VGallery',
    data() {
        return {
 
            options: {
                shareEl: false,
                showHideOpacity: true,
                getThumbsBoundsFn: false
            },
             items: [

            ]
        };
    },
    
    created() {
        const API = 'http://iwona.cms.everse.pl/wp-json/wp/v2/media?parent=5&per_page=50'
        let items = []
        
        axios.get(API)
        .then((res) => {
            let element = res.data;
        
            for (let i = 0; i < element.length; i++) {
                items.push({
                    src: res.data[i].media_details.sizes.full.source_url,
                    thumbnail: res.data[i].media_details.sizes.thumbnail.source_url,
                    w: res.data[i].media_details.sizes.full.width,
                    h: res.data[i].media_details.sizes.full.height,
                    alt: res.data[i].alt_text,
                    category: res.data[i].categories[0]
                })
            }
        })

        this.items = items

        console.log(this.items)
    },

    components: {
        VPictureSwipe: require("vue-picture-swipe").default
    },
}
