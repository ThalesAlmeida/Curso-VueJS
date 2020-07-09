export default {
    state: {
        quantidade: 5,
        preco: 12,
        
    },
    mutations: {

        setQuantidade(state, payload){
            state.quantidade = payload
        },

        setPreco(state, payload){
            state.preco = payload
        },
    },

}