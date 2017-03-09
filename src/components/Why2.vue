<template>
  <div class="why-component">
    <div class="super-container">

      <div id="header" class="spc spc10"></div>
      <div class="nfr">
        <div class="heading">Because this is happening:</div>
        <br>
        <div>"Those people are basically ruining everything."</div>
      </div>
      <div class="spc spc2"></div>
      <div class="row">
        <div class="col col10"></div>
        <div class="col mono">- 90% of news/social media since 2004.</div>
        <div class="col"></div>
      </div>

      <div class="spc spc8"></div>
      <div class="nfr">
        <div class="heading">And this:</div>
        <br>
        <div>"We tried to fix things, but the other party wouldn't cooperate."</div>
      </div>
      <div class="spc spc2"></div>
      <div class="row">
        <div class="col col10"></div>
        <div class="col mono">- 100% of partisan politics since 1787.</div>
        <div class="col"></div>
      </div>

      <div class="spc spc8"></div>

      <div class="row rowPoint">
        <div class="col"></div>
        <div class="col colShrink">
          <div class="triangle-down"></div>
        </div>
        <div class="icc">
          <div class="icr icrGrow"></div>
          <div class="icr">
            <div class="center">
              Finger pointing is great if you're<br>
              trying to maintain the status quo.
            </div>
          </div>
          <div class="icr icrGrow"></div>
        </div>
        <div class="col colFlip colShrink">
          <div class="triangle-up"></div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc spc8"></div>

      <div class="nfr">
        <div>Here's the deal.</div>
        <br>
        <div>
          Regardless of who you are, or what you believe, we all want to feel
          happy, healthy, and secure in our country, state, and home town.
        </div>
        <br>
        <div>
          Sadly, it appears the happiest, healthiest, and most secure among us
          are relatively satisfied with the way things are. To make matters
          worse, our news and social media sources are pulling this country
          apart at the seams for profit.
        </div>
        <br>
        <div>
          Enough is enough.
          <br>There is common ground.
          <br>
          <router-link to="how">We have the technology...</router-link>
        </div>
      </div>

      <div class="spc spc25"></div>
      <div class="row rowFlip">
        <div class="col colNavText colShrink" v-on:click="handleBack">&lt;&lt; Back</div>
      </div>

      <div id="divider" class="nfr nfrDivider"></div>

      <sure-footer></sure-footer>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import SureFooter from './SureFooter'

export default {
  name: 'why-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  mounted () {
    // Alter the layout of the home page based on where the user has visited
    let newHomeView = this.homeView
    newHomeView.Intro2Why = false
    this.setHomeView(newHomeView)
  },
  computed: {
    ...mapGetters(['homeView'])
  },
  methods: {
    ...mapActions(['setHomeView']),
    handleBack () {
      this.$router.go(-1)
    }
  },
  filters: {

  },
  components: {
    SureFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.why-component {
  --width-percent-for-margin: 85%;
  background-color: white;
  color: #262626;
}
a {
  color: deepskyblue;
}
.mono {
  font-family: 'Cousine', Courier, monospace;
}
.heading {
  font-weight: 700;
  margin-bottom: 2vh;
}
.center {
  text-align: center;
}
.triangle-down {
  /* Not visible. Left here for future styling */
  width: 0;
  height: 0;
  border-left: calc(1.75vh + 2vw) solid transparent;
  border-right: calc(1.75vh + 2vw) solid transparent;
  border-top: calc(1.75vh + 2vw) solid #262626;
}
.triangle-up {
  width: 0;
  height: 0;
  border-left: calc(1.75vh + 2vw) solid transparent;
  border-right: calc(1.75vh + 2vw) solid transparent;
  border-bottom: calc(1.75vh + 2vw) solid white;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
  /*height: 100vh;*/
}
.spc {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
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
  /*border: 1px solid black;*/
}

.nfr {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
}

.nfc {
  text-align: center;
}

/* Individual col or row styliing */
.rowPoint {
  width: 100%;
  min-height: calc(10vh + 5vw);
  background-color: #262626;
  color: white;
  font-weight: 700;
}
.rowFlip {
  flex-direction: row-reverse;
}
.col10 {
  min-width: 10vw;
  max-width: 100px
}
.colShrink {
  flex: 0 1000 auto;
}
.colFlip {
  align-self: flex-end;
}
.colNavText {
  text-align: right;
  padding-top: 1vh;
  padding-bottom: 1vh;
  cursor: pointer;
}
.icrGrow {
  flex: 1000 1 auto;
}
.nfrDivider {
  height: 1px;
  background-color: white;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers*/
.spc2 {
  min-height: 2vh;
}
.spc7 {
  min-height: 7vh;
}
.spc8 {
  min-height: 8vh;
}
.spc10 {
  min-height: 10vh;
}
.spc25 {
  min-height: 25vh;
}

</style>
