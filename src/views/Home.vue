<template>
    <main class="home">
        <HomeMenu />
    </main>
</template>

<script>
    import HomeMenu from '@/components/HomeMenu.vue';

    export default {
        components: {
            HomeMenu,
        },
    }
</script>

<style lang="scss" scoped>
    .home {
        height: 75%;
        width: 100%;
    }
</style>