<template>
    <modal effect="fade"
           :value="show"
           :large="true"
           @closed="$emit('closed')">

        <!-- custom header -->
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">
                <i>Requested Playlist</i>
            </h4>
        </div>

        <div class="table-responsive">

            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>By</th>
                        <th>Video ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="song in songs">
                        <td>{{ song.id }}</td>
                        <td v-if="song.title !== ''">
                            {{ song.title }}
                        </td>
                        <td v-else>
                            <i class="text-danger">The song title will be updated shortly ...</i>
                        </td>
                        <td>{{ song.requested_by }}</td>
                        <td>{{ song.video_id }}</td>
                        <td class="text-center">
                            <button @click="confirmDelete(song)" class="btn btn-danger btn-sm">X</button>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>

        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click="$emit('closed')">Exit</button>
        </div>

    </modal>
</template>

<style>

</style>

<script>
    import Modal from './Modal.vue';
    import * as alerts from '../../utils/alerts';

    export default {

        props: {
            show: {
                default: false,
            }
        },

        components: {
            Modal
        },

        computed: {
            songs() {
                return this.$store.getters.getReqSongs;
            }
        },

        methods: {
            confirmDelete(song) {
                $.SmartMessageBox({
                    title : "Warning!",
                    content : `Are you sure you wish to remove ${song.title} ?`,
                    buttons : '[No][Yes]'
                }, function(ButtonPressed) {
                    if (ButtonPressed === "Yes") {

                        axios.delete('/api/reqplaylist', {
                            data: {
                                'action': 'remove',
                                'params': {
                                    'video_id': song.video_id,
                                }
                            }
                        }).then((response) => {

                            this.$store.commit('DELETE_REQSONG', song.video_id);

                            //this.$parent.alertShow('Success', `Successfully removed ${this.item.name} module`);
                            $.smallBox({
                                title : "Success",
                                content : `You successfully removed the song ${song.title}`,
                                color : "#659265",
                                iconSmall : "fa fa-check fa-2x fadeInRight animated",
                                timeout : 4000
                            });

                        }, (response) => {
                            console.error('!Error!');
                            console.log(response);
                            alerts.error(response)
                        });
                    }
                    if (ButtonPressed === "No") {
                        alerts.canceled();
                    }

                }.bind(this));
            }
        }
    }
</script>