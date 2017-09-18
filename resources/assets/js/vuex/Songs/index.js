import * as types from './mutation-types'
import * as getters from './getters'
import * as actions from './actions'

export default {

    state: {
        songs: []
    },

    getters,

    actions,

    mutations: {
        [types.SET_SONGS] (state, data) {
            state.songs = data
        },

        [types.ADD_SONG] (state, data) {
            state.songs.push(data)
        },

        [types.UPDATE_SONG] (state, data) {
            if (data) {
                for (let i in state.songs) {
                    if (state.songs[i].id === data.id) {
                        state.songs.splice(i, 1, data);
                        break
                    }
                }
            }
        },

        [types.DELETE_SONG] (state, id) {
            for (let i in state.songs) {
                if (state.songs[i].id === id) {
                    state.songs.splice(i, 1);
                    break
                }

            }
        }
    }
};