<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <ContactMenu :opened="contactMenuOpened" />
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

  #app {
    width: 100%;
    height: 100vh;
    padding: $spacing-l;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
