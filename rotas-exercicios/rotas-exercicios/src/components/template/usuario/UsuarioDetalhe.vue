<template>
  <div class="usuario-detalhe">
      <h3>Usuário detalhe</h3>
      <hr>
      <p>Código {{id}}</p>
      <router-link tag="button" primario
        :to="{name:'editarUsuario', params: {id},
        query: {completo:true, lingua: 'pt'},
        hash:'#rodape'}">
          Editar
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    // data(){
    //     return {
    //         id:this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to){
    //         this.id = to.params.id
    //     }
    // },

}
</script>

<style>

</style>