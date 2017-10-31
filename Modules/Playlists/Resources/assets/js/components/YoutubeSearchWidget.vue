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

                    <div class="col-xs-9 col-sm-4 col-md-4 col-lg-4 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-youtube"></i>
                            </span>

                            <input type="text"
                                   class="form-control"
                                   v-model="term"
                                   placeholder="Search ..."
                                   @keydown.enter.prevent="search()">
                        </div>
                    </div>

                    <div class="col-xs-9 col-sm-4 col-md-4 col-lg-4 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-cog"></i>
                            </span>

                            <select class="form-control" v-model="type">
                                <option v-for="type in types"
                                        :value="type">
                                    {{ type }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-xs-9 col-sm-4 col-md-4 col-lg-4 padding-top-10">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-hashtag"></i>
                            </span>

                            <select class="form-control" v-model="limit">
                                <option v-for="limit in ['5', '10', '20']"
                                        :value="limit">
                                    {{ limit }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>

            <div class="custom-scroll table-responsive" style="max-height:300px; overflow-y: scroll;">

                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="videos.length > 0" v-for="video in videos">
                        <td>
                            <youtube-media-object :video="video" @added="reset()"></youtube-media-object>
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
    import Widget from 'Core/components/widget/Widget.vue';
    import * as alerts from 'Core/utils/alerts';

    import YoutubeMediaObject from './YoutubeMediaObject.vue';

    export default {
        data() {
            return {
                limit: 5,
                term: '',
                type: 'video',
                types: [
                    'video',
                    'playlist'
                ],
                videos: [],
                video: {},
            }
        },
        components: {
            Widget,
            YoutubeMediaObject
        },
        methods: {
            search() {
                if (this.term.length > 2) {
                    axios.get('/api/playlists/youtube/search', {
                        params: {
                            'term': this.term,
                            'type': this.type,
                            'limit': this.limit
                        }
                    }).then((response) => {
                        this.videos = response.data;
                    }).catch((error) => {
                        alerts.error(error.response)
                    });
                } else {
                    this.videos = [];
                }
            },
            reset() {
                this.limit = 5;
                this.term = '';
                this.type = 'video';
            }
        }
    }
</script>
<style>

</style>