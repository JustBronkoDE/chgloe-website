<template>
    <figure class="base-image" :class="modifier" v-observe-visibility="{ callback: lazyLoadImage, once: true }">
        <img class="base-image__image" @load="showImage" :src="src" :alt="alt" v-show="loaded" v-if="initializeLoading">
        <p v-if="alt && showCaption && loaded" class="base-image__caption">{{ alt }}</p>
    </figure>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BaseImage',

        data() {
            return {
                initializeLoading: false, 
                loaded: false,
            }
        },

        props: {
            src: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                default: '',
            },
            modifier: {
                type: String,
            },
            showCaption: {
                type: Boolean,
                default: false,
            },
        },

        methods: {
            showImage() {
                this.loaded = true
            },
            lazyLoadImage(isVisible: boolean) {
                
                if (isVisible) {
                    this.initializeLoading = true
                }
            }
        },
    })
</script>

<style lang="scss" scoped>
    .base-image__image {
        animation: fade-in $transition-speed-slow;
    }

    .base-image__caption {
        font-size: $font-size-xl;
        color: $color-secondary;
        margin-top: $spacing-s;
        text-align: center;
        animation: fade-in $transition-speed-slow;
    }

    .base-image--gallery {
        flex-grow: 1;
        overflow: hidden;

        &:not(:last-child) {
            margin-right: $spacing-m;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
            overflow: hidden;
            transition: transform $transition-speed-normal $transition-curve;

            &:hover {
                transform: scale(1.05);
                cursor: pointer;
            }
        }
    }

    .base-image--lightbox img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
</style>