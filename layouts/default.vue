<template>
  <div>
    <Nav />
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'

export default {
  components: {
    Nav,
    Menu,
    Footer
  }
}
</script>

<style>
</style>
