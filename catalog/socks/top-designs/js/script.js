document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#gallery-slides', {
        heightRatio: 0.5,
        perPage    : 3,
        breakpoints: {
            1000: {
                heightRatio: 1,
                perPage: 2,
            }
        },
        type: 'loop',
    }).mount();
});