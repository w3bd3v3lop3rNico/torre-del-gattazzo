import { createRouter,createWebHistory } from "vue-router";

import Homepage from './pages/Homepage.vue';
import History from './pages/History.vue';
import Products from './pages/Products.vue';
import Events from './pages/Events.vue';
import Contacts from './pages/Contacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/history',
            name: 'history',
            component: History,
        },
        {
            path: '/products',
            name: 'products',
            component: Products,
        },
        {
            path: '/events',
            name: 'events',
            component: Events,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
    ]
})

export { router }