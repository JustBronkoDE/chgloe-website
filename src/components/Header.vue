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
        justify-content: center;
        align-items: center;
        padding-bottom: $spacing-m;
        border-bottom: 1px #fff solid;
        flex-direction: column;

        @include breakpoint('s') {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }
    }

    .header__logo {
        height: 100%;
    }

    .header__link {
        display: block;
        height: 80%;
        margin-bottom: $spacing-xs;

        @include breakpoint('s') {
            height: 100%;
            margin-bottom: 0;
        }
    }
</style>