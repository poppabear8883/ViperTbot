let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .copy('node_modules/font-awesome/fonts', 'public/fonts')

    .styles([
            'public/css/vendor/smartadmin-skins.min.css',
            'public/css/vendor/smartadmin-production.css',
            'public/css/vendor/smartadmin-production-plugins.css'
        ],
        'public/css/smartadmin.css')

    .scripts([
        'resources/assets/js/vendor/smartadmin/app.config.seed.js',
        'resources/assets/js/vendor/smartadmin/jarvis.widget.min.js',
        'resources/assets/js/vendor/smartadmin/app.seed.js'
    ], 'public/js/vendor/smartadmin.js');
