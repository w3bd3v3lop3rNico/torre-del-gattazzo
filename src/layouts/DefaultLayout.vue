<template>
    <HeaderApp :items="store" @currentPageId="setId"/>
    <main>
        <slot></slot>
    </main>
    <FooterApp />

</template>
<script>
import HeaderApp from '../components/HeaderApp.vue';
import FooterApp from '../components/FooterApp.vue';
import { store } from '../store';
export default {
    components: {
        HeaderApp,
        FooterApp,
    },
    data() {
        return {
            store: store,
        }
    },
    methods: {
        setId(pageId) {
            this.store.pageId = pageId;
        }
    },
    created() {

    },
    mounted() {
        
    }
}
</script>
<style>
</style>