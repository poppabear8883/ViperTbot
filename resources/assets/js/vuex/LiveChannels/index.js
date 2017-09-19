import * as types from './mutation-types'
import * as getters from './getters'
import * as actions from './actions'

export default {

    state: {
        items: []
    },

    getters,

    actions,

    mutations: {
        [types.SET_ITEMS] (state, item) {
            state.items = item
        },

        [types.ADD_ITEM] (state, item) {
            state.items.push(item)
        },

        [types.UPDATE_ITEM] (state, item) {
            if (item) {
                for (let i in state.items) {
                    if (state.items[i].id === item.id) {
                        state.items.splice(i, 1, item);
                        break
                    }
                }
            }
        },

        [types.DELETE_ITEM] (state, id) {
            for (let i in state.items) {
                if (state.items[i].id === id) {
                    state.items.splice(i, 1);
                    break
                }

            }
        }
    }
};