
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
