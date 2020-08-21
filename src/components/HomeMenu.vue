<template>
    <div class="home-menu">
        <splide :options="splideOptions" ref="primary">
            <splide-slide @click.native="openView('about')">
                <a class="home-menu__link">
                    <span class="title title--bold title--light">Über mich</span>
                    <img src="@/assets/images/person.jpg" class="home-menu__link-image">
                </a>
            </splide-slide>
            <splide-slide @click.native="openView('gallery')">
                <a class="home-menu__link">
                    <span class="title title--bold title--light">Galerie</span>
                    <img src="@/assets/images/landscape.jpg" class="home-menu__link-image">
                </a>
            </splide-slide>
            <splide-slide @click.native="openView('impress')">
                <a class="home-menu__link">
                    <span class="title title--bold title--light">Impressum</span>
                    <img src="@/assets/images/landscape2.jpg" class="home-menu__link-image">
                </a>
            </splide-slide>
        </splide>
    </div>
    
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    export default {
        components: {
            Splide,
            SplideSlide,
        },

        data() {
            return {
                splideOptions: {
                    type: 'slider',
                    start: 1,
                    perPage: 1,
                    arrows: false,
                    pagination: false,
                    keyboard: false,
                    drag: false,
                    gap: '20px',
                    padding: {
                        right: '35%',
                        left: '35%',
                    },
                    isNavigation: true,
                    animationDuration: 500,

                    width: '1350px',
                },
            }
        },

        mounted() {
            // Set the sync target.
            this.$refs.primary.sync(this.$refs.primary.splide);
        },
        
        methods: {
            openView(view) {
                setTimeout(() => this.$router.push(view), 800);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../node_modules/@splidejs/splide/dist/css/splide.min.css';

    .splide {
        margin: 0 auto;
    }

    .splide__track {
        overflow: visible !important;
    }

    .splide__slide {
        height: 800px;
        max-width: 450px;
        border: none !important;
        margin: $spacing-standard 0;
        transition: all $transition-speed-normal;
        cursor: pointer;

        &.is-active {
            .home-menu__link-image {
                height: 100%;
            }
        }
    }

    .home-menu {
        display: flex;
        justify-content: center;
    }

    .home-menu__link {
        height: 100%;
        transition: all $transition-speed-fast $transition-curve;
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &:hover {
            .home-menu__link-image {
                filter: brightness(0.7);
            }
        }

        .title {
            position: absolute;
            z-index: $z-index-s;
        }
    }

    .home-menu__link-image {
        box-shadow: $box-shadow-light;
        object-fit: cover;
        height: 85%;
        width: 100%;
        mix-blend-mode: exclusion;
        opacity: .6;
        transition: all $transition-speed-fast $transition-curve;
    }
</style>