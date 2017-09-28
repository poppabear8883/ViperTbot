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

            <form class="smart-form">
                <header>
                    Playlist
                </header>

                <fieldset>
                    <section>
                        <label class="input">
                            <i class="icon-append fa fa-youtube"></i>

                            <input type="text"
                                   v-model="formModel.video_id"
                                   placeholder="YouTube ID or URL ...">

                            <b class="tooltip tooltip-bottom-right">
                                YouTube ID or URL ...
                            </b>
                        </label>
                    </section>
                </fieldset>

                <footer>
                    <button @click.prevent="showPlaylist()" class="btn btn-default">
                        <i class="fa fa-music"></i>
                        Playlist
                    </button>
                    <button v-if="formModel.video_id != ''" @click.prevent="addNew()" class="btn btn-primary">
                        <i class="fa fa-plus"></i>
                        Add
                    </button>
                </footer>

            </form>

        </div>

        <!-- end body -->
    </widget>
</template>

<script>
    import Widget from './Widget.vue'
    import * as alerts from '../../utils/alerts'

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

                let parse = this.youtubeParser(this.formModel.video_id);

                if (parse) {
                    this.formModel.video_id = parse
                }

                axios.post('/api/playlist', {
                    'action': 'create',
                    'params': {
                        'video_id': this.formModel.video_id,
                    }
                }).then((response) => {

                    this.$store.commit('ADD_SONG', response.data);

                    this.clearFields();

                    alerts.success('You have successfully added a new song to playlist!');

                }, (response) => {
                    console.error('-- ERROR -- ');
                    console.log(response);
                    alerts.error(response);

                    this.clearFields();
                });
            },

            youtubeParser(url) {
                let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                let match = url.match(regExp);
                return (match && match[7].length === 11) ? match[7] : false;
            },

            clearFields() {
                for (let item in this.formModel) {
                    this.formModel[item] = ''
                }
            },

            showPlaylist() {
                this.$root.showPlaylistModal = true;
            }

        },
        computed: {

        },
        created() {

        }
    }
</script>

<style>

</style>