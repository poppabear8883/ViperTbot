/**
 * We will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./assets/js/bootstrap');

window.Vue = require('vue');

window.sentinel = require('sentinel-js');

/**
 * Modules (pages)
 */
require('Modules/Dashboard/Resources/register');
require('Modules/Playlists/Resources/register');

/**
 * Passport
 */
Vue.component('passport-clients', require('./components/Passport/Clients.vue'));
Vue.component('passport-authorized-clients', require('./components/Passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens', require('./components/Passport/PersonalAccessTokens.vue'));

/**
 * App
 */
