<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
export default {
  components: {
    Header,
    Footer
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted () {
    console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background #999
  opacity .2
  z-index -1
}
</style>
