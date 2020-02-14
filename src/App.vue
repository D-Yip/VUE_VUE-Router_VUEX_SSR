<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <p>{{ fullName }} {{ counter }}</p>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
export default {
  components: {
    Header,
    Footer
  },
  computed: {
    // ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count,
      textA: state => state.a.text
    }),
    ...mapGetters(['fullName'])
  },
  mounted () {
    console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
    // this.$store.dispatch('updateCountASync', {
    //   num: 5,
    //   time: 2000
    // })
    let i = 1
    setInterval(() => {
      this.updateCount(i++)
    }, 1000)
    this.updateCountASync({
      num: 5,
      time: 2000
    })
  },
  methods: {
    ...mapActions(['updateCountASync']),
    ...mapMutations(['updateCount'])
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
