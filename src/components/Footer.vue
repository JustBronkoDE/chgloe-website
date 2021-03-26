<template>
    <footer class="footer">
        <nav>
            <router-link to="legal-notice" class="link link--bright">
                Imprint
            </router-link>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        padding-left: inherit;
        padding-right: inherit;
        position: absolute;
        left: 0;
        right: 0;
        background-color: $color-background;
        padding-bottom: $spacing-xs;
        bottom: 0;
        font-weight: bold;
        text-align: center;

        @include breakpoint('s') {
            padding-top: $spacing-s;
            padding-bottom: $spacing-m;
        }
    }
</style>