import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/chefs',
        name: 'chefs',

        component: () => import(/* webpackChunkName: "chefs" */ '../views/ChefsView.vue'),
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/contacts',
        name: 'contacts',

        component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactsView.vue'),
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/login',
        name: 'login',

        component: () => import(/* webpackChunkName: "login" */ '../views/LoginPageView.vue'),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/dishes',
        name: 'dishes',

        component: () => import(/* webpackChunkName: "dishes" */ '../views/DishesView.vue'),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/cart',
        name: 'cart',

        component: () => import(/* webpackChunkName: "dishes" */ '../views/CartView.vue'),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/:path(.*)*',
        name: 'page-not-found',

        component: () => import(/* webpackChunkName: "dishes" */ '../views/PageNotFound.vue'),
        meta: {
            requiresAuth: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(async (to) => {
    if (to.meta?.requiredAuth) {
        let isAuthenticated = store.state.auth.user

      //   if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')

        if (!isAuthenticated)
            return {
                name: 'login',
                query: { redirect: to.fullPath },
            }
    }
})


export default router
