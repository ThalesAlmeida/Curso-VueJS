import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'
import Usuario from './components/template/usuario/Usuario'

import UsuarioLista from './components/template/usuario/UsuarioLista'
import UsuarioDetalhe from './components/template/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/template/usuario/UsuarioEditar'



Vue.use(Router)

const UsuarioEditar = () => import ('./components/template/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, savePosition){
        if(savePosition){
            return savePosition
        }
        if(toString.hash){
            return {selector:to.hash}
        }

    },
    routes: [{
        name:'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu,
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        props:true,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        children: [
            {path:'', component:UsuarioLista},
            {path:':id', component:UsuarioDetalhe, props:true},
            {path:':id/editar', component:UsuarioEditar, props:true,
                name:"editarUsuario"},
        ]
    },{
        path: '/redirecionar',
        redirect: '/usuario'
    },{
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log("antes das rotas ->global")
    next()

})

export default router