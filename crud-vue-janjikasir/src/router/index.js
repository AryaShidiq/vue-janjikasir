//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'kategori.index',
        component: () => import( /* webpackChunkName: "kategori.index" */ '@/views/kategori/IndexPost.vue')
    },
    {
        path: '/create',
        name: 'kategori.create',
        component: () => import( /* webpackChunkName: "kategori.create" */ '@/views/kategori/CreatePost.vue')
    },
    {
        path: '/edit/:id',
        name: 'kategori.edit',
        component: () => import( /* webpackChunkName: "kategori.edit" */ '@/views/kategori/EditPost.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router