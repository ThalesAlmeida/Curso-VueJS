new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Botão clicado')
        },
        exibirComValor(event){
            this.valor = event.target.value
        }
    }
})