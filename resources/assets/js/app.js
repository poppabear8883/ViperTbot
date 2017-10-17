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

/**
 * Module Components
 */
require('Modules/Playlists/Resources/assets/js/components/register');

/**
 * App Components
 */
require('./components/register');

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
            axios.get('/api/v2/user')
                .then((response) => {
                    this.$store.commit('SET_USER', response.data.account);
                    this.$store.commit('SET_CHANNEL', response.data.channel);
                }).catch((error) => {
                    console.log(error.response);
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
        // this.pubSubConnect();
    }
});