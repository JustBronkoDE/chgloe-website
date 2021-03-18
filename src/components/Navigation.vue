<template>
    <nav class="navigation">
        <router-link to="legal-notice" class="link link--bright" href="" rel="noopener noreferrer">
            Imprint
        </router-link>
        <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
            <img class="icon" src="@/assets/images/logos/facebook.svg" alt="Christopher Gloe Facebook">
        </a>
        <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
            <img class="icon" src="@/assets/images/logos/instagram.svg" alt="Christopher Gloe Instagram">
        </a>
        <button class="link navigation__contact-menu-toggle" @click="contactMenu.open()">Contact</button>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'Navigation',
        inject: ['contactMenu'],
    })
</script>

<style lang="scss" scoped>
    .navigation {
        display: flex;
        align-items: center;

        .icon {
            width: 25px;
        }

        > * {
            margin-left: $spacing-m;
        }
    }

    .navigation__contact-menu-toggle {
        background: $color-secondary;
        color: $color-primary-dark;
        border: none;
        font-weight: bold;
        font-size: $font-size-l;
        display: flex;
        align-items: center;
    }
</style>
    