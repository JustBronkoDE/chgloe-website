<template>
    <transition name="slide-right">
        <aside class="contact-menu" v-show="opened">
            <span class="contact-menu__toggle" @click="toggleContactMenu()"></span>
            <div class="contact-menu__inner">
                <div class="contact-menu__header">
                    <h2 class="title title--bold">Kontakt</h2>
                </div>
            
                <img class="contact-menu__portrait" src="@/assets/images/portrait.jpg" alt="Portrait von Per Christopher Gloe">
                <ul class="contact-menu__list">
                    <h3 class="title title--s title--bold title--spacing-bottom">Per Christopher Gloe</h3>
                    <li class="contact-menu__list-item">max.mustermann@test.de</li>
                    <li class="contact-menu__list-item">+49 (0) 1234 567890</li>
                </ul>
            </div>
            <footer class="footer">
                <ul class="contact-menu__socials">
                    <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src="@/assets/images/logos/facebook.svg" alt="Christopher Gloe Facebook">
                    </a>
                    <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src="@/assets/images/logos/instagram.svg" alt="Christopher Gloe Instagram">
                    </a>
                </ul>
            </footer>
        </aside>
    </transition>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        props: {
            opened: Boolean
        },

        methods: {
            toggleContactMenu() {
                this.$emit('contactMenuToggle');
            }
        },
    })
</script>

<style lang="scss" scoped>
    .contact-menu__toggle {
        cursor: pointer;
        position: absolute;
        top: $spacing-standard;
        right: $spacing-standard;
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
        margin-bottom: $spacing-l;
    }

    .contact-menu {
        background-color: $color-light;
        width: 400px;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 5% $spacing-standard;
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