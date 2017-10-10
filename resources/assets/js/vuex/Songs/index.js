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
            state.playlists = playlists
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
            let song = payload.song;

            for (let i in state.playlists) {
                if (state.playlists[i].id === payload.playlist_id) {
                    state.playlists[i].songs.push(song);
                    break
                }
            }

            state.songs.push(song);
        },

        [types.UPDATE_SONG] (state, payload) {
            let song = payload.song;

            if (song) {

                for (let i in state.playlists) {
                    if (state.playlists[i].id === payload.playlist_id) {
                        for (let x in state.playlists[i].songs) {
                            if (state.playlists[i].songs[x].video_id === song.video_id) {
                                state.playlists[i].songs.splice(x, 1, song);
                                break
                            }
                        }

                        break
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
            let video_id = payload.video_id;
            let playlist_id = payload.playlist_id;

            for (let i in state.playlists) {
                if (state.playlists[i].id === playlist_id) {
                    for (let x in state.playlists[i].songs) {
                        if (state.playlists[i].songs[x].video_id === video_id) {
                            state.playlists[i].songs.splice(x, 1);
                            break
                        }
                    }

                    break
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