import * as alerts from '../utils/alerts'

export class TwitchPubSub {

    constructor(topics, channel_id, access_token) {
        this.topics = topics;
        this.channel_id = channel_id;
        this.access_token = access_token;

        this.ws = null;
        this.data = null;

    }

    nonce(length) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    heartbeat() {
        let message = {
            type: 'PING'
        };

        this.ws.send(JSON.stringify(message));
    }

    listen(topic) {
        let message = {
            type: 'LISTEN',
            nonce: this.nonce(15),
            data: {
                topics: [topic],
                auth_token: this.access_token
            }
        };

        this.ws.send(JSON.stringify(message));
        console.log(`Listening to ${topic} with channel id ${this.channel_id}`);
    }

    connect() {
        let heartbeatInterval = 1000 * 45; //ms between PING's
        let reconnectInterval = 1000 * 3; //ms to wait before reconnect
        let heartbeatHandle;

        this.ws = new WebSocket('wss://pubsub-edge.twitch.tv');

        this.ws.onopen = (event) => {

            _.forEach(this.topics, (topic) => {
                this.listen(`${topic}.${this.channel_id}`);
            });

            this.heartbeat();
            heartbeatHandle = setInterval(this.heartbeat(), heartbeatInterval);

        };

        this.ws.onmessage = (event) => {
            this.data = JSON.parse(event.data);

            if (this.data.type === 'RECONNECT') {
                console.log(`Reconnecting to ${this.topic} with channel id ${this.channel_id}`);
                setTimeout(this.connect(), reconnectInterval);
            }

            if (this.data.type === 'MESSAGE') {

                switch(this.getMessageData().type) {
                    case 'whisper_received':
                        this.whisperReceived();
                        break;
                }
            }
        };

        this.ws.onclose = () => {
            clearInterval(heartbeatHandle);
            setTimeout(this.connect(), reconnectInterval);
        };

        this.ws.onerror = (error) => {
            console.error(error);
            alerts.error(error)
        };
    }

    whisperReceived() {
        let msg = this.getDataObj().body;
        let from = this.getDataObj().tags.display_name;

        alerts.whisper(from, msg);
    }

    getMessageData() {
        return JSON.parse(this.data.data.message);
    }

    getDataObj() {
        return this.getMessageData().data_object;
    }

    getWhisper() {
        return this.getDataObj().body;
    }

    getRecipient() {
        return this.getDataObj().recipient.display_name;
    }
}

