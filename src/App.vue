<template>
    <div class="chgloe" :class="{ 'chgloe--disable-scroll': showOverlay }" id="chgloe">
        <ContactMenu />
        <div class="chgloe__inner" :class="{ 'chgloe__inner--darkend': showOverlay }">
            <Header />
            <router-view />
            <Footer v-if="false" />
        </div>
    </div>
</template>

<script lang="ts">
    import Header from '@/components/Header.vue'
    import ContactMenu from '@/components/ContactMenu.vue'
    import Footer from '@/components/Footer.vue'
    import store from './store'

    export default {
        name: 'App',

        provide: {
            ...store
        },

        components: {
            Header,
            ContactMenu,
            Footer,
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

    .chgloe--disable-scroll {
        overflow: hidden;
        height: 100vh;
    }

    .chgloe__inner {
        width: 100%;
        padding: $spacing-l $spacing-m;
        display: flex;
        flex-direction: column;
        transition: filter $transition-speed-normal $transition-curve;
        color: $color-secondary;
        max-width: 1400px;
        margin: 0 auto;
        position: relative;

        @include breakpoint('s') {
            padding: $spacing-l;
        }
    }

    .chgloe__inner--darkend {
        filter: brightness(0.5);
        pointer-events: none;
    }
</style>
