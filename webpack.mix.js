const mix = require("laravel-mix");

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

mix.disableSuccessNotifications()
    .js("resources/js/app.js", "public/js")
    .babel("public/js/app.js", "public/js/app.js")
    .sass("resources/sass/app.sass", "public/css")
    .version();
