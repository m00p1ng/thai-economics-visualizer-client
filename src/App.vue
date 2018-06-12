<template>
  <div class="page-wrapper">
    <app-header></app-header>
    <main class="container">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  }
}
</script>

<style>
  .page-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
</style>
