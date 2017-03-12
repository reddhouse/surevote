<template>
  <div class="why-component">
    <div class="super-container">

      <!-- <div class="spc spc2"></div> -->
      <div class="row rowTopNav">
        <div class="col colGrow"></div>
        <div class="col colTab colShrink" v-on:click="handleBack">Why?</div>
        <!-- <div class="col colMargin"></div> -->
      </div>

      <div id="header" class="spc spc4"></div>
      <div class="nfr">
        <div class="heading">Because this is happening...</div>
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
        <div class="heading">...and this</div>
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
              These are excuses at best,<br>
              and lies at worst.
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
        <div>
          The truth is, at the end of the day, regardless of our identity or political
          persuasion, we all want to feel happy, healthy, and secure in the places
          where we live and work.
        </div>
        <br>
        <div>
          Sadly, the happiest, healthiest, and most secure among are sometimes
          less motivated to fix the problems that many of us face every day.
        </div>
        <br>
        <div>
          To make matters worse, many of the companies we trust for news and social media are
          intentionally dividing our country for profit. After a while, it seems
          normal to be angry and point fingers.
        </div>
        <br>
        <div>
          Enough is enough.
        </div>
        <br>
        <div>
          SureVote users are finding common ground. We build consensus,
          and then we take action.
          <br><router-link to="how">Come see how.</router-link>
        </div>
      </div>

      <div class="spc spc25"></div>
      <div class="row rowFlip">
        <div class="col colNavText colShrink" v-on:click="handleBack">&lt;&lt; Back</div>
      </div>

      <div class="nfr nfrDivider"></div>

      <sure-footer></sure-footer>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import SureFooter from '../SureFooter'

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
  color: #001a33;
}
a {
  color: dodgerblue;
}
.mono {
  font-family: 'Cousine', Courier, monospace;
}
.heading {
  color: #262626;
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
  border-top: calc(1.75vh + 2vw) solid #001a33;
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
  background-color: #001a33;
  color: white;
  font-weight: 700;
}
.rowFlip {
  flex-direction: row-reverse;
}
.rowTopNav {
  width: 100%;
  border-top: 1vh solid #001a33;
}
.col10 {
  min-width: 10vw;
  max-width: 100px
}
.colShrink {
  flex: 0 1000 auto;
}
.colGrow {
  flex: 1000 1 auto;
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
.colTab {
  background-color: #001a33;
  color: white;
  text-align: right;
  padding: .5vh 4vw;
  cursor: pointer;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
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
.spc4 {
  min-height: 4vh;
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
