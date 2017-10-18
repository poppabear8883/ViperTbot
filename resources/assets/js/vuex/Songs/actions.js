
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

export function addSong(context, data) {
    context.commit('ADD_SONG', data)
}

export function updateSong(context, id) {
    context.commit('UPDATE_SONG', id)
}

export function deleteSong(context, id) {
    context.commit('DELETE_SONG', id)
}

/**
 * Requested Songs
 */

export function getReqSongs(context, user_id) {
    return new Promise((resolve, reject) => {
        axios.get('/api/reqsongs', {
            params: {
                'user_id': user_id
            }
        }).then((response) => {
            context.commit('SET_REQSONGS', response.data);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function addReqSong(context, data) {
    context.commit('ADD_REQSONG', data)
}

export function updateReqSong(context, id) {
    context.commit('UPDATE_REQSONG', id)
}

export function deleteReqSong(context, videoId) {
    return new Promise((resolve, reject) => {
        axios.delete(`/api/reqsongs/${videoId}`).then((response) => {
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
                'user_id': user_id
            }
        }).then((response) => {
            context.commit('SET_PLAYLISTS', response.data);
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export function addPlaylist(context, playlist) {
    context.commit('ADD_PLAYLIST', playlist)
}

export function updatePlaylist(context, playlist) {
    context.commit('UPDATE_PLAYLIST', playlist)
}

export function deletePlaylist(context, playlist) {
    context.commit('DELETE_PLAYLIST', playlist)
}


