<template>
    <widget wid-id="68244"
            :fullscreen="true">

        <div slot="title">Playlist</div>

        <div slot="icon">
            <i class="fa fa-music txt-color-white"></i>
        </div>

        <div slot="toolbars">
            <div class="widget-toolbar" role="menu">
                <div class="btn-group">
                    <button class="btn dropdown-toggle btn-xs btn-primary" data-toggle="dropdown">
                        Actions <i class="fa fa-caret-down"></i>
                    </button>
                    <ul class="dropdown-menu pull-right">
                        <li>
                            <a href="#" @click.prevent="confirmPlaylistDelete(playlist)">Remove Playlist</a>
                        </li>
                    </ul>
                </div>
            </div>
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
                        <select class="form-control" v-model="playlist">
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
                                   v-model="new_playlist"
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
                                   v-model="video_id"
                                   placeholder="YouTube ID or URL ...">
                        </div>
                    </div>

                    <div class="col-xs-9 col-sm-6 col-md-6 col-lg-6 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-search"></i>
                            </span>

                            <input type="text"
                                   class="form-control"
                                   v-model="searchTerm"
                                   placeholder="Search ...">
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
                title: '',
                video_id: '',
                playlist: {
                    id: 1,
                    name: 'Default Playlist',
                    songs: []
                },
                new_playlist: '',
                searchTerm: ''
            }
        },
        methods: {
            addNew(e) {
                if (e) e.preventDefault();

                let parse = urlParser.parse(this.video_id);

                /**
                 * Handle the URL
                 */
                if (parse) {
                    if(parse.list) {
                        this.video_id = parse.list;
                    } else {
                        this.video_id = parse.id
                    }
                }

                axios.post('/api/songs', {
                    'action': 'create',
                    'params': {
                        'video_id': this.video_id,
                        'playlist_id': this.playlist.id
                    }
                }).then((response) => {

                    if (response.data.length > 0) {

                        _.forEach(response.data, (song) => {

                            this.$store.commit('ADD_SONG', {
                                song: song,
                                playlist_id: this.playlist.id
                            });

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


                this.video_id = '';
            },

            addNewPlaylist() {
                axios.post('/api/playlists', {
                    'action': 'create',
                    'params': {
                        'name': this.new_playlist
                    }
                }).then((response) => {

                    console.log(response);

                    this.$store.commit('ADD_PLAYLIST', response.data);

                    this.playlist = response.data;

                    alerts.success('Successfully added a new Playlist');
                }).catch((error) => {
                    alerts.error(error);
                });

                this.new_playlist = '';
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

                            this.$store.commit('DELETE_SONG', {
                                playlist_id: this.playlist.id,
                                video_id: song.video_id
                            });

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
            },

            confirmPlaylistDelete(playlist) {
                if (playlist.id === 1) {
                    alerts.error('You cannot remove the Default Playlist!');
                    return false;
                }

                $.SmartMessageBox({
                    title : "Warning!",
                    content : `Are you sure you wish to remove ${playlist.name} ?`,
                    buttons : '[No][Yes]'
                }, (ButtonPressed) => {
                    if (ButtonPressed === "Yes") {

                        axios.delete('/api/playlists', {
                            data: {
                                'action': 'remove',
                                'params': {
                                    'id': playlist.id,
                                }
                            }
                        }).then((response) => {

                            this.$store.commit('DELETE_PLAYLIST', playlist.id);

                            this.playlist = this.playlists[0];

                            alerts.success(`You successfully removed the playlist ${playlist.name}`);

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
            },

        },
        computed: {
            playlists() {
                return this.$store.getters.getPlaylists;
            },
            songs() {

                if(this.playlist) {
                    if (this.searchTerm !== '') {
                        return this.playlist.songs.filter((row) => {
                            return Object.keys(row).some((key) => {
                                return String(row[key]).toLowerCase().indexOf(this.searchTerm) > -1
                            })
                        })
                    }

                    return this.playlist.songs;
                }

                return [];
            }
        },
        created() {
            setTimeout(() => {
                console.log('set playlist');
                this.playlist = this.playlists[0];
            }, 1500);
        }
    }
</script>

<style>

</style>