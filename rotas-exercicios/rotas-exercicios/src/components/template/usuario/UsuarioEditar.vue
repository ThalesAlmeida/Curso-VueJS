<template>
  <div class="usuario-editar">
      <h3>Usuário Editar</h3>
      <hr>
      <p>Código {{id}}</p>
      <p>Completo:{{$route.query.completo ? 'Sim': 'Não'}}</p>
      <p>Língua:{{$route.query.lingua}}</p>
      <hr>
      <button@click="confirmou=true" primario>Confirmar</button>

      <div id="rodape">
          <h3>Curso vue</h3>
      </div>
      
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            confirmou: false
        }
    },

    beforeRouteLeave(to, from, next){
        if(this.confirmou){
            next()
        } else{
            if(confirm('Tem certeza')){
                next()
            }else{
                next(false)
            }
        }
    }

}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }

</style>