<template>
    <widget wid-id="58974"
            color="purple"
            :fullscreen="true">
        <div slot="title">Twitch Chat</div>
        <div slot="icon">
            <!-- add a icon example: <i class="fa fa-comments txt-color-white"></i> -->
        </div>

        <div slot="toolbars">
            <!-- all your toolbars can go here -->
        </div>
        <!-- end toolbars -->

        <div slot="body">
            <!-- MAIN CONTAINER -->
            <div class="panel panel-default">
                <div class="panel-body">
                    <iframe v-if="TwitchURL"
                            frameborder="0"
                            scrolling="no"
                            id="chat_embed"
                            :src="TwitchURL"
                            height="410"
                            width="100%"
                    ></iframe>
                </div>
            </div>
        </div>
        <!-- end body -->
    </widget>
</template>
<style>

</style>
<script>
    import Widget from './Widget.vue'

    export default{
        props: {
            username: {
                required: true
            }
        },
        components:{
            Widget
        },
        methods: {

        },
        computed: {
            /**
             * @return {string}
             */
            TwitchURL: function() {
                if(this.username !== null) {
                    return 'http://www.twitch.tv/'+this.username+'/chat'
                }

                return null
            },
        }
    }
</script>