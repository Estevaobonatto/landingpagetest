import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './views/MainPage.vue'
import Sobre from './views/Sobre.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: './',
        name: 'mainpage',
        component: MainPage
    },
    {
        path: './sobre',
        name: 'sobre',
        component: Sobre
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, // Use a variável de ambiente para a base
    routes
})

export default router