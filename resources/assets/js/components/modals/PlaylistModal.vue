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
                        <th>ID</th>
                        <th>Title</th>
                        <th>Video ID</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="song in playlist">
                        <td>{{ song.id }}</td>
                        <td>{{ song.title }}</td>
                        <td>{{ song.video_id }}</td>
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
    import Modal from './Modal.vue'

    export default {

        props: {
            show: {
                default: false,
            },
            playlist: {
                required: true
            }
        },

        data() {
            return {

            }
        },

        components: {
            Modal
        },

        methods: {

        }
    }
</script>