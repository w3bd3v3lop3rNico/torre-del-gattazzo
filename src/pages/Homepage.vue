<template>
    <DefaultLayout>
        <HeroApp />
        <div class="homepage container">
            <h1>Homepage</h1>
        </div>
        
    </DefaultLayout>
</template>
<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import HeroApp from '../components/HeroApp.vue';
import { store } from '../store';
export default {
    components: {
        DefaultLayout,
        HeroApp,
    },
    data() {
        return {
            store: store
        }
    },
    methods: {
        currentPageId() {
            this.store.pageId = 0;
        }
    },
    mounted() {
        this.currentPageId(),
        console.log(store.pageId)
    }
}
</script>
<style lang="scss" scoped>
@use "../styles/partials/_homepage.scss"
</style>