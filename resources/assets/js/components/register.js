/**
 * Pages
 */
Vue.component('dashboard', require('./Dashboard.vue'));

/**
 * Passport
 */
Vue.component('passport-clients', require('./passport/Clients.vue'));
Vue.component('passport-authorized-clients', require('./passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens', require('./passport/PersonalAccessTokens.vue'));

/**
 * App
 */
Vue.component('live-channels', require('./header/LiveChannels.vue'));
