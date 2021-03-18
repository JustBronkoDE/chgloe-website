<template>
    <img class="base-image" @load="showImage" :src="src" :alt="alt" v-show="loaded" v-if="imageInViewport">
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
            imageInViewport(event: Event) {
                console.log(event);
                return true;
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