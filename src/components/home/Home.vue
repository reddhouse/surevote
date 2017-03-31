<template>
  <div class="home-component">

    <div id="top"></div>
    <intro-one v-if="homeView.intro1" v-on:scroll-two="goScrolling('two')"></intro-one>
    <div id="two"></div>
    <intro-two v-if="homeView.intro2Why || homeView.intro2How" v-on:scroll-three="goScrolling('three')"></intro-two>
    <full-page-nav></full-page-nav>
    <div id="three"></div>

    <sure-footer v-if="homeView.sureFooter"></sure-footer>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import IntroOne from './Intro1'
import IntroTwo from './Intro2'
import FullPageNav from './FullPageNav'
import SureFooter from './SureFooter'
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
    FullPageNav,
    SureFooter
  },
  beforeDestroy () {
    // Alter the layout of the home page based on where the user has visited
    let newHomeView = this.homeView
    newHomeView.intro1 = false
    // Uncomment if you change default app state to surefooter: false
    // newHomeView.sureFooter = true
    this.setHomeView(newHomeView)
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.home-component {
  /* Do not delete. SureFooter inherits from this value */
  --width-percent-for-margin: 90vw;
}

/* Media Queries */
@media (min-width: 321px) {
  .home-component {
    --width-percent-for-margin: 85vw;
  }
}
@media (min-width: 600px) {
  .home-component {
    --width-percent-for-margin: 75vw;
  }
}
@media (min-width: 769px) {
  .home-component {
    --width-percent-for-margin: 60vw;
  }
}
@media (min-width: 1250px) {
  .home-component {
    --width-percent-for-margin: 50vw;
  }
}

</style>
