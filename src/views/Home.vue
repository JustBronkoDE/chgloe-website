<template>
    <main class="home">
        <ul class="home__menu">
            <li class="home__menu-item" @click="openView('about-me')">
                <span class="title title--bold title--bright">About me</span>
                <BaseVideo playsinline loop muted autoplay class="home__menu-image" src="/media/videos/about-me.mp4"/>
            </li>
            <li class="home__menu-item" @click="openView('gallery')">
                <span class="title title--bold title--bright">My Gallery</span>
                <BaseVideo playsinline loop muted autoplay class="home__menu-image" src="/media/videos/gallery.mp4"/>
            </li>
        </ul>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import BaseVideo from '@/components/base/BaseVideo.vue'

    export default defineComponent({
        components: {
            BaseVideo,
        },

        methods: {
            openView(view: string) {
                this.$router.push(view)
            }
        }
    })
</script>

<style lang="scss" scoped>
    .home {
        padding-top: $spacing-standard;
        height: $height-home;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home__menu {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        animation: fade-in 1s $transition-curve;
        flex-direction: column;

        @include breakpoint('s') {
            flex-direction: row;
        }
    }

    .home__menu-item {
        max-height: 50%;
        margin-bottom: $spacing-m;
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        flex: 1 1 0px;

        @include breakpoint('s') {
            max-height: none;
            height: 80%;
            margin-bottom: 0;
            margin-right: $spacing-standard;
            cursor: pointer;
            transition: height $transition-speed-fast $transition-curve;

            &:hover {
                height: 100%;
                
                .home__menu-image {
                    filter: brightness(0.75);
                }

                .title {
                    font-size: 2.8rem;
                }
            }
        }

        &:last-child {
            margin: 0;
        }

        .title {
            pointer-events: none;
        }

        .title {
            position: absolute;
            z-index: $z-index-s;
        }
    }

    .home__menu-image {
        box-shadow: $box-shadow-light;
        object-fit: cover;
        object-position: top;
        height: 100%;
        width: 100%;
        filter: brightness(0.55);
        transition: all $transition-speed-fast $transition-curve;
    }
</style>