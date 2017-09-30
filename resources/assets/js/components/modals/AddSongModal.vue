<template>
    <modal effect="fade"
           :value="show"
           @closed="$emit('closed')">
        <!-- custom header -->
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">
                <i>Add Song To A Playlist</i>
            </h4>
        </div>

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

        <!-- custom buttons -->
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click="cancelNew">Cancel</button>
        </div>
    </modal>
</template>

<style>

</style>

<script>
    import Modal from './Modal.vue'
    import * as alerts from '../../utils/alerts'
    import { youtubeParser } from '../../utils/youtube'

    export default {

        props: ['show'],

        data() {
            return {
                formModel: {
                    title: '',
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
                let parse = youtubeParser(this.formModel.video_id);

                if (parse) {
                    this.formModel.video_id = parse
                }

                axios.post('/api/playlist', {
                    'action': 'create',
                    'params': {
                        'video_id': this.formModel.video_id,
                    }
                }).then((response) => {

                    alerts.success('You have successfully added a new song to playlist!');

                    this.$store.commit('ADD_SONG', response.data);

                    this.$emit('closed', this.show);
                    this.clearFields();

                }, (response) => {
                    console.error('-- ERROR -- ');
                    console.log(response);
                    alerts.error(response);

                    this.$emit('closed', this.show);
                    this.clearFields();
                });
            },

            cancelNew(e) {
                this.clearFields();
                this.$emit('closed', this.show)
            },

            clearFields() {
                for (let item in this.formModel) {
                    this.formModel[item] = ''
                }
            }
        }
    }
</script>