<template>
    <img class="base-image" @load="showImage" :src="src" :alt="alt" v-show="loaded" v-if="imageInViewport($event.target)">
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BaseImage',

        data() {
            return {
                loaded: false,
            }
        },

        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                default: '',
            }
        },

        computed: {
            imageInViewport(element: Element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                )
            },
        },

        methods: {
            showImage() {
                this.loaded = true
            },
        },
    })
</script>

<style lang="scss" scoped>
    .base-image {
        animation: fade-in $transition-speed-slow;
    }
</style>