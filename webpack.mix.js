const mix = require('laravel-mix');

mix.js('js/splide.js', 'js/dist/splide.js')
    .js('/nl-nl/js/splide.js', '/nl-nl/js/dist/splide.js')
    .js('js/app.js', 'js/dist/app.js')
    .js('/nl-nl/js/app.js', '/nl-nl/js/dist/app.js');