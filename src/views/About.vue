<template>
    <div class="about">
        <div class="about__text">
            <BaseImage class="about__portrait" src="/media/images/portrait.jpg" alt="Portrait of Per Christopher Gloe" />
            <h1 class="title title--spacing-bottom">Hey I am Christopher Gloe!</h1>
            <p>
                Nam pretium turpis et arcu. Aenean imperdiet. Phasellus blandit leo ut
                odio. In ac felis quis tortor malesuada pretium. Proin viverra, ligula
                sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                mauris ac eros.
            </p>
            <p>
                Praesent congue erat at massa. Nam commodo suscipit quam. Duis vel nibh
                at velit scelerisque suscipit. Suspendisse feugiat. Nam pretium turpis
                et arcu.
            </p>
            <p>
                Curabitur a felis in nunc fringilla tristique. Sed cursus turpis vitae
                tortor. Etiam sit amet orci eget eros faucibus tincidunt. Etiam sit amet
                orci eget eros faucibus tincidunt. Pellentesque auctor neque nec urna.
            </p>
            <p>
                Phasellus a est. Donec sodales sagittis magna. Donec interdum, metus et
                hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero
                turpis vel mi. Etiam imperdiet imperdiet orci. Nunc egestas, augue at
                pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo
                quis pede.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseImage from '@/components/base/BaseImage.vue'
    import { defineComponent } from 'vue'
    
    export default defineComponent({
        name: 'About',
        components: {
            BaseImage,
        },
    })
</script>

<style lang="scss" scoped>
    .about {
        margin: 0 auto;
        max-width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        animation: fade-in 1s;
    }

    .about__text {
        hyphens: auto;
        text-align: justify;

        p {
            margin-bottom: $spacing-xs + $spacing-s;
        }
    }

    .about__portrait {
        margin: $spacing-m 0;
        max-width: 500px;
    }
</style>