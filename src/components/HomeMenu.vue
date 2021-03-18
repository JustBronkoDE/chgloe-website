<template>
    <ul class="home-menu">
        <li class="home-menu__item" @click="openView('about-me')">
            <span class="title title--bold title--bright">About me</span>
            <video class="home-menu__item-image" loop muted preload="metadata" @mouseover="$event.target.play()" @mouseleave="$event.target.pause()">
                <source src="@/assets/images/about-me.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </li>
        <li class="home-menu__item" @click="openView('gallery')">
            <span class="title title--bold title--bright">My Gallery</span>
            <video class="home-menu__item-image" loop muted preload="metadata" @mouseover="$event.target.play()" @mouseleave="$event.target.pause()">
                <source src="@/assets/images/gallery.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </li>
    </ul>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        data() {
            return {
                activeItem: 'gallery',
            }
        },

        methods: {
            openView(view: string) {
                this.$router.push(view)
            }
        }
    })
</script>

<style lang="scss" scoped>
    .home-menu {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        animation: fade-in 1s $transition-curve;
    }

    .home-menu__item {
        height: 95%;
        margin-right: $spacing-standard;
        cursor: pointer;
        transition: height $transition-speed-fast $transition-curve;
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        flex: 1 1 0px;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            height: 100%;
            
            .home-menu__item-image {
                filter: brightness(0.9);
            }
        }

        .title {
            position: absolute;
            z-index: $z-index-s;
        }
    }

    .home-menu__item-image {
        box-shadow: $box-shadow-light;
        object-fit: cover;
        object-position: top;
        height: 85%;
        width: 100%;
        filter: brightness(0.6);
        transition: all $transition-speed-fast $transition-curve;
    }
</style>