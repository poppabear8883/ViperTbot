<template>
    <!-- row -->
    <div class="row" v-if="pageReady">

        <!-- SINGLE GRID -->
        <article class="col-sm-6 sortable-grid ui-sortable">

            <stream-setup-widget
                    clientId="sbuautwemmz4hr6sbuabyp9bg9uwaav"
            ></stream-setup-widget>

            <!--<twitch-chat-widget></twitch-chat-widget>-->


        </article><!-- END GRID -->

        <!-- SINGLE GRID -->
        <article class="col-sm-6 sortable-grid ui-sortable">

            <media-player-widget></media-player-widget>

            <playlist-widget
                    max-height="400px"
            ></playlist-widget>

        </article><!-- END GRID -->

    </div><!-- end row -->
</template>
<script>
    import StreamSetupWidget from './widgets/StreamSetupWidget.vue';
    import MediaPlayerWidget from 'Modules/Playlists/Resources/assets/js/components/MediaPlayerWidget.vue';
    import PlaylistWidget from 'Modules/Playlists/Resources/assets/js/components/PlaylistWidget.vue';
    import TwitchChatWidget from './widgets/TwitchChatWidget.vue';

    import {mapActions} from 'vuex';
    import pageReadyMixin from './mixins/pageReady';

    export default {
        components: {
            StreamSetupWidget,
            MediaPlayerWidget,
            PlaylistWidget,
            TwitchChatWidget
        },
        mixins: [pageReadyMixin],
        data() {
            return {

            }
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            }
        },
        methods: {
            ...mapActions([
                'getPlaylists',
                'getReqSongs',
            ]),
        },
        created() {
            // Get the Playlists with songs
            this.getPlaylists(this.user.id).then((response) => {
                // Gets the requested songs
                this.getReqSongs(this.user.id).then((response) => {
                    this.pageReady = true;
                }).catch((error) => {
                    alerts.error(error.response.data)
                });
            }).catch((error) => {
                alerts.error(error.response.data)
            });
        },
    }
</script>