<template>
    <widget wid-id="65846" :fullscreen="false" color="red" :sortable="false">
        <div slot="title">
            Media Player
        </div>
        <div slot="icon">
            <i class="fa fa-music txt-color-white"></i>
        </div>

        <div slot="toolbars">
            <div class="widget-toolbar" role="menu">
                <div class="progress progress-striped active">
                    <div class="progress-bar bg-color-darken" role="progressbar"
                         :style="{width: progress + '%'}"></div>
                </div>
            </div>

            <!-- all your toolbars can go here -->
            <div class="widget-toolbar" role="menu">
                <div class="btn-group">
                    <button class="btn btn-default btn-xs" @click="play()">
                        <i class="fa fa-play"></i>
                    </button>
                    <button class="btn btn-default btn-xs" @click="pause()">
                        <i class="fa fa-pause"></i>
                    </button>
                    <button class="btn btn-default btn-xs" @click="stop()">
                        <i class="fa fa-stop"></i>
                    </button>
                    <button class="btn btn-default btn-xs" @click="next()">
                        <i class="fa fa-forward"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- end toolbars -->

        <div slot="body" style="background-color: #000000; padding-bottom: 35px">
            <!-- MAIN CONTAINER -->
            <div class="alert alert-info no-margin fade in">
                <button class="close" data-dismiss="alert">
                    ×
                </button>
                <i class="fa-fw fa fa-info"></i>
                Media Player Widget v1.0 Beta
            </div>

            <div class="widget-body-toolbar">
                <div class="row">
                    <div class="col-xs-2 col-sm-6 col-md-6 col-lg-6">
                        <select class="form-control" v-model="playlist">
                            <option :value="all">
                                All
                            </option>
                            <option v-for="playlist in playlists"
                                    :value="playlist">
                                {{ playlist.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-xs-2 col-sm-6 col-md-6 col-lg-6">
                        <strong>Volume {{ volume }}</strong>
                        <vue-slider v-model="volume"
                                    tooltip="hover"
                                    :process-style="sliderStyle"
                        ></vue-slider>
                    </div>
                </div>
            </div>

            <div v-if="player" class="alert alert-default no-margin fade in text-center">
                <i class="fa-fw fa fa-music"></i>
                Current Song: {{ listItem.title }}
            </div>

            <div class="text-center">
                <youtube v-if="listItem"
                         :video-id="listItem.video_id"
                         :player-width="width"
                         :player-height="height"
                         :player-vars="{autoplay: 1, controls: 0, showinfo: 0, rel: 0}"
                         @ready="ready"
                         @ended="ended"
                ></youtube>
            </div>
        </div>
        <!-- end body -->
    </widget>
</template>

<script>
    import VueYoutubeEmbed from 'vue-youtube-embed';
    import VueSlider from 'vue-slider-component';
    import Widget from 'Widgets/Widget.vue';
    import * as alerts from 'Utilities/alerts';
    import {mapActions} from 'vuex';

    Vue.use(VueYoutubeEmbed);

    export default {
        components: {
            Widget,
            VueSlider
        },
        data() {
            return {
                sliderStyle: {"backgroundColor": "#BA2C38"},
                volume: 30,
                listItem: null,
                listCopy: [],
                progress: 0,
                width: 368,
                height: 207,
                player: null,
                playlist: {
                    id: 1,
                    name: 'Default Playlist',
                    songs: []
                }
            }
        },
        watch: {
            playlist(newPlaylist) {
                this.listCopy = [];
            },
            volume() {
                this.player.setVolume(this.volume);
            }
        },
        computed: {
            user() {
                return this.$parent.user;
            },
            playlists() {
                return this.$store.getters.getPlaylists;
            },
            reqplaylist() {
                return this.$store.getters.getReqSongs;
            },
            all() {
                let songs = [];

                _.each(this.playlists, (playlist) => {
                    _.each(playlist.songs, (song) => {
                        songs.push(song);
                    });
                });

                return {id: 0, name: 'All', songs: songs}
            },
        },
        methods: {
            /**
             * This fires when the the player is ready!
             *
             * @param player
             */
            ready(player) {
                this.player = player;
                this.player.setVolume(this.volume);

                setInterval(() => {
                    this.updateTimerDisplay();
                    this.updateProgressBar();
                }, 1000);
            },

            /**
             * Ended event
             *
             * After the current song ends, we look for the next song.
             *
             * @param player
             */
            ended(player) {
                this.state = 'ended';

                setTimeout(() => {
                    this.next(true)
                }, 300);
            },

            /**
             * Play the current listItem.video_id
             */
            play() {
                this.player.playVideo()
            },

            /**
             * Stop the player
             */
            stop() {
                this.player.stopVideo();
                this.progress = 0
            },

            /**
             * Pause the player
             */
            pause() {
                this.player.pauseVideo()
            },

            /**
             * Process the next song to play.
             *
             * @param ended
             */
            next(ended = false) {
                if (this.hasRequests()) {
                    this.getReqItem();
                } else {
                    this.getRandomItem();
                }
            },

            hasRequests() {
                return (this.reqplaylist.length > 0);
            },

            /**
             * Removes the song from the requested playlist
             */
            removeReq() {
                this.deleteReqSong(this.listItem.video_id).then((response) => {

                }).catch((error) => {
                    alerts.error(error.response.data);
                });
            },

            /**
             * Updates times for progress bar
             */
            updateTimerDisplay() {
                // Update current time text display.
                this.formatTime(this.player.getCurrentTime());
                this.formatTime(this.player.getDuration());
            },

            /**
             * Formats Times to friendly readable
             *
             * @param time
             * @returns {string}
             */
            formatTime(time) {
                time = Math.round(time);

                let minutes = Math.floor(time / 60),
                    seconds = time - minutes * 60;

                seconds = seconds < 10 ? '0' + seconds : seconds;

                return minutes + ":" + seconds;
            },

            /**
             * Updates the progress bar
             */
            updateProgressBar() {
                this.progress = (this.player.getCurrentTime() / this.player.getDuration()) * 100;
            },

            /**
             * Gets the next requested song.
             *
             * Always pulls from most recently added.
             *
             * @returns {*}
             */
            getReqItem() {
                this.listItem = this.reqplaylist[0];
                this.removeReq();
                return this.listItem
            },

            /**
             * Gets a random song from the playlist.
             *
             * @returns {*}
             */
            getRandomItem() {

                if (this.listCopy.length <= 0) {
                    _.each(this.playlist.songs, (song) => {
                        this.listCopy.push(song);
                    });
                }

                this.listItem = _.sample(_.shuffle(this.listCopy));

                _.remove(this.listCopy, (Obj) => {
                    return Obj === this.listItem;
                });

                return this.listItem
            },

            ...mapActions([
                'deleteReqSong'
            ]),
        },

        /**
         * This fires when the component is created.
         */
        created() {
            this.playlist = this.playlists[0];

            if (this.playlist.songs.length > 0) {
                this.getRandomItem();
            }
        }
    }
</script>