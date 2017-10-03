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
        },

        /**
         * Songs
         */

        [types.SET_SONGS] (state, songs) {
            state.songs = songs;
        },

        [types.ADD_SONG] (state, payload) {
            let index = payload.playlist_id -1;
            let song = payload.song;

            if (index !== null) {
                state.playlists[index].songs.push(song)
            }

            state.songs.push(song);
        },

        [types.UPDATE_SONG] (state, payload) {
            let index = payload.playlist_id -1;
            let song = payload.song;

            if (song) {

                if (index !== null) {
                    for (let i in state.playlists[index].songs) {
                        if (state.playlists[index].songs[i].video_id === song.video_id) {
                            state.playlists[index].songs.splice(i, 1, song);
                            break
                        }
                    }
                }

                for (let i in state.songs) {
                    if (state.songs[i].video_id === song.video_id) {
                        state.songs.splice(i, 1, song);
                        break
                    }
                }
            }
        },

        [types.DELETE_SONG] (state, payload) {
            let index = payload.playlist_id -1;
            let video_id = payload.video_id;

            if (index !== null) {
                for (let i in state.playlists[index].songs) {
                    if (state.playlists[index].songs[i].video_id === video_id) {
                        state.playlists[index].songs.splice(i, 1);
                        break
                    }

                }
            }

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