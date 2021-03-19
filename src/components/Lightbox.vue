<template>
    <teleport to=".chgloe" v-if="image">
        <div class="lightbox">
            <div class="lightbox__inner" @click="closeLightbox">
                <BaseImage class="lightbox__image" modifier="base-image--lightbox" :src="image.src" :alt="image.alt" showCaption/>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import BaseImage from '@/components/base/BaseImage.vue'
    
    export default defineComponent({
        name: 'Lightbox',
        emits: ['closeLightbox'],

        components: {
            BaseImage,
        },

        props: {
            image: {
                type: Object,
            },
        },

        methods: {
            closeLightbox() {
                this.$emit('closeLightbox')
            }
        }
    })
</script>

<style lang="scss" scoped>
    .lightbox {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        z-index: $z-index-xxl;
    }

    .lightbox__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        position: sticky;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, .6);
        animation: fade-in $transition-speed-normal;
    }

    .lightbox__image {
        max-width: 70%;
        max-height: 70%;
        pointer-events: none;
    }
</style>