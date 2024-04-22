<template>
    <header>
        <HeaderApp :items="store" @currentPageId="setId"/>
    </header>
    
    <main>
        <slot></slot>
    </main>
    <footer>
        <FooterApp />
    </footer>
    
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