import * as types from './mutation-types'
import * as getters from './getters'
import * as actions from './actions'

export default {

    state: {
        user: {},
        channel: {}
    },

    getters,

    actions,

    mutations: {
        [types.SET_USER] (state, user) {
            state.user = user
        },

        [types.SET_CHANNEL] (state, channel) {
            state.channel = channel
        }
    }
};