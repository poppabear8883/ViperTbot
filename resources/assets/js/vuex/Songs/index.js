import * as types from './mutation-types'
import * as getters from './getters'
import * as actions from './actions'

export default {

    state: {
        songs: [],
        reqsongs: [],
        playlists: []
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
        },

        /**
         * Playlists
         */
        [types.SET_PLAYLISTS] (state, playlists) {
            state.playlists =playlists
        },

        [types.ADD_PLAYLIST] (state, playlist) {
            state.playlists.push(playlist)
        },

        [types.UPDATE_PLAYLIST] (state, playlist) {
            if (playlist) {
                for (let i in state.playlists) {
                    if (state.playlists[i].id === playlist.id) {
                        state.playlists.splice(i, 1, playlist);
                        break
                    }
                }
            }
        },

        [types.DELETE_PLAYLIST] (state, id) {
            for (let i in state.playlists) {
                if (state.playlists[i].id === id) {
                    state.playlists.splice(i, 1);
                    break
                }

            }
        }
    }
};