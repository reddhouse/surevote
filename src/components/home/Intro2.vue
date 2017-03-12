<template>
  <div class="intro-component">
    <div class="super-container">

      <div class="spc spcTopBar spc20"></div>
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

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col center">
          <router-link to="/why">Why</router-link>
          &nbsp;|&nbsp;
          <router-link to="/how">How</router-link>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc"></div>
      <!-- <div class="nfr">
        <div class="nfc">
          <a href="#" v-on:click="emitScrollEvent">Just Show Me</a>
        </div>
      </div> -->

      <div class="spc spc5"></div>

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

.intro-component {
  --width-percent-for-margin: 90%;
  height: 100vh;
  background-color: #001a33;
  /*background-color: #242442;*/
  color: white;
}
a {
  color: white;
}
.center {
  text-align: center;
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
.spc {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
  /* Spacers prefer to fill empty space 1000 to 1 */
  flex: 1000 1000 auto;
  /*border: 1px solid yellow;*/
}
.row {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
}
.col {
  flex: 1 1 auto;
  /*border: 1px solid white;*/
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  /*border: 1px solid white;*/
}
.nfr {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
}
.nfc {
  text-align: center;
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
.colShrink {
  flex: 0 1000 auto;
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
.spc1 {
  max-height: 1vh;
}
.spc2 {
  max-height: 2vh;
}
.spc5 {
  max-height: 5vh;
}
.spc20 {
  max-height: 20vh;
}
.spc25 {
  max-height: 25vh;
}
.spcTopBar {
  width: 100%;
  background-color: white;
}

</style>
