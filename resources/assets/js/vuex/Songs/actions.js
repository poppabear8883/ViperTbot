
export function setSongs(context, songs) {
    context.commit('SET_SONGS', songs)
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

export function setReqSongs(context, songs) {
    context.commit('SET_REQSONGS', songs)
}

export function addReqSong(context, data) {
    context.commit('ADD_REQSONG', data)
}

export function updateReqSong(context, id) {
    context.commit('UPDATE_REQSONG', id)
}

export function deleteReqSong(context, id) {
    context.commit('DELETE_REQSONG', id)
}

/**
 * Playlists
 */

export function setPlaylists(context, playlists) {
    context.commit('SET_PLAYLISTS')
}

export function addPlaylist(context, playlist) {
    context.commit('ADD_PLAYLIST')
}

export function updatePlaylist(context, playlist) {
    context.commit('UPDATE_PLAYLIST')
}

export function deletePlaylist(context, playlist) {
    context.commit('DELETE_PLAYLIST')
}


