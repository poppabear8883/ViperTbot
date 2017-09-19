
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

Vue.component('TwitchChatWidget', require('./components/widgets/TwitchChatWidget.vue'));
Vue.component('MediaPlayerWidget', require('./components/widgets/MediaPlayerWidget.vue'));

Vue.component('add-song-modal', require('./components/modals/AddSongModal.vue'));
Vue.component('playlist-modal', require('./components/modals/PlaylistModal.vue'));
Vue.component('reqplaylist-modal', require('./components/modals/ReqPlaylistModal.vue'));

import store from './vuex/store'

const app = new Vue({
    el: '#app',
    store,
    data() {
        return {
            showAddSongModal: false,
            showPlaylistModal: false,
            showReqPlaylistModal: false
        }
    },
    methods: {
        getSongs() {
            axios.get('/api/playlist', {
                'params': {
                    'action': 'all'
                }
            }).then((response) => {
                this.$store.commit('SET_SONGS', response.data);
            }, (response) => {
                console.log('-- Error --' + response);
            });
        },

        getReqSongs() {
            axios.get('/api/reqplaylist', {
                'params': {
                    'action': 'all'
                }
            }).then((response) => {
                this.$store.commit('SET_REQSONGS', response.data);
            }, (response) => {
                console.log('-- Error --' + response);
            });
        }
    },

    mounted() {
        this.getSongs();
        this.getReqSongs();
    }
});