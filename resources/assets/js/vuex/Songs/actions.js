
export function getSongs(context, user_id) {
    return new Promise((resolve, reject) => {
        axios.get('/api/songs', {
            params: {
                'user_id': user_id
            }
        }).then((response) => {
            context.commit('SET_SONGS', response.data);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function addSong(context, payload) {
    return new Promise((resolve, reject) => {
        axios.post('/api/songs', {
            'video_id': payload.video_id,
            'playlist_id': payload.playlist_id
        }).then((response) => {

            if (response.data.length > 0) {

                _.forEach(response.data, (song) => {

                    context.commit('ADD_SONG', {
                        song: song,
                        playlist_id: payload.playlist_id
                    });

                });
            }

            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function updateSong(context, id) {
    context.commit('UPDATE_SONG', id)
}

export function deleteSong(context, payload) {
    return new Promise((resolve, reject) => {
        axios.delete('/api/songs', {
            params: {
                playlist_id: payload.playlist_id,
                video_id: payload.video_id
            }
        }).then((response) => {
            context.commit('DELETE_SONG', {
                playlist_id: payload.playlist_id,
                video_id: payload.video_id,
            });

            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

/**
 * Requested Songs
 */

export function getReqSongs(context, user_id) {
    return new Promise((resolve, reject) => {
        axios.get('/api/reqsongs', {
            params: {
                user_id: user_id
            }
        }).then((response) => {
            context.commit('SET_REQSONGS', response.data);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function addReqSong(context, payload) {
    return new Promise((resolve, reject) => {
        axios.post('/api/reqsongs', {
            'user_id': payload.user_id,
            'video_id': payload.video.id.videoId,
            'title': payload.video.snippet.title,
            'requested_by': payload.username
        }).then((response) => {
            context.commit('ADD_REQSONG', response.data);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function updateReqSong(context, id) {
    context.commit('UPDATE_REQSONG', id)
}

export function deleteReqSong(context, videoId) {
    return new Promise((resolve, reject) => {
        axios.delete('/api/reqsongs', {
            params: {
                video_id: videoId
            }
        }).then((response) => {
            context.commit('DELETE_REQSONG', 0);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

/**
 * Playlists
 */
export function getPlaylists(context, user_id) {
    return new Promise((resolve, reject) => {
        axios.get('/api/playlists', {
            params: {
                user_id: user_id
            }
        }).then((response) => {
            context.commit('SET_PLAYLISTS', response.data);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function addPlaylist(context, payload) {
    return new Promise((resolve, reject) => {
        axios.post('/api/playlists', {
            name: payload.name,
            user_id: payload.user_id
        }).then((response) => {
            context.commit('ADD_PLAYLIST', response.data);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function updatePlaylist(context, playlist) {
    context.commit('UPDATE_PLAYLIST', playlist)
}

export function deletePlaylist(context, payload) {
    return new Promise((resolve, reject) => {
        axios.delete('/api/playlists', {
            params: {
                id: payload.id
            }
        }).then((response) => {
            context.commit('DELETE_PLAYLIST', payload.id);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}


