<template>
    <!-- row -->
    <div class="row" v-if="ready">

        <article class="col-sm-12 sortable-grid ui-sortable">
            <youtube-search-widget></youtube-search-widget>
        </article>

        <!-- SINGLE GRID -->
        <article class="col-sm-6 sortable-grid ui-sortable">

            <playlist-widget
                    max-height="500px"
            ></playlist-widget>

        </article><!-- END GRID -->

        <!-- SINGLE GRID -->
        <article class="col-sm-6 sortable-grid ui-sortable">

            <media-player-widget></media-player-widget>

            <requested-songs-widget></requested-songs-widget>

        </article><!-- END GRID -->

    </div><!-- end row -->
</template>
<script>
    import MediaPlayerWidget from './MediaPlayerWidget.vue';
    import RequestedSongsWidget from './RequestedSongWidget.vue';
    import PlaylistWidget from './PlaylistWidget.vue';
    import YoutubeSearchWidget from './YoutubeSearchWidget.vue';

    import {mapActions} from 'vuex';
    import isPageComponent from 'RootComponents/mixins/isPageComponent';

    export default {
        components: {
            MediaPlayerWidget,
            RequestedSongsWidget,
            PlaylistWidget,
            YoutubeSearchWidget
        },
        mixins: [isPageComponent],
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
                    this.ready = true;
                }).catch((error) => {
                    alerts.error(error.response.data)
                });
            }).catch((error) => {
                alerts.error(error.response.data)
            });
        }
    }
</script>