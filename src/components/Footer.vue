<template>
    <footer class="footer">
        <nav class="footer__navigation">
            <a class="footer__link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                <img class="footer__icon" src="@/assets/images/logos/facebook.svg" alt="Christopher Gloe Facebook">
            </a>
            <a class="footer__link" href="https://www.instagram.com/christopher_gloe/" target="_blank" rel="noopener noreferrer">
                <img class="footer__icon" src="@/assets/images/logos/instagram.svg" alt="Christopher Gloe Instagram">
            </a>
            <button class="footer__contact-menu-toggle" @click="toggleContactMenu">Kontakt</button>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        height: 5%;
        width: 100%;
        position: relative;
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
            margin-left: $spacing-m;
        }
    }

    .footer__contact-menu-toggle {
        cursor: pointer;
        background: none;
        color: $color-primary;
        border: none;
        font-weight: bold;
        font-size: $font-size-l;
        display: flex;
        align-items: center;
    }

    .footer__icon {
        width: 25px;
    }
</style>
    