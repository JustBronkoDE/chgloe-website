<template>
    <video class="base-video__video" loop muted preload="metadata" @loadedmetadata="showVideo" @mouseover="$event.target.play()" @mouseleave="$event.target.pause()" v-show="loaded">
        <source :src="src" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BaseVideo',

        data() {
            return {
                loaded: false,
            }
        },

        props: {
            src: {
                type: String,
                required: true
            }
        },

        methods: {
            showVideo() {
                this.loaded = true
            },
        },
    })
</script>

<style lang="scss" scoped>
    .base-video {
        height: auto;
    }

    .base-video__video {
        animation: fade-in $transition-speed-slow;
    }
</style>