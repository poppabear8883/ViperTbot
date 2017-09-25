import * as alerts from '../utils/alerts'

export class TwitchListener {

    constructor(topic, channel_id, access_token) {
        this.topic = topic;
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
    }

    connect() {
        let heartbeatInterval = 1000 * 60; //ms between PING's
        let reconnectInterval = 1000 * 3; //ms to wait before reconnect
        let heartbeatHandle;

        this.ws = new WebSocket('wss://pubsub-edge.twitch.tv');

        this.ws.onopen = (event) => {
            this.listen(`${this.topic}.${this.channel_id}`);
            this.heartbeat();
            heartbeatHandle = setInterval(this.heartbeat(), heartbeatInterval);
            console.log(`Listening to ${this.topic} with channel id ${this.channel_id}`);

            //alerts.success('Connected to wss://pubsub-edge.twitch.tv')
        };

        this.ws.onerror = (error) => {
            console.error(error);
            alerts.error(error)
        };

        this.ws.onmessage = (event) => {
            this.data = JSON.parse(event.data);

            if (this.data.type === 'RECONNECT') {
                console.log(`Reconnecting to ${this.topic} with channel id ${this.channel_id}`);
                setTimeout(this.connect(), reconnectInterval);
            }

            if (this.data.type === 'MESSAGE') {
                //console.log(this.data);
                console.log(this.data);

                let msg = this.getDataObj().body;
                let from_id = this.getDataObj().from_id;
                let from = this.getDataObj().tags.display_name;

                if (from_id != this.channel_id)
                {
                    alerts.whisper(from, msg);
                }
            }
        };

        this.ws.onclose = () => {
            //console.log(`Closed connection to ${this.topic} with channel id ${this.channel_id}`);
            clearInterval(heartbeatHandle);
            setTimeout(this.connect(), reconnectInterval);
        };

    }

    getDataObj() {
        return JSON.parse(this.data.data.message).data_object;
    }

    getWhisper() {
        return this.getDataObj().body;
    }

    getRecipient() {
        return this.getDataObj().recipient.display_name;
    }
}

