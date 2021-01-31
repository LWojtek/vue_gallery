export default {
    name: 'VGallery',
    data() {
        return {
            options: {
                shareEl: false
            },
             items: [
                {
                    src: 'https://picsum.photos/id/1/600/400',
                    thumbnail: 'https://picsum.photos/id/1/340/340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://via.placeholder.com/600x400',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                },
                {
                    src: 'http://via.placeholder.com/1200x900',
                    thumbnail: 'http://via.placeholder.com/340x340',
                    w: 1200,
                    h: 900
                }
            ]
        };
    },

    created() {
        // here you will do the api call for the images
    },

    mounted() {
        
    },

    components: {
        VPictureSwipe: require("vue-picture-swipe").default
    },
}