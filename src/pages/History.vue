<template>
    <DefaultLayout>
        <h1>History</h1>
    </DefaultLayout>
</template>
<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { store } from '../store'
export default {
    components: {
        DefaultLayout,
    },
    data() {
        return {
            store: store
        }
    },
    methods: {
        currentPageId() {
            this.store.pageId = 1;
        }
    },
    mounted() {
        this.currentPageId(),
        console.log(store.pageId)
    }
}
</script>
<style></style>