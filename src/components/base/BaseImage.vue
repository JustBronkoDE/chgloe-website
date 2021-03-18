<template>
    <img class="base-image" @load="showImage" :id="id" :src="src" :alt="alt" v-show="loaded" v-if="initialized">
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BaseImage',

        data() {
            return {
                initialized: false,
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
            },
            id: {
                type: String,
            }
        },

        computed: {
            imageInViewport(event: Event) {
                console.log(event.target);
                
            },
        },

        mounted() {
            this.lazyLoadImage()
        },

        methods: {
            showImage() {
                this.loaded = true
            },
            lazyLoadImage() {
                const element = document.getElementById(this.id)
                console.log(element)

                if (this.elementInViewport(element)) {
                    this.initalized = true
                }
            },
            elementInViewport(element: HTMLElement): boolean {
                var rect = element.getBoundingClientRect()
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
    .base-image {
        animation: fade-in $transition-speed-slow;
    }
</style>