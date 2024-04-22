<template>

    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/imgs/logos/torre-del-gattazzo-gif.gif" alt="" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item text-end" v-for="(page, id) in pages" :key="page.id">
                        <router-link :to="{ name: page.name }" class="nav-link" :class="{ 'active': id === activeId }"
                            @click="$emit('currentPageId', id)">{{ page.text }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<script>

export default {
    props: {
        items: {
            type: Object,
            required: true,
        }
    },
    computed: {
        pages() {
            return this.items.headerPages
        },
        activeId() {
            return this.items.pageId
        }
    },
    methods: {

    },
    created() {

    }
}

</script>
<style lang="scss" scoped>
.logo {
    width: 80px;
    display: block;
}
</style>