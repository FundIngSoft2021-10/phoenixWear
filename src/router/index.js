import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/AboutUs'
import Clothes from '../views/Clothes'
import Contact from '../views/Contact'
import Questions from '../views/Questions'
import Error from '../views/Error404'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: About
    },
    {
        path: '/ropa',
        name: 'Ropa',
        component: Clothes
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contact
    },
    {
        path: '/preguntas',
        name: 'Preguntas',
        component: Questions
    },
    {
        path: '/*',
        name: 'Error',
        component: Error
    },
]

const router = new VueRouter({
    index: "/default.html",
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router