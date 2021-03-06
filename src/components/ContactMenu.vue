<template>
    <transition name="slide-right">
        <aside class="contact-menu__container" v-show="contactMenu.state.open">
            <div class="contact-menu">
                <div class="contact-menu__inner">
                    <div class="contact-menu__header">
                        <h2 class="title title--bold">Contact</h2>
                        <span class="contact-menu__toggle" @click="contactMenu.close()"></span>
                    </div>
                    <img class="contact-menu__portrait" src="/media/images/portrait.jpg" alt="Portrait von Per Christopher Gloe">
                    <ul class="contact-menu__list">
                        <h3 class="title title--s title--bold title--spacing-bottom">Per Christopher Gloe</h3>
                        <li class="contact-menu__list-item">
                            <a class="link link--hover-underline" href="mailto:max.mustermann@test.de">max.mustermann@test.de</a>
                        </li>
                        <li class="contact-menu__list-item">
                            <a class="link link--hover-underline" href="tel:+49 (0) 1234 567890">+49 (0) 1234 567890</a>
                        </li>
                    </ul>
                </div>
                <ul class="contact-menu__socials">
                    <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src="@/assets/images/logos/facebook.svg" alt="Christopher Gloe Facebook">
                    </a>
                    <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src="@/assets/images/logos/instagram.svg" alt="Christopher Gloe Instagram">
                    </a>
                </ul>
            </div>
        </aside>
    </transition>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    
    export default defineComponent({
        name: 'ContactMenu',
        inject: ['contactMenu'],
    })
</script>

<style lang="scss" scoped>
    .contact-menu__toggle {
        cursor: pointer;
        position: relative;
        width: 40px;
        height: 40px;
        transition: all $transition-speed-fast;

        &:hover {
            width: 45px;
            height: 45px;
        }

        &::before {
            position: absolute;
            top: 50%;
            content: '';
            width: 100%;
            height: 6px;
            transform: rotate(45deg);
            background-color: #000;
        }

        &::after {
            position: absolute;
            top: 50%;
            content: '';
            width: 100%;
            height: 6px;
            transform: rotate(-45deg);
            background-color: #000;
        }
    }

    .contact-menu__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $spacing-m;

        @include breakpoint('s') {
            margin-bottom: $spacing-l;
        }
    }

    .contact-menu__container {
        height: 100vh;
        width: 100vw;
        overflow: scroll;
        position: absolute;
        
        @include breakpoint('s') {
            height: 100vh;
            width: auto;
            top: 0;
            right: 0;
        }
    }

    .contact-menu {
        background-color: $color-secondary;
        position: sticky;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        top: 0;
        padding: 5% $spacing-standard;
        z-index: $z-index-xxl;

        @include breakpoint('s') {
            width: 400px;
            height: 100vh;
        }
    }

    .contact-menu__list {
        list-style: none;
    }

    .contact-menu__list-item {
        font-size: $font-size-l;

        &:not(:last-child) {
            margin-bottom: $spacing-xs;
        }
    }

    .contact-menu__socials {
        height: 50px;
        display: flex;
        justify-content: center;
        margin-top: $spacing-l;

        .icon {
            width: 50px;
        }

        .link {
            margin-right: $spacing-standard;
            filter: invert(75%);

            &:hover {
                filter:invert(100%);
            }
        }
    }

    .contact-menu__portrait {
        object-fit: cover;
        height: 400px;
        margin-bottom: $spacing-m;
    }
</style>