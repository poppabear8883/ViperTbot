<template>
    <div class="row" v-if="pageReady">
        <article class="col-sm-6 sortable-grid ui-sortable">
            <profile-widget></profile-widget>
        </article>

        <article class="col-sm-6 sortable-grid ui-sortable">
            <stream-setup-widget
                    clientId="sbuautwemmz4hr6sbuabyp9bg9uwaav"
            ></stream-setup-widget>
        </article>
    </div>
</template>
<script>
    import StreamSetupWidget from './widgets/StreamSetupWidget.vue';
    import TwitchChatWidget from './widgets/TwitchChatWidget.vue';
    import ProfileWidget from './widgets/ProfileWidget.vue';

    import {mapActions} from 'vuex';
    import pageReadyMixin from './mixins/pageReady';

    export default {
        components: {
            StreamSetupWidget,
            TwitchChatWidget,
            ProfileWidget
        },
        mixins: [pageReadyMixin],
        data() {
            return {}
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            }
        },
        methods: {
//            ...mapActions([
//                'getPlaylists',
//                'getReqSongs',
//            ]),
        },
        created() {
            this.pageReady = true;

            // Get the Playlists with songs
            /*this.getPlaylists(this.user.id).then((response) => {
                // Gets the requested songs
                this.getReqSongs(this.user.id).then((response) => {
                    this.pageReady = true;
                }).catch((error) => {
                    alerts.error(error.response.data)
                });
            }).catch((error) => {
                alerts.error(error.response.data)
            });*/
        },
    }
</script>