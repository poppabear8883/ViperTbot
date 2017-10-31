<template>
    <widget wid-id="58375"
            color="purple"
            :fullscreen="true">
        <div slot="title">Twitch Events</div>
        <div slot="icon">
            <!-- add a icon example: <i class="fa fa-comments txt-color-white"></i> -->
        </div>

        <div slot="toolbars">
            <!-- all your toolbars can go here -->
        </div>
        <!-- end toolbars -->

        <div slot="body">
            <!-- MAIN CONTAINER -->
            <div class="row">
                <textarea class="ws-output" rows="20" readonly></textarea>
            </div>
        </div>
        <!-- end body -->
    </widget>
</template>
<style>
    .ws-output {
        font-family:Courier,serif;
        margin-left: 15px;
        padding: 5px;
        width: 95%;
        background-color: #000000;
        color: #FFFFFF;
    }
</style>
<script>
    import Widget from './Widget.vue'
    import { TwitchPubSub } from '../../webhooks/TwitchPubSub'

    export default {
        props: {
            channelId: {required: true},
            token: {required: true}
        },

        data() {
            return {

            }
        },

        components: {
            Widget
        },

        methods: {
            listenTwitchEvents() {
                let tl = new TwitchPubSub('whispers', this.channelId, this.token);
                tl.connect();
            }
        },
        computed: {

        },
        created() {
            this.listenTwitchEvents();
        }
    }
</script>