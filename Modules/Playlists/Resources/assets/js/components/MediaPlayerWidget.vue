<template>
    <!-- todo: lock this widget to non-sortable! -->
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
                    <button class="btn btn-default btn-xs" @click="play()"><i class="fa fa-play"></i></button>
                    <button class="btn btn-default btn-xs" @click="pause()"><i class="fa fa-pause"></i></button>
                    <button class="btn btn-default btn-xs" @click="stop()"><i class="fa fa-stop"></i></button>
                    <button class="btn btn-default btn-xs" @click="next()"><i class="fa fa-forward"></i></button>
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
                                    :process-style="processStyle"
                        ></vue-slider>
                    </div>
                </div>
            </div>

            <div v-if="player" class="alert alert-default no-margin fade in text-center">
                <i class="fa-fw fa fa-music"></i>
                Current Song: {{ title }}
            </div>

            <div class="text-center">
                <youtube v-if="listReady"
                         :video-id="videoId"
                         :player-width="width"
                         :player-height="height"
                         :player-vars="{autoplay: 1, controls: 0, showinfo: 0, rel: 0}"
                         @ready="ready"
                         @playing="playing"
                         @ended="ended"
                         @buffering="buffering"
                         @paused="paused"
                         @queued="queued"
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
        props: {
            playlists: {required: true, type: Array},
            reqplaylist: {required: true, type: Array}
        },
        components: {
            Widget,
            VueSlider
        },
        data() {
            return {
                processStyle: {"backgroundColor": "#BA2C38"},
                volume: 30,
                listEmpty: false,
                listReady: false,
                listItem: null,
                listCopy: [],
                isReq: false,
                title: '',
                videoId: '',
                progress: 0,
                width: 368,
                height: 207,
                firstLoad: true,
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
            allsongs() {

                let arr = [];

                _.each(this.playlists, (playlist) => {
                    _.each(playlist.songs, (song) => {
                        arr.push(song);
                    });
                });

                return arr;
            },
            songs() {
                if (this.playlist) {
                    return this.playlist.songs;
                }

                return [];
            },
            all() {
                return {
                    id: 0,
                    name: 'All',
                    songs: this.allsongs
                }
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
                this.initialize()
            },

            /**
             * Some initialization
             */
            initialize() {

                if (this.firstLoad) {
                    this.player.stopVideo();
                    this.updateTimerDisplay();
                    this.updateProgressBar();
                    this.firstLoad = false
                }

                clearInterval(time_update_interval);

                let time_update_interval = setInterval(function () {
                    this.updateTimerDisplay();
                    this.updateProgressBar();
                }.bind(this), 1000)
            },

            /**
             * Playing event
             *
             * @param player
             */
            playing(player) {
                //console.log('playing')
            },

            /**
             * Paused event
             *
             * @param player
             */
            paused(player) {
                //console.log('paused')
            },

            /**
             * Buffering event
             *
             * @param player
             */
            buffering(player) {
                //console.log('buffering')
            },

            /**
             * Queued event
             *
             * @param player
             */
            queued(player) {
                //console.log('queued')
            },

            /**
             * Ended event
             *
             * After the current song ends, we look for the next song.
             *
             * @param player
             */
            ended(player) {
                if (this.isReq) {
                    this.removeReq()
                }

                setTimeout(function () {
                    this.next(true)
                }.bind(this), 300);
            },

            /**
             * Play the current videoId
             */
            play() {
                this.player.playVideo()
            },

            /**
             * Process the next song to play.
             *
             * @param ended
             */
            next(ended = false) {
                let item;

                if (this.isReq && !ended) {
                    this.removeReq();
                }

                setTimeout(() => {
                    if (this.reqplaylist[0]) {
                        item = this.getReqItem();
                    } else {
                        item = this.getRandomItem();
                    }

                    if (!item) {
                        this.listEmpty = true;
                        this.listReady = false;
                        this.listItem = null;
                        this.listCopy = [];
                        this.isReq = false;
                        this.title = '';
                        this.videoId = '';
                        this.progress = 0;
                    } else {
                        this.updateVideo(item);
                    }

                }, 1000);
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
             * Removes the song from the requested playlist
             */
            removeReq() {
                this.deleteReqSong(this.videoId).then((response) => {
                    this.isReq = false;
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
                this.isReq = true;
                this.listItem = this.reqplaylist[0];
                return this.listItem
            },

            /**
             * Gets a random song from the playlist.
             *
             * @returns {*}
             */
            getRandomItem() {
                this.isReq = false;

                if (this.songs.length <= 0) {
                    return false;
                }

                if (this.listCopy.length <= 0) {

                    _(this.songs).forEach((item) => {
                        this.listCopy.push(item)
                    });

                }

                this.listItem = _.sample(_.shuffle(this.listCopy));

                _.remove(this.listCopy, (Obj) => {
                    return Obj === this.listItem;
                });

                return this.listItem
            },

            /**
             * Updates video information.
             *
             * @param item
             */
            updateVideo(item) {
                this.videoId = '';
                this.videoId = item.video_id;
                this.title = item.title;
            },

            showAddSongModal() {
                this.$root.showAddSongModal = true;
            },

            ...mapActions([
                'deleteReqSong'
            ]),
        },

        /**
         * This fires when the component is created.
         */
        created() {

            let setVolume = setInterval(() => {
                if (this.player) {
                    this.player.setVolume(this.volume);
                    clearInterval(setVolume)
                }
            }, 500);

            this.playlist = this.playlists[0];

            if (this.playlist.songs.length > 0) {
                this.listReady = true;
                this.listEmpty = false;
                let item = this.getRandomItem();
                this.updateVideo(item);
            } else {
                this.listEmpty = true
            }
        }
    }
</script>

<style>

</style>