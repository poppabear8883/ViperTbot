import * as types from './mutation-types'
import * as getters from './getters'
import * as actions from './actions'

export default {

    state: {
        songs: [],
        reqsongs: []
    },

    getters,

    actions,

    mutations: {
        [types.SET_SONGS] (state, song) {
            state.songs = song
        },

        [types.ADD_SONG] (state, song) {
            state.songs.push(song)
        },

        [types.UPDATE_SONG] (state, song) {
            if (song) {
                for (let i in state.songs) {
                    if (state.songs[i].video_id === song.video_id) {
                        state.songs.splice(i, 1, song);
                        break
                    }
                }
            }
        },

        [types.DELETE_SONG] (state, video_id) {
            for (let i in state.songs) {
                if (state.songs[i].video_id === video_id) {
                    state.songs.splice(i, 1);
                    break
                }

            }
        },

        /**
         * Requested Songs
         */

        [types.SET_REQSONGS] (state, song) {
            state.reqsongs = song
        },

        [types.ADD_REQSONG] (state, song) {
            state.reqsongs.push(song)
        },

        [types.UPDATE_REQSONG] (state, song) {
            if (song) {
                for (let i in state.reqsongs) {
                    if (state.reqsongs[i].video_id === song.video_id) {
                        state.reqsongs.splice(i, 1, song);
                        break
                    }
                }
            }
        },

        [types.DELETE_REQSONG] (state, video_id) {
            for (let i in state.reqsongs) {
                if (state.reqsongs[i].video_id === video_id) {
                    state.reqsongs.splice(i, 1);
                    break
                }

            }
        }
    }
};