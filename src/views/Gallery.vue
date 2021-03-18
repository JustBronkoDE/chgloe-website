<template>
    <section class="gallery">
        <ul class="gallery__categories">
            <li class="link link--active">All</li>
            <li class="link">Portraits</li>
            <li class="link">Scenery</li>
            <li class="link">Products</li>
            <li class="link">Couples</li>
        </ul>
        <div class="gallery__row" v-for="(imageRow, index) in gallery" :key="index">
            <figure class="gallery__item" v-for="image in imageRow" :key="image">
                <BaseImage class="gallery__image" :src="image" />
            </figure>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import BaseImage from '@/components/base/BaseImage.vue'

    export default defineComponent({
        components: {
            BaseImage,
        },

        mounted() {
            this.galleryRows[0].classList.add('gallery__row--focused')
            window.addEventListener('scroll', this.focusRowInViewport)
        },

        unmounted() {
            window.removeEventListener('scroll', this.focusRowInViewport)
        },

        computed: {
            gallery(): any[] {
                // Only for test purposes
                const sizes = ['800', '400', '600', '550', '700']
                // ----

                const gallery = []

                for (let row = 0; row < 5; row++) {
                    let imageRow = []
                    for (let column = 0; column < Math.floor(Math.random() * 5) + 2  ; column++) {
                        // Only for test purposes
                        const width = sizes[Math.floor(Math.random() * sizes.length)]
                        const height = sizes[Math.floor(Math.random() * sizes.length)]
                        // ---
                        imageRow.push(`https://picsum.photos/${width}/${height}?random=${row}${column}`)
                    }
                    gallery.push(imageRow)
                }

                return gallery;
            },
            galleryRows(): NodeListOf<Element> {
                return document.querySelectorAll('.gallery__row')
            }
        },

        methods: {
            focusRowInViewport(): void {
                const galleryRows = this.galleryRows
                // console.log(galleryRows);
                for (var i = 0; i < galleryRows.length; i++) {
                    if (this.isElementInViewport(galleryRows[i])) {
                        galleryRows[i].classList.add('gallery__row--focused')
                    } else { 
                        galleryRows[i].classList.remove('gallery__row--focused')
                    }
                }
            },
            isElementInViewport(element: Element): boolean {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                )
            },
        },
    })
</script>

<style lang="scss" scoped>
    .gallery {
        width: 100%;
        position: relative;
        animation: fade-in 1s;
    }

    .gallery__categories {
        top: 0;
        background-color: $color-background;
        z-index: $z-index-s;
        position: sticky;
        display: flex;
        justify-content: center;
        list-style: none;
        padding: $spacing-l 0;

        li {
            &:not(:last-child) {
                margin-right: $spacing-standard;
            }
        }
    }

    .gallery__row {
        transition: all $transition-speed-fast $transition-curve;
        display: flex;
        max-height: 60vh;
        filter: brightness(50%);
        padding: 0 ($spacing-l + $spacing-s);
        margin-bottom: $spacing-m;

        &:last-child {
            margin-bottom: $height-header;   
        }
    }

    .gallery__row--focused {
        padding: 0;
        filter: none;

        &:not(:first-of-type) {
            margin-top: $spacing-l;
        }

        &:not(:last-of-type) {
            margin-bottom: $spacing-l;
        }
    }

    .gallery__item {
        flex-grow: 1;
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

