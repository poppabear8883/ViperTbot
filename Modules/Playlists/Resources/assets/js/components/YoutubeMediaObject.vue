<template>
    <div class="row">

        <div class="col-md-4">
            <div class="form-group">
                <div class="input-group">
                    <select class="form-control" v-model="playlist">
                        <option v-for="playlist in playlists"
                                :value="playlist">
                            {{ playlist.name }}
                        </option>
                    </select>

                    <div class="input-group-btn">
                        <button class="btn btn-primary" @click="add()">
                            <i class="fa fa-plus"></i>
                            <span class="hidden-mobile">
                                    Add
                                </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <button class="btn btn-default btn-sm pull-right" @click="request()">
                <i class="fa fa-plus"></i>
                <span class="hidden-mobile">
                        Request
                    </span>
            </button>
        </div>

        <div class="col-md-12">
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object"
                             :src="video.snippet.thumbnails.default.url"
                             :alt="video.snippet.title">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{video.snippet.title}}</h4>
                    {{video.snippet.description}}

                    <h5 v-if="itemCount > 0">{{itemCount}} Video's</h5>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import * as alerts from 'Utilities/alerts';

    export default {
        props: ['video'],
        data() {
            return {
                playlist: {},
                itemCount: 0
            }
        },
        watch: {
            video() {
                this.itemCount = 0;

                this.getItemCount();
            }
        },
        computed: {
            playlists() {
                return this.$store.getters.getPlaylists;
            },
            user() {
                return this.$store.getters.getUser;
            }
        },
        methods: {
            add() {
                $.SmartMessageBox({
                    title: "Warning!",
                    content: `Add to the ${this.playlist.name} playlist ?`,
                    buttons: '[No][Yes]'
                }, (ButtonPressed) => {
                    if (ButtonPressed === "Yes") {
                        let _id = '';

                        if (this.video.id.playlistId) {
                            _id = this.video.id.playlistId;
                        } else {
                            _id = this.video.id.videoId
                        }

                        axios.post('/api/v2/songs', {
                            'video_id': _id,
                            'playlist_id': this.playlist.id
                        }).then((response) => {

                            if (response.data.length > 0) {

                                _.forEach(response.data, (song) => {

                                    this.$store.commit('ADD_SONG', {
                                        song: song,
                                        playlist_id: this.playlist.id
                                    });

                                });

                                alerts.success('You have successfully added new songs to playlist!');
                                this.$emit('added');
                            }

                        }).catch((error) => {
                            console.log(error);
                            alerts.error(error.response);
                        });
                    }
                    if (ButtonPressed === "No") {
                        alerts.canceled();
                    }

                });
            },

            request() {
                $.SmartMessageBox({
                    title: "Warning!",
                    content: `Add to Requested Songs ?`,
                    buttons: '[No][Yes]'
                }, (ButtonPressed) => {
                    if (ButtonPressed === "Yes") {

                        if (this.video.id.playlistId) {
                            alerts.error('You cannot add a playlist to the requested songs');
                            return;
                        }

                        axios.post('/api/v2/requestedsongs', {
                            'video_id': this.video.id.videoId,
                            'title': this.video.snippet.title,
                            'requested_by': this.user.username
                        }).then((response) => {
                            console.log(response.data);

                            this.$store.commit('ADD_REQSONG', response.data);


                            alerts.success('Successfully added requested song!');
                            this.$emit('added');

                        }).catch((error) => {
                            console.log(error);
                            alerts.error(error.response);
                        });
                    }
                    if (ButtonPressed === "No") {
                        alerts.canceled();
                    }

                });
            },

            getItemCount() {
                if (this.video.id.playlistId) {
                    axios.get('/api/v2/playlists/youtube/playlist', {
                        params: {
                            id: this.video.id.playlistId
                        }
                    }).then((response) => {
                        this.itemCount = response.data.contentDetails.itemCount;
                    }).catch((error) => {
                        console.error(error.response);
                        alerts.error(error.response);
                    });
                }
            }
        },
        created() {
            let setup = setInterval(() => {
                if (this.playlists[0]) {
                    this.playlist = this.playlists[0];
                    clearInterval(setup);
                }
            }, 1000);

            this.getItemCount();
        }
    }
</script>