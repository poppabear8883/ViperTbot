<template>
    <section id="widget-grid">

        <!-- row -->
        <div class="row" v-if="playlists !== null && reqplaylist !== null">

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <stream-setup-widget
                        client-id="sbuautwemmz4hr6sbuabyp9bg9uwaav"
                ></stream-setup-widget>

                <!--<twitch-chat-widget></twitch-chat-widget>-->


            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <media-player-widget
                        :playlists="playlists"
                        :reqplaylist="reqplaylist"
                ></media-player-widget>

                <playlist-widget
                        :playlists="playlists"
                        max-height="400px"
                ></playlist-widget>

            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
</template>
<script>
    import StreamSetupWidget from './widgets/StreamSetupWidget.vue';
    import MediaPlayerWidget from 'Modules/Playlists/Resources/assets/js/components/MediaPlayerWidget.vue';
    import PlaylistWidget from 'Modules/Playlists/Resources/assets/js/components/PlaylistWidget.vue';
    import TwitchChatWidget from './widgets/TwitchChatWidget.vue';

    import {mapActions} from 'vuex';

    export default {
        components: {
            StreamSetupWidget,
            MediaPlayerWidget,
            PlaylistWidget,
            TwitchChatWidget
        },
        data() {
            return {
                playlists: null,
                reqplaylist: null
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
            /**
             * Get the Playlists with songs
             */
            this.getPlaylists(this.user.id).then((response) => {
                this.playlists = response.data;
            }).catch((error) => {
                alerts.error(error.response.data)
            });

            /**
             * Get the requested songs
             */
            this.getReqSongs(this.user.id).then((response) => {
                this.reqplaylist = response.data;
            }).catch((error) => {
                alerts.error(error.response.data)
            });
        }
    }
</script>