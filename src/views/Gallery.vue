<template>
    <section class="gallery">
        <ul class="gallery__categories">
            <li :class="{ 'link--active': selectedCategory === category }" v-for="(category, index) in categories" class="link" :key="index" @click="selectCategory(category)">{{ category }}</li>
        </ul>
        <div class="gallery__row" v-for="(imageRow, index) in gallery" :key="index">
            <BaseImage modifier="base-image--gallery" :src="image.src"  v-for="image in imageRow" :key="image" />
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import BaseImage from '@/components/base/BaseImage.vue'
    import gallery from '@/assets/gallery.json'

    export default defineComponent({
        components: {
            BaseImage,
        },

        data(){
            return {
                categories: gallery.categories,
                selectedCategory: 'All',
                gallery: gallery.images
            }
        },

        mounted() {
            this.galleryRows[0].classList.add('gallery__row--focused')
            window.addEventListener('scroll', this.focusRowInViewport)
        },

        unmounted() {
            window.removeEventListener('scroll', this.focusRowInViewport)
        },

        computed: {
            galleryRows(): NodeListOf<Element> {
                return document.querySelectorAll('.gallery__row')
            }
        },

        methods: {
            focusRowInViewport(): void {
                const galleryRows = this.galleryRows
                // console.log(galleryRows);
                for (var i = 0; i < galleryRows.length; i++) {
                    if (this.elementInViewport(galleryRows[i])) {
                        galleryRows[i].classList.add('gallery__row--focused')
                    } else { 
                        galleryRows[i].classList.remove('gallery__row--focused')
                    }
                }
            },
            elementInViewport(element: Element): boolean {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                )
            },
            selectCategory(category: string) {
                this.selectedCategory = category;
            }
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
        min-height: 40vh;
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
</style>

