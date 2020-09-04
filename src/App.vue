<template>
  <div class="chgloe" id="chgloe">
    <div class="chgloe__inner" :class="{'chgloe__inner--darkend': contactMenuOpened}">
      <Header />
      <router-view />
      <Footer @contactMenuToggle="toggleContactMenu()" />
    </div>
    
    <ContactMenu @contactMenuToggle="toggleContactMenu()" :opened="contactMenuOpened" />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import ContactMenu from '@/components/ContactMenu.vue';

  export default {
    name: 'App',

    components: {
        Header,
        Footer,
        ContactMenu,
    },

    data() {
      return {
        contactMenuOpened: false,
      }
    },

    methods: {
      toggleContactMenu() {
        this.contactMenuOpened = !this.contactMenuOpened;
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/stylesheets/main.scss";

  .chgloe__inner {
    width: 100%;
    height: 100vh;
    padding: $spacing-l;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: filter $transition-speed-normal $transition-curve;
    color: $color-light;
    max-width: 1920px;
    margin: 0 auto;
  }

  .chgloe__inner--darkend {
    filter: brightness(0.5);
    pointer-events: none;
  }
</style>
