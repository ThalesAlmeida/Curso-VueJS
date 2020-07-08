<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button @click="exibir=!exibir" variant='primary' class="mb-4">Mostrar mensagem</b-button>
		<!-- <transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>

		<transition
			enter-active-class="animated backInDown"
			leave-active-class="animated backOutDown">
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition> -->
		<!-- <hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{msg}}</b-alert>
		</transition>
		
		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
		:css="false"
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@enter-cancelled="enterCancelled"

		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa">

			</div>
		</transition>
		<hr>
		<AlertaAdvertencia>
		</AlertaAdvertencia>

		<AlertaInfo>
		</AlertaInfo>

		<b-button variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
		<b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
		
		<transition name='fade' mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->
		<hr>
		<b-button @click="add" class="mb-4">
			Adicionar
		</b-button>

		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
			<b-list-group-item @click="remover(i)">
				{{aluno}}
			</b-list-group-item>
			
			</b-list-group>
		</transition-group>

		
		
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
	components: {AlertaAdvertencia, AlertaInfo},
	data (){
		return {
			alunos:['Roberto', 'Julia'],
			msg: 'mensagem pro thiago',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase:0,
			componenteSelecionado: AlertaInfo,
		}
	},

	methods: {
		add(){
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		remover(indice){
			this.alunos.splice(indice, 1)
		},
		beforeEnter(el){
			console.log('beforteEnter')
		},
		enter(el, done){
			let rodada = 1
			const temporizador = setInterval(() =>{
				const novaLargura = this.larguraBase + rodada * 10
				el.style.width = `${novaLargura}px`
				rodada ++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},

		afterEnter(el){
			console.log('AfterEnter')
		},
		enterCancelld(){
			
		},

		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = this.larguraBase
		},
		leave(el, done){
			let rodada = 1
			const temporizador = setInterval(() =>{
				const novaLargura = this.larguraBase - rodada * 10
				el.style.width = `${novaLargura}px`
				rodada ++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},

		afterLeave(el){
			console.log('Afterleave')
		},
		leaveCancelld(){
			console.log("leaveCancelled")
		}

	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to{
	opacity: 0;


}

.fade-enter-active, .fade-leave-active {
	transition:opacity 2s;
}

@keyframes slide-in {
	from {transform: translateY(40px);}
	to {transform:translateY(0)}
}

@keyframes slide-out {
	from {transform: translateY(0);}
	to {transform:translateY(40px)}
}

.slide-enter-active {
	animation: slide-in 2s linear;
	transition:opacity 2s;
}

.slide-leave-active {
	position: absolute;
	widows: 100%;
	animation: slide-out 2s linear;
	transition:opacity 6s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;


}

.slide-move{
	transition: transform 1s;
}

</style>
