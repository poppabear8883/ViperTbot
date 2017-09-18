
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
