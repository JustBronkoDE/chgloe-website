<template>
    <header class="header">
        <router-link to="/" class="header__link">
            <img src="@/assets/logo.png" alt="Logo Foto Christopher" class="header__logo">
        </router-link>
        <Navigation />
    </header>
</template>

<script lang="ts">
    import Navigation from './Navigation.vue'
    import { defineComponent } from 'vue'
    
    export default defineComponent({
        name: 'Header',
        components: {
            Navigation,
        },
    })
</script>

<style lang="scss" scoped>
    .header {
        height: $height-header;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding-bottom: 30px;
        border-bottom: 1px #fff solid;
    }

    .header__logo {
        height: 100%;
    }

    .header__link {
        height: 100%;
    }
</style>