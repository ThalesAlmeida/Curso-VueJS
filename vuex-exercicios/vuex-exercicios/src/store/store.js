import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Maria',
        sobrenome: 'Silva'
    },
    modules: {carrinho, parametros}
})

