<template>
    <section id="widget-grid">

        <!-- row -->
        <div class="row" v-if="playlists !== null">

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <youtube-search-widget></youtube-search-widget>

                <playlist-widget
                        :playlists="playlists"
                        max-height="400px"
                ></playlist-widget>

            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <media-player-widget
                        :playlists="playlists"
                        :reqplaylist="reqplaylist"
                ></media-player-widget>

                <requested-songs-widget
                        v-if="reqplaylist !== null"
                        :reqplaylist="reqplaylist"
                ></requested-songs-widget>

            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
</template>
<script>
    import MediaPlayerWidget from './MediaPlayerWidget.vue';
    import RequestedSongsWidget from './RequestedSongWidget.vue';
    import PlaylistWidget from './PlaylistWidget.vue';
    import YoutubeSearchWidget from './YoutubeSearchWidget.vue';
    import {mapActions} from 'vuex';

    export default {
        components: {
            MediaPlayerWidget,
            RequestedSongsWidget,
            PlaylistWidget,
            YoutubeSearchWidget
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