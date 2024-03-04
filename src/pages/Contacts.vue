<template>
    <DefaultLayout>
        <h1>Contatti</h1>
    </DefaultLayout>
</template>
<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { store } from '../store';

export default {
    components: {
        DefaultLayout,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        currentPageId() {
            this.store.pageId = 4;
        }
    },
    mounted() {
        this.currentPageId()
    }
}
</script>