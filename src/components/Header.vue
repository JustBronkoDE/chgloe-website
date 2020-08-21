<template>
    <header class="header">
        <router-link to="/" class="header__link">
            <img src="@/assets/logo.png" alt="Logo Foto Christopher" class="header__logo">
        </router-link>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
        width: 100%;
        padding-bottom: $spacing-standard;
    }

    .header__logo {
        height: 100%;
    }

    .header__link {
        height: 100%;
    }
</style>