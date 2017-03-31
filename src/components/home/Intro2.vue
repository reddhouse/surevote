<template>
  <div class="intro2-component">
    <div class="super-container">

      <div class="spc20 top-bar"></div>
      <div class="row rowLogo">
        <div class="col"></div>
        <div class="col colShrink">
          <div class="triangle-down"></div>
        </div>
        <div class="icc">
          <div class="icr icrGrow"></div>
          <div class="icr">
            <div class="center">
              <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
            </div>
          </div>
          <div class="icr icr5"></div>
        </div>
        <div class="col colFlip colShrink">
          <div class="triangle-up"></div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc2"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col center">
          <router-link to="/why">Why</router-link>
          &nbsp;|&nbsp;
          <router-link to="/how">How</router-link>
        </div>
        <div class="col"></div>
      </div>

      <div class="spcX"></div>
      <!-- <div class="nfr">
        <div class="nfc">
          <a href="#" v-on:click="emitScrollEvent">Just Show Me</a>
        </div>
      </div> -->

      <div class="spc5"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'intro2-component',
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
      this.$emit('scroll-three')
    }
    // Example of debounced method
    // getAnswer: _.debounce(
    //   function () {
    //     // Some Code
    //   },
    //   500 // Delay before execution
    // )
  },
  components: {
    // HelloChild
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.intro2-component {
  --width-percent-for-margin: 90vw;
  height: 100vh;
  background-color: #001a33;
  color: white;
}
a {
  color: white;
}
.logo-sure {
  color: firebrick;
  font-size: 2em;
  font-weight: 500;
}
.logo-vote {
  color: #262626;
  font-size: 2em;
  font-weight: 500;
}
.triangle-down {
  width: 0;
  height: 0;
  border-left: calc(2.5vh + 4vw) solid transparent;
  border-right: calc(2.5vh + 4vw) solid transparent;
  border-top: calc(3vh + 5vw) solid white;
}
.triangle-up {
  /* Not visible. Left here for future styling */
  width: 0;
  height: 0;
  border-left: calc(2.5vh + 4vw) solid transparent;
  border-right: calc(2.5vh + 4vw) solid transparent;
  border-bottom: calc(3vh + 5vw) solid white;
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
.spc20, .spc2, .spc5, .spcX {
  width: var(--width-percent-for-margin);
  /*border: 1px solid yellow;*/
}
.col {
  /*border: 1px solid white;*/
}
.icr {
  /*border: 1px solid white;*/
}
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.rowLogo {
  width: 100%;
  min-height: calc(20vh + 10vw);
  background-color: white;
}
.col0 {
  max-width: 0vw;
}
.col1 {
  max-width: 1vw;
}
.colFlip {
  align-self: flex-end;
}
.icr5 {
  min-height: 1vh;
}
.icrGrow {
  flex: 1000 1 auto;
}

/* Individual spacer sizing */
.top-bar {
  width: 100%;
  background-color: white;
}

</style>
