<template>
    <DefaultLayout>
        <div >
            <ul>
                <li class="carousel-img">
                    <img src="/imgs/logos/logo-gattazzo-laser.png" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
                <li>
                    <img src="" alt="">
                </li>
            </ul>

        </div>
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