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
mix.webpackConfig({
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, 'resources/assets/js/utils'),
            Modules: path.resolve(__dirname, 'Modules'),
            Widgets: path.resolve(__dirname, 'resources/assets/js/components/widgets'),
            RootComponents: path.resolve(__dirname, 'resources/assets/js/components')
        }
    }
});

mix.js('resources/assets/js/app.js', 'public/js')

    .sass('resources/assets/sass/app.scss', 'public/css')

    .copy('node_modules/font-awesome/fonts', 'public/fonts')

    .styles([
        // todo: bug css order ??
        'public/css/vendor/smartadmin-skins.min.css',
        'public/css/vendor/smartadmin-production.css',
        'public/css/vendor/smartadmin-production-plugins.css'
    ], 'public/css/smartadmin.css')

    .scripts([
        // SmartAdmin Config JS
        'public/js/vendor/smartadmin/app.config.js',

        // Plugins
        'public/js/vendor/smartadmin/plugin/jquery-touch/jquery.ui.touch-punch.min.js',
        'public/js/vendor/smartadmin/notification/SmartNotification.min.js',
        'public/js/vendor/smartadmin/smartwidgets/jarvis.widget.min.js',
        'public/js/vendor/smartadmin/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js',
        'public/js/vendor/smartadmin/plugin/sparkline/jquery.sparkline.min.js',
        'public/js/vendor/smartadmin/plugin/jquery-validate/jquery.validate.min.js',
        'public/js/vendor/smartadmin/plugin/masked-input/jquery.maskedinput.min.js',
        'public/js/vendor/smartadmin/plugin/select2/select2.min.js',
        'public/js/vendor/smartadmin/plugin/bootstrap-slider/bootstrap-slider.min.js',
        'public/js/vendor/smartadmin/plugin/msie-fix/jquery.mb.browser.min.js',
        'public/js/vendor/smartadmin/plugin/fastclick/fastclick.min.js',

        // Main SmartAdmin JS
        'public/js/vendor/smartadmin/app.js',

        // Add-ons
        'public/js/vendor/smartadmin/speech/voicecommand.min.js',
        'public/js/vendor/smartadmin/smart-chat-ui/smart.chat.ui.min.js',
        'public/js/vendor/smartadmin/smart-chat-ui/smart.chat.manager.min.js'

        // Compiled File
    ], 'public/js/vendor/smartadmin.js');
