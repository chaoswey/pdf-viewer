const mix = require('laravel-mix');
require('laravel-mix-svg-vue');

mix.js('src/main.js', 'dist/main.js').svgVue();

mix.options({processCssUrls: false});
mix.sourceMaps();
