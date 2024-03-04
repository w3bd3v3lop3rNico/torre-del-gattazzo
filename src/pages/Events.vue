<template>
    <DefaultLayout>
        <h1>Events</h1>
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
            this.store.pageId = 3;
        }
    },
    mounted() {
        this.currentPageId()
        console.log(store.pageId)
    }
}
</script>
<style></style>