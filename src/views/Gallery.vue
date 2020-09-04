<template>
    <section class="gallery">
        <ul class="gallery__categories">
            <li class="gallery__category-filter gallery__category-filter--active">Alle</li>
            <li class="gallery__category-filter">Portraits</li>
            <li class="gallery__category-filter">Landschaften</li>
            <li class="gallery__category-filter">Produkte</li>
            <li class="gallery__category-filter">Paare</li>
        </ul>

        <div class="gallery__grid" v-on:scroll.passive="focusRowInViewport">
            <div class="gallery__row" v-for="(imageRow, index) in gallery" :key="index">
                <figure class="gallery__item" v-for="image in imageRow" :key="image">
                    <img class="gallery__image" :src="image" alt="">
                </figure>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        mounted() {
            this.focusRowInViewport();
        },

        computed: {
            gallery() {
                // Only for test purposes
                const sizes = ['800', '400', '600', '550', '700'];   
                // ----

                const gallery = [];

                for (let row = 0; row < 5; row++) {
                    let imageRow = [];
                    for (let column = 0; column < Math.floor(Math.random() * 6) + 2  ; column++) {
                        // Only for test purposes
                        const width = sizes[Math.floor(Math.random() * sizes.length)]
                        const height = sizes[Math.floor(Math.random() * sizes.length)]
                        // ---
                        imageRow.push(`https://picsum.photos/${width}/${height}?random=${row}${column}`)
                    }
                    gallery.push(imageRow);
                }

                return gallery;
            },
            galleryRows() {
                return document.querySelectorAll('.gallery__row');
            }
        },

        methods: {
            focusRowInViewport() {
                const galleryRows = this.galleryRows;
                
                for (var i = 0; i < galleryRows.length; i++) {
                    if (this.isElementInViewport(galleryRows[i])) {
                        galleryRows[i].classList.add("gallery__row--focused");
                    } else { 
                        galleryRows[i].classList.remove("gallery__row--focused");
                    }
                }
            },
            isElementInViewport(element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 150 &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            },
        },
    }
</script>

<style lang="scss" scoped>
    .gallery {
        height: $height-main-content;
        width: 100%;
        position: relative;
        padding-top: $spacing-l + $spacing-m;
    }

    .gallery__categories {
        display: flex;
        justify-content: center;
        list-style: none;
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .gallery__category-filter {
        cursor: pointer;
        
        &:not(:last-child) {
            margin-right: $spacing-standard;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    .gallery__category-filter--active {
        cursor: default;
        font-weight: bold;

        &:hover {
            text-decoration: none;
        }
    }

    .gallery__grid {
        height: 100%;
        overflow: scroll;
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        
        &::before {
            content: '';
            position: absolute;
            height: calc(100% - #{$spacing-l});
            width: 100%;
            pointer-events: none;
            -moz-box-shadow:    inset 0 0 10px $color-background;
            -webkit-box-shadow: inset 0 0 10px $color-background;
            box-shadow:         inset 0 0 10px $color-background;
            z-index: $z-index-m;
        }
        

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .gallery__row {
        transition: all $transition-speed-fast $transition-curve;
        display: flex;
        height: 80%;
        filter: brightness(50%);
        padding: 0 ($spacing-l + $spacing-s);
        margin-bottom: $spacing-m;

        &:first-child {
            margin-top: $spacing-l;   
        }

        &:last-child {
            margin-bottom: $spacing-xl;   
        }
    }

    .gallery__row--focused {
        padding: 0;
        filter: none;

        &:not(:first-child) {
            margin-top: $spacing-l;
        }

        &:not(:last-child) {
            margin-bottom: $spacing-l;
        }
    }

    .gallery__item {
        flex-grow: 1;
        min-width: 25%;
        overflow: hidden;

        &:not(:last-child) {
            margin-right: $spacing-m;
        }
    }

    .gallery__image {
        object-fit: cover;
        object-position: 50% 50%;
        overflow: hidden;
        height: 100%;
        width: 100%;
        transition: transform $transition-speed-normal $transition-curve;

        &:hover {
            transform: scale(1.05);
            cursor: pointer;
        }
    }
</style>

