
export function setItems(context, items) {
    context.commit('SET_ITEMS', items)
}

export function addItem(context, data) {
    context.commit('ADD_ITEM', data)
}

export function updateItem(context, id) {
    context.commit('UPDATE_ITEM', id)
}

export function deleteItem(context, id) {
    context.commit('DELETE_ITEM', id)
}
