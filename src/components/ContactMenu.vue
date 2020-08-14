<template>
    <section class="contact-menu" v-show="opened">
        <header class="header">
            <h2>Kontakt</h2>
        </header>
        <ul class="contact-menu__list">
            <li class="contact-menu__list-item">+49 (0) 1234 567890</li>
            <li class="contact-menu__list-item">max.mustermann@test.de</li>
        </ul>
        <footer class="footer">
            <ul class="contact-menu__socials">

            </ul>
        </footer>
    </section>
</template>

<script>
    export default {
        props: {
            opened: Boolean
        }         
    }
</script>

<style lang="scss" scoped>
    .contact-menu {
        background-color: $color-light;
        width: 400px;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
    }
</style>