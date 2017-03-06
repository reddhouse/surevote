<template>
  <div class="home-component">
    <intro-one v-if="homeView.Intro1" v-on:scroll-two="goScrolling('two')"></intro-one>
    <div id="two"></div>
    <intro-two v-if="homeView.Intro2Why || homeView.Intro2How" v-on:scroll-three="goScrolling('three')"></intro-two>
    <full-page-nav></full-page-nav>
    <div id="three"></div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import IntroOne from './home/Intro1'
import IntroTwo from './home/Intro2'
import FullPageNav from './home/FullPageNav'
import vueScrollTo from 'vue-scrollTo'

export default {
  name: 'home-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['homeView'])
  },
  methods: {
    ...mapActions(['setHomeView']),
    goScrolling (destination) {
      // Vue-scrollTo can also be used as a directive. See docs.
      var options = {
        easing: vueScrollTo.easing['ease-in'],
        offset: 0, // Initially set to -60
        onDone () {}, // Fire when scrolling is done
        onCancel () {} // Fire when scrolling has been interrupted
      }
      vueScrollTo.scrollTo(`#${destination}`, 1000, options)
    }
  },
  components: {
    introOne: IntroOne, // Useful way to list components if I'm going to use dynamic components and the :is directive
    IntroTwo,
    FullPageNav
  },
  beforeDestroy () {
    // Alter the layout of the home page based on where the user has visited
    let newHomeView = this.homeView
    newHomeView.Intro1 = false
    if (this.$route.name === 'why') {
      newHomeView.Intro2Why = false
    }
    if (this.$route.name === 'how') {
      newHomeView.Intro2How = false
    }
    this.setHomeView(newHomeView)
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

</style>
