<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'

  export default {
    components: {Header, Footer},
    name: 'App'
  }
</script>

<style>
  @import "./style/style.scss";
</style>
