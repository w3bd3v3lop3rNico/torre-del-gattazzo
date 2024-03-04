import { reactive } from 'vue';

export const store = reactive({
    pageId: [],
    headerPages: [
        {
            name: 'home',
            text: 'Home',
        },
        {
            name: 'history',
            text: 'Storia',
        },
        {
            name: 'products',
            text: 'Prodotti',
        },
        {
            name: 'events',
            text: 'Eventi',
        },
        {
            name: 'contacts',
            text: 'Contatti',
        },
    ],
})