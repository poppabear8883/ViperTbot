import * as types from './mutation-types'
import * as getters from './getters'
import * as actions from './actions'

export default {

    state: {
        user: {},
        channel: {},
        following: {
            total: 0,
            streams: [],
            online: {
                total: 0,
                streams: []
            },
        }
    },

    getters,

    actions,

    mutations: {
        [types.SET_USER] (state, user) {
            state.user = user
        },

        [types.SET_CHANNEL] (state, channel) {
            state.channel = channel
        },

        [types.SET_FOLLOWING] (state, following) {
            state.following = following;
        }
    }
}