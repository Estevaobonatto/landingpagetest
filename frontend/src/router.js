import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import Sobre from './components/Sobre.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: './components/MainPage.vue',
        name: 'mainpage',
        component: MainPage
    },
    {
        path: './components/Sobre.vue',
        name: 'sobre',
        component: Sobre
    }
]

const router = new VueRouter({
mode: 'history',
base: 'http://localhost:5173',
routes
})

export default router