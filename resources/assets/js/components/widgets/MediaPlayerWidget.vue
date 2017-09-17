<template>
    <!-- todo: lock this widget to non-sortable! -->
    <widget wid-id="65846" :fullscreen="false">
        <div slot="title">
            Media Player
        </div>
        <div slot="icon">
            <!-- add a icon example: <i class="fa fa-comments txt-color-white"></i> -->
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
            <div v-if="listEmpty" class="text-center">
                <h1>Playlist is empty</h1>
                <button class="btn btn-labeled btn-success" data-toggle="modal" data-target="#AddSongModal">
                    <span class="btn-label">
                        <i class="fa fa-plus"></i>
                    </span>
                    Add First Song
                </button>
            </div>
        </div>
        <!-- end body -->
    </widget>
</template>

<script>
    import VueYoutubeEmbed from 'vue-youtube-embed'
    Vue.use(VueYoutubeEmbed);

    import Widget from './Widget.vue'

    export default{
        props: {
            playlist: {
                required: true
            },
            reqplaylist: {
                required: true
            }
        },
        data() {
            return {
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
                player: null
            }
        },
        watch: {
            playlist: function (playlist) {
                this.listCopy = [];
                _(playlist).forEach(function (item) {
                    this.listCopy.push(item)
                }.bind(this));

                if (this.listEmpty) {
                    this.listEmpty = false;
                    this.listReady = true;
                    let item = this.getRandomItem();
                    this.updateVideo(item)
                } else if (playlist.length <= 0) {
                    this.listEmpty = true;
                    this.listReady = false
                }
            }
        },
        components: {
            Widget
        },
        methods: {
            ready(player) {
                this.player = player;
                this.initialize()
            },
            initialize() {
                this.updatePlaylist();

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
            playing(player) {
                //console.log('playing')
                this.updatePlaylist()
            },
            paused(player) {
                //console.log('paused')
            },
            buffering(player) {
                //console.log('buffering')
            },
            queued(player) {
                //console.log('queued')
            },
            ended(player) {
                if (this.isReq) {
                    this.removeReq()
                }

                setTimeout(function () {
                    this.next(true)
                }.bind(this), 300);
            },
            play() {
                this.player.playVideo()
            },
            next(ended = false) {
                let item;

                if (this.isReq && !ended) {
                    this.removeReq()
                }

                if (this.reqplaylist.length <= 0) {
                    item = this.getRandomItem();
                    this.updateVideo(item)
                } else {
                    item = this.getReqItem();
                    this.updateVideo(item)
                }
            },
            stop() {
                this.player.stopVideo();
                this.progress = 0
            },
            pause() {
                this.player.pauseVideo()
            },
            removeReq() {
                let item = this.listItem;

                /*axios.delete(window.location.origin + '/api/reqplaylist', {
                    'action': 'remove',
                    'params': {
                        'video_id': this.videoId
                    }
                }).then(function (response) {
                    console.log('Removed Title:' + this.title);

                    //this.deleteFromReqPlaylist(item.id)
                }.bind(this)).catch(function (response) {
                    $.bigBox({
                        title: '!ERROR!',
                        content: response,
                        color: 'danger',
                        icon: 'fa fa-warning shake animated',
                        number: 1,
                        timeout: 6000
                    });
                });*/
            },
            updateTimerDisplay() {
                // Update current time text display.
                this.formatTime(this.player.getCurrentTime());
                this.formatTime(this.player.getDuration());
            },
            formatTime(time) {
                time = Math.round(time);

                let minutes = Math.floor(time / 60),
                    seconds = time - minutes * 60;

                seconds = seconds < 10 ? '0' + seconds : seconds;

                return minutes + ":" + seconds;
            },
            updateProgressBar(){
                this.progress = (this.player.getCurrentTime() / this.player.getDuration()) * 100;
            },
            getReqItem() {
                console.log('Is Request');
                this.isReq = true;
                this.listItem = this.reqplaylist[0];
                return this.listItem
            },
            getRandomItem() {
                this.isReq = false;

                if (this.listCopy.length <= 0) {
                    _(this.playlist).forEach(function (item) {
                        this.listCopy.push(item)
                    }.bind(this));
                }

                this.listItem = _.sample(_.shuffle(this.listCopy));

                _.remove(this.listCopy, function (Obj) {
                    return Obj === this.listItem;
                }.bind(this));

                return this.listItem
            },
            updateVideo(item) {
                this.videoId = '';
                this.videoId = item.video_id
            },
            updatePlaylist() {
                let item = this.listItem;

                if (item.title === "") {
                    this.title = this.player.getVideoData().title;

                    let url;

                    if (!this.isReq) {
                        url = window.location.origin + '/api/playlist'
                    } else {
                        url = window.location.origin + '/api/reqplaylist'
                    }

                    let params = {
                        'video_id': this.videoId,
                        'title': this.title
                    };

                    axios.patch(url, {
                        'action': 'updateTitle',
                        'params': params
                    }).then(function (response) {
                        console.log('Updated Title:' + this.title);

                        /*if (!this.isReq) {
                            this.updatePlaylistTitle(item.id, this.title)
                        } else {
                            this.updateReqPlaylistTitle(item.id, this.title)
                        }*/
                    }.bind(this)).catch(function (response) {
                        $.bigBox({
                            title: '!ERROR!',
                            content: response,
                            color: 'danger',
                            icon: 'fa fa-warning shake animated',
                            number: 1,
                            timeout: 6000
                        });
                    });


                } else {
                    this.title = item.title
                }
            }
        },
        created() {
            //let socket = new WebSocket("ws://162.243.241.68:8000/songrequest/");

            /*socket.onmessage = function (e) {
                this.lines.push(e.data);
                this.$nextTick(function () {
                    if (this.autoScroll) {
                        this.container.scrollTop = this.container.scrollHeight;
                    }
                });
            }.bind(this);*/

            setTimeout(function () {
                if (this.playlist) {
                    if (this.playlist.length > 0) {
                        this.listReady = true;
                        let item = this.getRandomItem();
                        this.updateVideo(item)
                    } else {
                        this.listEmpty = true
                    }
                } else {
                    //AlertError('Playlist timed out ...')
                }
            }.bind(this), 1000)
        }
    }
</script>

<style>

</style>