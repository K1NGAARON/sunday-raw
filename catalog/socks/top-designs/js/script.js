document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#gallery-slides', {
        heightRatio: 0.5,
        perPage    : 3,
        type: 'loop',
    }).mount();
});