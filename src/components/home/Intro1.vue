<template>
  <div class="intro-component">
    <div class="super-container">

      <div class="spc25"></div>
      <div class="nfr title">
        <div class="center">What happens when 200&nbsp;million Americans agree for 5&nbsp;minutes?</div>
        <div class="nfc"></div>
        <div class="nfc"></div>
      </div>

      <div class="spcX"></div>
      <div class="nfr">
        <div class="center">
          <a href="#" v-on:click="emitScrollEvent">We win.</a>
        </div>
      </div>

      <div class="spc10"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'intro-component',
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
    emitScrollEvent () {
      this.$emit('scroll-two')
    }
  },
  filters: {

  },
  components: {
    // HelloChild
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.intro-component {
  --width-percent-for-margin: inherit;
  height: 100vh;
  background-color: #262626;
  color: white;
}
a {
  color: white;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.row {
  width: var(--width-percent-for-margin);
}
div[class^="spc"] {
  width: var(--width-percent-for-margin);
  /*border: 1px solid yellow;*/
}
.col {
  border: 1px solid white;
}
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.nfr.title {
  font-size: 1.5em;
}

</style>
