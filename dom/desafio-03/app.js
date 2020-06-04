new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor > 37 ? 'Maior que 37': 'Menor que 37'
        }
    },
    watch:{
        valor(){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});