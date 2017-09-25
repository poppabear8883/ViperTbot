
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
Vue.component('live-channels', require('./components/header/LiveChannels.vue'));

Vue.component('twitch-chat-widget', require('./components/widgets/TwitchChatWidget.vue'));
Vue.component('media-player-widget', require('./components/widgets/MediaPlayerWidget.vue'));
Vue.component('stream-setup-widget', require('./components/widgets/StreamSetupWidget.vue'));
Vue.component('twitch-events-widget', require('./components/widgets/TwitchEventsWidget.vue'));

Vue.component('add-song-modal', require('./components/modals/AddSongModal.vue'));
Vue.component('playlist-modal', require('./components/modals/PlaylistModal.vue'));
Vue.component('reqplaylist-modal', require('./components/modals/ReqPlaylistModal.vue'));

import store from './vuex/store'

const app = new Vue({
    el: '#app',
    store,
    data: {
        showAddSongModal: false,
        showPlaylistModal: false,
        showReqPlaylistModal: false,
    },
    methods: {
        getChannelData() {
            axios.get('/api/twitch', {
                params: {
                    action: 'myChannel'
                }
            }).then((response) => {
                this.$store.commit('SET_CHANNEL', response.data);
            }).catch((response) => {
                console.log('-- Error --' + response);
                return null
            });
        },
        getUser() {
            axios.get('/api/users', {
                params: {
                    action: 'getAuthUser'
                }
            }).then((response) => {
                this.$store.commit('SET_USER', response.data);
                this.$store.commit('SET_SONGS', response.data.songs);
                this.$store.commit('SET_REQSONGS', response.data.requestedsongs);
            }).catch((error) => {
                console.log(error);
                return null
            });
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
        this.getChannelData();
    }
});