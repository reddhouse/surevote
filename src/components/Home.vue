<template>
  <div class="home-component">
    <intro v-on:scroll-middle="goScrolling('middle')"></intro>
    <div id="middle"></div>
    <how-to v-on:scroll-bottom="goScrolling('bottom')"></how-to>
    <full-page-nav></full-page-nav>
    <div id="bottom"></div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
import Intro from './home/Intro'
import HowTo from './home/HowTo'
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
    // ...mapGetters(['titleState'])
  },
  methods: {
    // ...mapActions(['setTitle'])
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
  filters: {

  },
  components: {
    Intro,
    HowTo,
    FullPageNav
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

</style>
