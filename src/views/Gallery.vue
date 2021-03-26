<template>
    <section class="gallery">
        <ul class="gallery__categories">
            <li :class="{ 'link--active': selectedCategory === category }" v-for="(category, index) in categories" class="link" :key="index" @click="selectCategory(category)">{{ category }}</li>
        </ul>
        <div class="gallery__row" v-for="(imageRow, index) in filteredGallery" :key="index">
            <BaseImage modifier="base-image--gallery" :src="image.src"  v-for="image in imageRow" :key="image" @click="selectImage(image)" />
        </div>
        <Lightbox :image="selectedImage" @closeLightbox="selectImage(null)" />
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import BaseImage from '@/components/base/BaseImage.vue'
    import Lightbox from '@/components/Lightbox.vue'
    import gallery from '@/assets/gallery.json'

    export default defineComponent({
        components: {
            BaseImage,
            Lightbox,
        },

        data(){
            return {
                categories: gallery.categories,
                selectedCategory: 'All',
                gallery: gallery.images,
                selectedImage: null,
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
            },
            filteredGallery(): Array<any> {
                let gallery = this.gallery

                if (this.selectedCategory !== 'All') {
                    gallery = []
                    for (let row = 0; row < this.gallery.length; row++) {
                        gallery.push(this.gallery[row].filter(image => image.category === this.selectedCategory))
                    }
                }

                return gallery
            }
        },

        methods: {
            focusRowInViewport(): void {
                const galleryRows = this.galleryRows
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
                this.selectedCategory = category
                this.focusRowInViewport()
            },
            selectImage(image: Object|null) {
                this.selectedImage = image as any
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
        list-style: none;
        padding-top: $spacing-m;
        padding-bottom: $spacing-s;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        li {
            display: inline-block;
            margin-bottom: $spacing-s;
        }

        @include breakpoint('s') {
            padding: $spacing-l 0;
            justify-content: center;

            li {
                margin-bottom: 0;
                &:not(:first-child) {
                    margin-left: $spacing-standard;
                }
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

        &:empty {
            display: none; 
        }
    }

    .gallery__row--focused {
        padding: 0;
        filter: none;

        &:not(:first-of-type) &:not(:nth-child(1)) {
            margin-top: $spacing-l;
        }

        &:not(:last-of-type) {
            margin-bottom: $spacing-l;
        }
    }
</style>

