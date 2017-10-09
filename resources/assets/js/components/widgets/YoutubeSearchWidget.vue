<template>
    <widget wid-id="2362"
            :fullscreen="true">

        <div slot="title">Youtube Search</div>

        <div slot="icon">
            <i class="fa fa-youtube txt-color-white"></i>
        </div>

        <div slot="toolbars">
            <div class="widget-toolbar" role="menu">

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
                Youtube Search Widget v1.0 Beta
            </div>

            <div class="widget-body-toolbar">

                <div class="row">

                    <div class="col-xs-9 col-sm-6 col-md-6 col-lg-6 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-youtube"></i>
                            </span>

                            <input type="text"
                                   class="form-control"
                                   v-model="term"
                                   placeholder="Search ..."
                                   @keydown="search()">
                        </div>
                    </div>

                    <div class="col-xs-9 col-sm-6 col-md-6 col-lg-6 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-cog"></i>
                            </span>

                            <select class="form-control pull-right" v-model="type">
                                <option v-for="type in types"
                                        :value="type">
                                    {{ type }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>

            <div class="custom-scroll table-responsive" style="max-height:300px; overflow-y: scroll;">

                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="videos.length > 0" v-for="video in videos">
                        <td>
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
                                </div>
                            </div>

                            <div class="padding-top-10"></div>

                            <div class="row">
                                <div class="col-md-3">
                                    <select class="form-control pull-right" v-model="playlist">
                                        <option v-for="playlist in playlists"
                                                :value="playlist">
                                            {{ playlist.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-9">
                                    <button class="btn btn-danger pull-left">
                                        <i class="fa fa-plus"></i>
                                        <span class="hidden-mobile">
                                                    Add
                                                </span>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="videos.length <= 0">
                        <td class="text-center">No songs in found.</td>
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
    import Widget from './Widget.vue';
    import * as alerts from '../../utils/alerts'

    export default {
        data() {
            return {
                term: '',
                type: 'video',
                types: [
                    'video',
                    'playlist'
                ],
                videos: [],
                video: {},
                playlist: {
                    id: 1,
                    name: 'Default Playlist',
                }
            }
        },
        components: {
            Widget
        },
        methods: {
            search() {
                if(this.term.length > 3) {
                    axios.get(`/api/v2/playlists/youtube/search`, {
                        params: {
                            'term': this.term,
                            'type': this.type
                        }
                    }).then((response) => {
                        this.videos = response.data;
                    }).catch((error) => {
                        alerts.error(error.response)
                    });
                } else {
                    this.videos = [];
                }
            }
        },
        computed: {
            playlists() {
                return this.$store.getters.getPlaylists;
            }
        }
    }
</script>
<style>

</style>