
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
// Vue.component('twitch-events-widget', require('./components/widgets/TwitchEventsWidget.vue'));

Vue.component('add-song-modal', require('./components/modals/AddSongModal.vue'));
Vue.component('playlist-modal', require('./components/modals/PlaylistModal.vue'));
Vue.component('reqplaylist-modal', require('./components/modals/ReqPlaylistModal.vue'));

import store from './vuex/store'
import { TwitchListener } from './webhooks/TwitchListener'

const app = new Vue({
    el: '#app',
    store,
    data() {
        return {
            showAddSongModal: false,
            showPlaylistModal: false,
            showReqPlaylistModal: false,
            user: {}
        }
    },
    methods: {
        getUser() {
            axios.get('/api/users', {
                'params': {
                    'action': 'getAuthUser'
                }
            }).then((response) => {
                this.user = response.data;

                this.$store.commit('SET_SONGS', response.data.songs);
                this.$store.commit('SET_REQSONGS', response.data.requestedsongs);

            }, (response) => {
                console.log('-- Error --' + response);
                return null
            });
        }
    },

    mounted() {
        if(this.getUser() !== null) {

            let tl = new TwitchListener(
                'whispers',
                this.user.channel_id,
                this.user.access_token
            );

            tl.connect();
        }

    }
});