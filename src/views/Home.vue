<template>
    <main class="home">
        <HomeMenu />
    </main>
</template>

<script lang="ts">
    import HomeMenu from '@/components/HomeMenu.vue';

    export default {
        components: {
            HomeMenu,
        },
    }
</script>

<style lang="scss" scoped>
    .home {
        height: $height-main-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>