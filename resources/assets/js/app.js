/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// todo: extract component registration to separate files to clean this up
/*
 * Passport Components
 */
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);


/*
 * App Components
 */
Vue.component('live-channels', require('./components/header/LiveChannels.vue'));

Vue.component('twitch-chat-widget', require('./components/widgets/TwitchChatWidget.vue'));
Vue.component('media-player-widget', require('./components/widgets/MediaPlayerWidget.vue'));
Vue.component('stream-setup-widget', require('./components/widgets/StreamSetupWidget.vue'));
Vue.component('playlist-widget', require('./components/widgets/PlaylistWidget.vue'));

Vue.component('add-song-modal', require('./components/modals/AddSongModal.vue'));
Vue.component('playlist-modal', require('./components/modals/PlaylistModal.vue'));
Vue.component('reqplaylist-modal', require('./components/modals/ReqPlaylistModal.vue'));
Vue.component('add-regular-modal', require('./components/modals/AddRegularModal.vue'));


import store from './vuex/store'
import {TwitchPubSub} from "./webhooks/TwitchPubSub";

const app = new Vue({
    el: '#app',
    store,
    data: {
        showAddSongModal: false,
        showPlaylistModal: false,
        showReqPlaylistModal: false,
        showAddRegularModal: false
    },
    methods: {
        getUser() {
            axios.get('/api/users', {
                params: {
                    action: 'getAuthUser'
                }
            }).then((response) => {
                console.log(response.data);
                this.$store.commit('SET_USER', response.data.account);
                this.$store.commit('SET_CHANNEL', response.data.channel);
                this.$store.commit('SET_REQSONGS', response.data.reqsongs);
                this.$store.commit('SET_PLAYLISTS', response.data.playlists);
                this.$store.commit('SET_SONGS', response.data.songs);
            }).catch((error) => {
                console.log(error);
                return null
            });
        },

        pubSubConnect() {
            let topics = [
                'whispers'
            ];

            setTimeout(() => {
                let tl = new TwitchPubSub(topics, this.user.channel_id, this.user.access_token);
                tl.connect();
            }, 5000);
        }
    },

    computed: {
        user() {
            return this.$store.getters.getUser;
        },
        channel() {
            return this.$store.getters.getChannel;
        }
    },

    mounted() {
        this.getUser();
        this.pubSubConnect();
    }
});