<template>
    <div class="home-menu">
        <div id="splide" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" @click="openView('about')">
                        <a class="home-menu__link">
                            <span class="home-menu__link-title">Über mich</span>
                            <img src="@/assets/images/person.jpg" class="home-menu__link-image">
                        </a>
                    </li>
                    <li class="splide__slide" @click="openView('gallery')">
                        <a class="home-menu__link">
                            <span class="home-menu__link-title">Galerie</span>
                            <img src="@/assets/images/landscape.jpg" class="home-menu__link-image">
                        </a>
                    </li>
                    <li class="splide__slide" @click="openView('impress')">
                        <a class="home-menu__link">
                            <span class="home-menu__link-title">Impressum</span>
                            <img src="@/assets/images/landscape2.jpg" class="home-menu__link-image">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
    import Splide from '@splidejs/splide';

    export default {
        mounted() {
            this.splide = new Splide('#splide', {
                type: 'loop',
                perPage: 3,
                focus: 'center',
                arrows: false,
                pagination: false,
                gap: '20px',
                padding: '10px',
            }).mount();

            this.splide.go('+1');
        },

        data() {
            return {
                splide: null,
            }
        },
        
        methods: {
            openView(view) {
                this.splide.go('+1');
                setTimeout(() => this.$router.push(view), 800);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../node_modules/@splidejs/splide/dist/css/splide.min.css';

    .splide {
        height: 100%;
    }

    .splide__track {
        height: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .splide__list {
        height: 100%;
    }

    .splide__slide {
        margin: $spacing-l 0;
        box-shadow: $box-shadow-light;
        transition: all $transition-speed-fast;
        cursor: pointer;

        &.is-active {
            z-index: $z-index-xxl;
            margin: 0;
        }
    }

    .home-menu {
        height: 100%;
        max-width: 80%;
        margin: 0 auto;
    }

    .home-menu__link {
        transition: all $transition-speed-fast $transition-curve;
        background-color: $color-background;
        text-align: center;
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: $font-size-xxl;
        position: relative;
    }

    .home-menu__link-title {
        position: absolute;
        z-index: $z-index-s;
        font-weight: bold;
        color: $color-primary;
    }

    .home-menu__link-image {
        object-fit: cover;
        height: 100%;
        width: 100%;
        filter: brightness(0.4);
        transition: filter $transition-speed-fast;

        &:hover {
            filter: brightness(0.7);
        }
    }
</style>