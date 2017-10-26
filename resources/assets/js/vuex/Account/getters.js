export function getUser(state) {
    return state.user
}

export function getAccessToken(state) {
    return state.user.access_token;
}

export function getChannel(state) {
    return state.channel
}

export function getChannelId(state) {
    return state.channel._id;
}

export function getFollowing(state) {
    return state.following;
}
