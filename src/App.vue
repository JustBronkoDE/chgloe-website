<template>
    <div class="chgloe" id="chgloe">
        <ContactMenu />
        <div class="chgloe__inner" :class="{ 'chgloe__inner--darkend': showOverlay }">
            <Header />
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import Header from '@/components/Header.vue'
    import ContactMenu from '@/components/ContactMenu.vue'
    import store from './store'

    export default {
        name: 'App',

        provide: {
            ...store
        },

        components: {
            Header,
            ContactMenu,
        },

        computed: {
            showOverlay() {
                return store.contactMenu.state.open
            }
        }
    }
</script>

<style lang="scss">
    @import 'assets/stylesheets/main.scss';

    .chgloe {
        position: relative;
    }

    .chgloe__inner {
        width: 100%;
        padding: $spacing-l;
        display: flex;
        flex-direction: column;
        transition: filter $transition-speed-normal $transition-curve;
        color: $color-secondary;
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
    }

    .chgloe__inner--darkend {
        filter: brightness(0.5);
        pointer-events: none;
    }
</style>
