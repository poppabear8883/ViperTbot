/**
 * We will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Registering
require('../../register');

import store from './vuex/store';
import {TwitchPubSub} from "./webhooks/TwitchPubSub";
import {mapActions} from 'vuex';
import * as alerts from './utils/alerts';

/**
 * Vue Plugins
 */
import vMediaQuery from 'v-media-query'
import VueLocalStorage from 'vue-localstorage';

Vue.use(vMediaQuery);
Vue.use(VueLocalStorage, {
    name: 'ls',
    createComputed: true
});

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
                alerts.critical(error.response.message);
                return false;
            });
        },
        setFollowing() {
            this.getFollowings().then((response) => {
                return true;
            }).catch((error) => {
                alerts.critical(error.response.message);
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
        if (this.$mq.below(1280)) {
            document.body.classList.add('minified');
        }

        let path = window.location.pathname;

        if(path !== '/login') {
            this.setAccount();
            this.setFollowing();

            let pollFollowing = setInterval(() => {
                if (this.setFollowing() === false) {
                    clearInterval(pollFollowing);
                }
            }, 60000);
        }
    },
    created() {
        let tooltip = '[rel=tooltip], [data-rel=tooltip]';
        let popover = '[rel=popover], [data-rel=popover]';
        let popover_hover = '[rel=popover-hover], [data-rel=popover-hover]';
        let widget = '.jarviswidget';

        sentinel.on(widget, (el) => {
            if (thisDevice === "desktop") {
                setup_widgets_desktop();
            } else {
                setup_widgets_mobile();
            }
        });

        sentinel.on(tooltip, (el) =>  {
            $(el).tooltip();
        });

        sentinel.on(popover, (el) =>  {
            $(el).popover();
        });

        sentinel.on(popover_hover, (el) =>  {
            $(el).popover({
                trigger: 'hover'
            });
        });
    }
});