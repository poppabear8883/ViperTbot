
export function getAccount(context, payload) {
    return new Promise((resolve, reject) => {
        axios.get('/api/user').then((response) => {
            context.commit('SET_USER', response.data.account);
            context.commit('SET_CHANNEL', response.data.channel);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function getFollowings(context, payload) {
    return new Promise((resolve, reject) => {
        axios.get('/api/twitch/following').then((response) => {
            context.commit('SET_FOLLOWING', {
                total: response.data._total,
                streams: response.data.follows,
                online: {
                    total: response.data.online._total,
                    streams: response.data.online.streams
                }
            });
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}