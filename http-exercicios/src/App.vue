<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">
			{{mensagem.texto}}
		</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe o Nome">
				</b-form-input>
			</b-form-group>

			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe o Email">
				</b-form-input>

			</b-form-group>
			<hr>
			<b-button variant="success" @click="salvar">Salvar</b-button>

			<b-button @click="obterUsuarios" variant="primary" class="ml-2">
				Obter usuários
			</b-button>

			<hr>
			Usuários cadastrados

			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="usuario.id">
					{{usuario.email}}
					{{id}}
					<b-button variant="warning" @click="carregar(id)">
					Carregar
					</b-button>
					<b-button variant="danger" @click="excluir(id)">
						Excluir
					</b-button>
				</b-list-group-item>
				
			</b-list-group>

		</b-card>
	</div>
</template>

<script>
export default {
	data(){
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome:'',
				email:'',
			}
		}
	},

	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id){
			this.$http.delete(`/usuario/${id}.json`)
			.then(() => this.limpar())
		},
		salvar(){
			const metodo = this.id ? 'patch': 'post'
			const finalUrl = this.id ? `/${this.id}.json`: '.json'
			this.$http[metodo](`usuario${finalUrl}`, this.usuario)
			.then(_ => {
				this.limpar()
				this.mensagens.push({
					texto: 'Salvo com sucesso',
					variant: 'success'
				})
			})
		},

		obterUsuarios(){
			this.$http.get('usuario.json')
			.then(response => {
				this.usuarios = response.data
			})
		}
	}
	// created(){
	// 	this.$http.post('usuarios.json', {
	// 		nome:'Maria',
	// 		email:'maria@gmail.com'
	// 	}).then(response => console.log(response))
	// }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
