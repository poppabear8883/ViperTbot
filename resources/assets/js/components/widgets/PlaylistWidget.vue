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

                    <div class="col-xs-9 col-sm-8 col-md-8 col-lg-8">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-youtube"></i>
                            </span>

                            <input type="text"
                                   class="form-control"
                                   v-model="formModel.video_id"
                                   placeholder="YouTube ID or URL ...">                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-4 col-md-4 col-lg-4 text-right">

                        <button v-if="formModel.video_id != ''"
                                @click.prevent="addNew()"
                                class="btn btn-success">

                            <i class="fa fa-plus"></i>
                            <span class="hidden-mobile">Add Song</span>
                        </button>

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
                    video_id: ''
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

                axios.post('/api/playlist', {
                    'action': 'create',
                    'params': {
                        'video_id': this.formModel.video_id,
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


                this.clearFields();
            },

            clearFields() {
                for (let item in this.formModel) {
                    this.formModel[item] = ''
                }
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

                        axios.delete('/api/playlist', {
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
            songs() {
                return this.$store.getters.getSongs;
            }
        },
        created() {

        }
    }
</script>

<style>

</style>