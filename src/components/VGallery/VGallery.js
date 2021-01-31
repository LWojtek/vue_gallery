import axios from 'axios';

window.axios = require('axios');

export default {
        name: 'VGallery',
    data() {
        return {
            // posts: {
            //     posts: null,
            // },
            options: {
                shareEl: false,
                showHideOpacity: true,
                getThumbsBoundsFn: false
            },
             items: [
                // {
                //     src: 'https://picsum.photos/id/1/600/400',
                //     thumbnail: 'https://picsum.photos/id/1/340/340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // },
                // {
                //     src: 'http://via.placeholder.com/600x400',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 600,
                //     h: 400,
                //     alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                // },
                // {
                //     src: 'http://via.placeholder.com/1200x900',
                //     thumbnail: 'http://via.placeholder.com/340x340',
                //     w: 1200,
                //     h: 900
                // }
            ]
        };
    },
    
    created() {
        // here you will do the api call for the images
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
                    alt: res.data[i].alt_text
                })
                
            }
                  
        })

        this.items = items
                     

    },

    mounted() {
        
    },

    components: {
        VPictureSwipe: require("vue-picture-swipe").default
    },
}




// let items = []
// const API = 'http://iwona.cms.everse.pl/wp-json/wp/v2/media?parent=5&per_page=50'

// axios.get(API)
// .then(res => 
//     items.push({
//     src: res.data[0].media_details.sizes.full.source_url,
//     thumbnail: res.data[0].media_details.sizes.thumbnail.source_url,
//     w: res.data[0].media_details.sizes.full.width,
//     h: res.data[0].media_details.sizes.full.height,
//     alt: res.data[0].alt_text
// }))

// this.items = items;

// items.push({
//         src: res.data[0].media_details.sizes.full.source_url,
//         thumbnail: res.data[0].media_details.sizes.thumbnail.source_url,
//         w: res.data[0].media_details.sizes.full.width,
//         h: res.data[0].media_details.sizes.full.height,
//         alt: res.data[0].alt_text
//     }))