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

    export default {
        props: {
            token: {type: String, required: true},
            channelId: {type: String, required: true},
        },

        data() {
            return {
                ws: null
            }
        },

        components: {
            Widget
        },

        methods: {
            getWhisper(data) {
                return {
                    message: JSON.parse(data.data.message).data_object.body
                }
            },
            nonce(length) {
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            },
            heartbeat() {
                let message = {
                    type: 'PING'
                };
                $('.ws-output').append('SENT: ' + JSON.stringify(message) + '\n');
                this.ws.send(JSON.stringify(message));
            },
            listen(topic) {
                let message = {
                    type: 'LISTEN',
                    nonce: this.nonce(15),
                    data: {
                        topics: [topic],
                        auth_token: this.token
                    }
                };
                $('.ws-output').append('SENT: ' + JSON.stringify(message) + '\n');
                this.ws.send(JSON.stringify(message));
            },
            connect() {
                let heartbeatInterval = 1000 * 60; //ms between PING's
                let reconnectInterval = 1000 * 3; //ms to wait before reconnect
                let heartbeatHandle;

                this.ws = new WebSocket('wss://pubsub-edge.twitch.tv');

                this.ws.onopen = function (event) {
                    $('.ws-output').append('INFO: Socket Opened\n');

                    this.listen(`whispers.${this.channelId}`);

                    this.heartbeat();

                    heartbeatHandle = setInterval(this.heartbeat(), heartbeatInterval);
                }.bind(this);

                this.ws.onerror = function (error) {
                    $('.ws-output').append('ERR:  ' + JSON.stringify(error) + '\n');
                };

                this.ws.onmessage = function (event) {
                    let data = JSON.parse(event.data);

                    if (data.type === 'RECONNECT') {
                        $('.ws-output').append('INFO: Reconnecting...\n');
                        setTimeout(this.connect(), reconnectInterval);
                    }

                    if (data.type === 'MESSAGE') {
                        console.log(JSON.parse(data.data.message).data_object);
                        $('.ws-output').append(`RECV: ${this.getWhisper(data).message} \n`);
                    }

                }.bind(this);

                this.ws.onclose = function () {
                    $('.ws-output').append('INFO: Socket Closed\n');
                    clearInterval(heartbeatHandle);

                    $('.ws-output').append('INFO: Reconnecting...\n');
                    setTimeout(this.connect(), reconnectInterval);
                }.bind(this);

            }
        },

        created() {
            this.connect();
        }
    }
</script>