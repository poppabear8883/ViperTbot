<template>
    <modal title="Add A Song To Playlist" effect="fade/zoom"
           :value="show"
           @ok="addNew"
           @cancel="cancelNew"
    >
        <form>
            <!-- row -->
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <input class="form-control"
                               type="text"
                               @keydown.enter.prevent="addNew()"
                               v-model="formModel.video_id"
                               placeholder="YouTube ID or URL ..."
                               required
                        />
                    </div>
                </div>
            </div>
        </form>
    </modal>
</template>
<style>

</style>
<script>
    import Modal from './Modal.vue'

    /*import {
        AlertSuccess,
        AlertError
    } from '../../modules/alerts'*/

    export default {

        data: function () {
            return {
                show: false,
                formModel: {
                    title: "",
                    video_id: ''
                }
            }
        },
        components: {
            Modal
        },
        methods: {
            addNew(e) {
                if (e) e.preventDefault();
                let parse = this.youtubeParser(this.formModel.video_id);

                if (parse) {
                    this.formModel.video_id = parse
                }

                this.setVideoTitle(this.formModel.video_id);

                /*setTimeout(function () {
                    console.log(this.formModel.title);
                    this.$http.post(window.location.origin + '/api/playlists/create/', this.formModel).then(function (response) {
                        this.addToPlaylist(response.data)
                        AlertSuccess("Song Added!")
                        this.clearFields()
                    }.bind(this)).catch(function (response) {
                        AlertError(response.data.error, response.statusText, response.status)
                    });
                }.bind(this), 500);*/

                this.show = false;
            },
            youtubeParser(url) {
                let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                let match = url.match(regExp);
                return (match && match[7].length === 11) ? match[7] : false;
            },
            setVideoTitle(id) {
                // https://www.googleapis.com/youtube/v3/videos
                let data = {
                    key: 'AIzaSyBmYWnFeDuz9cnbUsIbd2pSfMwQTEjXcdU',
                    fields: 'items(snippet(title))',
                    part: 'snippet',
                    id: id
                };

                /*this.$http.get('https://www.googleapis.com/youtube/v3/videos', {params: data}).then(function (response) {
                    var data = $.parseJSON(response.data)
                    this.formModel.title = data.items[0].snippet.title
                }.bind(this)).catch(function (response) {
                    AlertError(response.data.error, response.statusText, response.status)
                });*/
            },
            cancelNew(e) {
                this.clearFields();
                this.show = false;
            },
            clearFields() {
                for (let item in this.formModel) {
                    this.formModel[item] = ''
                }
            }
        },
        created() {

        }
    }
</script>