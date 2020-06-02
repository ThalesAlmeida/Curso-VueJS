new Vue({
    el: '#desafio',
    data: {
        nome: 'Thales Alves',
        idade: 22,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods:{
        exibirNome: function(){
            return this.nome
        },
        exibirIdade: function(){
            return this.idade
        },
        exibirIdadeMultiply3: function(){
            return this.idade * 3
        },
        randomNumber: function(){
            return Math.random()
        },
        nomeInitial:function(){
            return this.nome
        }
    }

})