<template>
    <main class="home">
        <ul class="home__menu">
            <li class="home__menu-item" @click="openView('about-me')">
                <span class="title title--bold title--bright">About me</span>
                <video class="home__menu-image" loop muted preload="metadata" @mouseover="$event.target.play()" @mouseleave="$event.target.pause()">
                    <source src="@/assets/images/about-me.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </li>
            <li class="home__menu-item" @click="openView('gallery')">
                <span class="title title--bold title--bright">My Gallery</span>
                <video class="home__menu-image" loop muted preload="metadata" @mouseover="$event.target.play()" @mouseleave="$event.target.pause()">
                    <source src="@/assets/images/gallery.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </li>
        </ul>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
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
        height: $height-main-content;
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
    }

    .home__menu-item {
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
            
            .home__menu-image {
                filter: brightness(0.9);
            }
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
        height: 85%;
        width: 100%;
        filter: brightness(0.6);
        transition: all $transition-speed-fast $transition-curve;
    }
</style>