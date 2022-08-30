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
    },
    {
        path: '/menu',
        name: 'menu.index',
        component: () => import( /* webpackChunkName: "menu.index" */ '@/views/menu/IndexMenu.vue')
    },
    {
        path: '/menucreate',
        name: 'menu.create',
        component: () => import( /* webpackChunkName: "menu.create" */ '@/views/menu/CreateMenu.vue')
    },
    {
        path: '/menuedit/:id',
        name: 'menu.edit',
        component: () => import( /* webpackChunkName: "menu.edit" */ '@/views/menu/EditMenu.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router