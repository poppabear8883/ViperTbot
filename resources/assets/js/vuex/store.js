import Vue from 'vue'
import Vuex from 'vuex'

import songs from './Songs/index'
import reqsongs from './RequstedSongs/index'

// Make vue aware of Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        songs,
        reqsongs
    }
});