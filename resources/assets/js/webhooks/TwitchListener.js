

export class TwitchListener {

    constructor(topic, channel_id, access_token) {
        this.topic = topic;
        this.channel_id = channel_id;
        this.access_token = access_token;
        this.ws = null;
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
            //console.log(`Listening to ${this.topic} with channel id ${this.channel_id}`);
        };

        this.ws.onerror = (error) => {
            console.error(error);
        };

        this.ws.onmessage = (event) => {
            let data = JSON.parse(event.data);

            if (data.type === 'RECONNECT') {
                console.log(`Reconnecting to ${this.topic} with channel id ${this.channel_id}`);
                setTimeout(this.connect(), reconnectInterval);
            }
        };

        this.ws.onclose = () => {
            //console.log(`Closed connection to ${this.topic} with channel id ${this.channel_id}`);
            clearInterval(heartbeatHandle);
            setTimeout(this.connect(), reconnectInterval);
        };

    }
}

