<template>
    <footer class="footer">
        <nav class="footer__navigation">
            <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="@/assets/images/logos/facebook.svg" alt="Christopher Gloe Facebook">
            </a>
            <a class="link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="@/assets/images/logos/instagram.svg" alt="Christopher Gloe Instagram">
            </a>
            <button class="link footer__contact-menu-toggle" @click="toggleContactMenu">Kontakt</button>
        </nav>
    </footer>
</template>

<script>
    export default {
        methods: {
            toggleContactMenu() {
                this.$emit('contactMenuToggle');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        height: $height-footer;
        width: 100%;
        position: relative;

        .icon {
            width: 25px;
        }
    }

    .footer__navigation {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        > * {
            margin-left: $spacing-standard;
        }
    }

    .footer__contact-menu-toggle {
        background: $color-primary;
        color: $color-dark;
        border: none;
        font-weight: bold;
        font-size: $font-size-l;
        display: flex;
        align-items: center;
    }
</style>
    