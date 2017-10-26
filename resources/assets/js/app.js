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
import {mapActions} from 'vuex';
import * as alerts from './utils/alerts';

const app = new Vue({
    el: '#app',
    store,
    data: {
        loading: false,
        showAddRegularModal: false,
    },
    methods: {
        ...mapActions([
            'getAccount',
            'getFollowings',
        ]),
        setAccount() {
            this.getAccount().then((response) => {
                return true;
            }).catch((error) => {
                alerts.critical(error.response);
                return false;
            });
        },
        setFollowing() {
            this.getFollowings().then((response) => {
                console.log(response.data);
                return true;
            }).catch((error) => {
                alerts.critical(error.response);
                return false;
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
        },
        following() {
            return this.$store.getters.getFollowing;
        }
    },
    mounted() {
        this.setAccount();
        this.setFollowing();

        let pollFollowing = setInterval(() => {
            if (!this.setFollowing()) {
                clearInterval(pollFollowing);
            }
        }, 60000 * 3);
    }
});