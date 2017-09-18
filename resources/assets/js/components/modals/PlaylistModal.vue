<template>
    <modal effect="fade"
           :value="show"
           :large="true"
           @closed="$emit('closed')">

        <!-- custom header -->
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">
                <i>Playlist</i>
            </h4>
        </div>

        <div class="table-responsive">

            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Video ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="song in songs">
                        <td>{{ song.id }}</td>
                        <td>{{ song.title }}</td>
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
                return this.$store.getters.getSongs;
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

                        axios.delete('/api/playlist', {
                            data: {
                                'action': 'remove',
                                'params': {
                                    'video_id': song.video_id,
                                }
                            }
                        }).then((response) => {

                            this.$store.commit('DELETE_SONG', song.video_id);

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