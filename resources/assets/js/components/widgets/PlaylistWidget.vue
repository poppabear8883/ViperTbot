<template>
    <widget wid-id="68244"
            :fullscreen="true">

        <div slot="title">Playlist</div>

        <div slot="icon">
            <i class="fa fa-music txt-color-white"></i>
        </div>

        <div slot="toolbars">
            <!-- all your toolbars can go here -->
        </div>
        <!-- end toolbars -->

        <div slot="body">
            <!-- MAIN CONTAINER -->
            <div class="alert alert-info no-margin fade in">
                <button class="close" data-dismiss="alert">
                    ×
                </button>
                <i class="fa-fw fa fa-info"></i>
                Playlist Widget v1.0 Beta
            </div>

            <div class="widget-body-toolbar">

                <div class="row">

                    <div class="col-xs-2 col-sm-6 col-md-6 col-lg-6">
                        <select class="form-control" v-model="formModel.playlist">
                            <option v-for="playlist in playlists"
                                    :value="playlist">
                                {{ playlist.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-xs-2 col-sm-6 col-md-6 col-lg-6">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-music"></i>
                            </span>

                            <input type="text"
                                   class="form-control"
                                   @keydown.enter.prevent="addNewPlaylist()"
                                   v-model="formModel.new_playlist"
                                   placeholder="Add New Playlist ...">
                        </div>
                    </div>

                    <div class="col-xs-9 col-sm-12 col-md-12 col-lg-12 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-youtube"></i>
                            </span>

                            <input type="text"
                                   class="form-control"
                                   @keydown.enter.prevent="addNew()"
                                   v-model="formModel.video_id"
                                   placeholder="YouTube ID or URL ...">
                        </div>
                    </div>

                </div>

            </div>

            <div class="custom-scroll table-responsive" style="height:200px; overflow-y: scroll;">

                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="song in songs">
                        <td>{{song.title}}</td>
                        <td>
                            <button @click="confirmDelete(song)" class="btn btn-danger btn-xs">x</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <!-- FOOTER -->
            <footer>

            </footer>

        </div> <!-- end body -->
    </widget>
</template>

<script>
    // https://www.youtube.com/watch?v=8SbUC-UaAxE&list=PL3485902CC4FB6C67

    import Widget from './Widget.vue'
    import * as alerts from '../../utils/alerts'
    import { youtubeParser } from '../../utils/youtube'
    import * as urlParser from 'js-video-url-parser'


    export default{

        components:{
            Widget
        },

        data() {
            return {
                formModel: {
                    title: '',
                    video_id: '',
                    playlist: {},
                    new_playlist: ''
                }
            }
        },
        methods: {
            addNew(e) {
                if (e) e.preventDefault();

                let parse = urlParser.parse(this.formModel.video_id);

                //let parse = youtubeParser(this.formModel.video_id);

                console.log(parse);

                /**
                 * Handle the URL
                 */
                if (parse) {
                    if(parse.list) {
                        this.formModel.video_id = parse.list;
                    } else {
                        this.formModel.video_id = parse.id
                    }
                }

                axios.post('/api/songs', {
                    'action': 'create',
                    'params': {
                        'video_id': this.formModel.video_id,
                        'playlist_id': this.formModel.playlist.id
                    }
                }).then((response) => {

                    if (response.data.length > 0) {

                        _.forEach(response.data, (song) => {
                            this.$store.commit('ADD_SONG', song);
                        });

                        alerts.success('You have successfully added new songs to playlist!');
                    } else {
                        alerts.warning('You already have all these added to the playlist. No songs added!')
                    }

                }, (response) => {
                    console.error('-- ERROR -- ');
                    console.log(response);
                    alerts.error(response);
                });


                this.formModel.video_id = '';
            },

            addNewPlaylist() {
                axios.post('/api/playlists', {
                    'action': 'create',
                    'params': {
                        'name': this.formModel.playlist.name
                    }
                }).then((response) => {
                    this.$store.commit('ADD_PLAYLIST', response.data);
                    this.formModel.playlist = response.data;
                    alerts.success('Successfully added a new Playlist');
                }).catch((error) => {
                    alerts.error(error);
                });

                this.formModel.new_playlist = '';
            },

            showPlaylist() {
                this.$root.showPlaylistModal = true;
            },

            confirmDelete(song) {
                $.SmartMessageBox({
                    title : "Warning!",
                    content : `Are you sure you wish to remove ${song.title} ?`,
                    buttons : '[No][Yes]'
                }, (ButtonPressed) => {
                    if (ButtonPressed === "Yes") {

                        axios.delete('/api/songs', {
                            data: {
                                'action': 'remove',
                                'params': {
                                    'video_id': song.video_id,
                                }
                            }
                        }).then((response) => {

                            this.$store.commit('DELETE_SONG', song.video_id);

                            alerts.success(`You successfully removed the song ${song.title}`);

                        }, (response) => {
                            console.error('!Error!');
                            console.log(response);
                            alerts.error(response);
                        });
                    }
                    if (ButtonPressed === "No") {
                        alerts.canceled();
                    }

                });
            }

        },
        computed: {
            playlists() {
                return this.$store.getters.getPlaylists;
            },

            songs() {
                return this.formModel.playlist.songs;
            }
        },
        created() {
            setTimeout(() => {
                this.formModel.playlist = this.playlists[0];
            }, 1000);
        }
    }
</script>

<style>

</style>