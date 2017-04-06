<template>
  <div class="why-component">
    <div class="super-container">

      <!-- <div class="spc spc2"></div> -->
      <div class="row rowTopNav">
        <div class="col"></div>
        <div class="col colTab colShrink">Why?</div>
      </div>

      <div id="header" class="spc4"></div>
      <div class="nfr">
        <div class="heading">Because this is happening...</div>
        <br>
        <div>"Those people are basically ruining everything."</div>
      </div>
      <div class="spc2"></div>
      <div class="row">
        <div class="col col10"></div>
        <div class="col mono">- 90% of news/social media since 2004.</div>
        <div class="col"></div>
      </div>

      <div class="spc6"></div>
      <div class="nfr">
        <div class="heading">...and this</div>
        <br>
        <div>"We tried to fix things, but the other party wouldn't cooperate."</div>
      </div>
      <div class="spc2"></div>
      <div class="row">
        <div class="col col10"></div>
        <div class="col mono">- 100% of partisan politics since 1787.</div>
        <div class="col"></div>
      </div>

      <div class="spc8"></div>

      <div class="row rowPoint">
        <div class="col"></div>
        <div class="col colShrink">
          <div class="triangle-down"></div>
        </div>
        <div class="icc">
          <div class="icr icrGrow"></div>
          <div class="icr">
            <div class="avenir excuses">
              Excuses are a distraction.<br>
            </div>
          </div>
          <div class="icr icrGrow"></div>
        </div>
        <div class="col colFlip colShrink">
          <div class="triangle-up"></div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc8"></div>

      <div class="nfr">
        <div class="bottom-pad">
          The truth is, regardless of your identity or political
          persuasion, we ALL want to feel happy, healthy, and secure in the places
          where we live and work.
        </div>
        <div class="bottom-pad">
          Sadly, the happiest, healthiest, and most secure among us are often
          less motivated to fix the problems that many of us face every day.
        </div>
        <div class="bottom-pad">
          To make matters worse, many of the companies we trust for news and social media are
          intentionally dividing our country for profit. After a while, it seems
          normal to be angry and point fingers.
        </div>
        <div class="bottom-pad avenir">
          Enough is enough.
        </div>
        <div class="bottom-pad">
          <span class="logo-sure-reg">Sure</span><span class="logo-vote-reg">Vote</span> users are finding common ground. We build consensus,
          and then we take action.
        </div>
        <router-link to="how">Come see how.</router-link>
      </div>

      <div class="spc25"></div>
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
import SureFooter from '../home/SureFooter'

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
    newHomeView.intro2Why = false
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
.heading {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #262626;
  font-weight: 600;
  margin-bottom: 2vh;
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
.bottom-pad {
  padding-bottom: 2vh;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
}
.row {
  width: var(--width-percent-for-margin);
}
div[class^="spc"] {
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
.icrGrow {
  flex: 1000 1 auto;
}
.nfrDivider {
  height: 1px;
  background-color: white;
}

/* Media Queries */
@media (min-width: 321px) {
  .why-component {
    --width-percent-for-margin: 85vw;
  }
  .excuses {
    font-size: 1.1em;
  }
}
@media (min-width: 600px) {
  .why-component {
    --width-percent-for-margin: 75vw;
  }
  .excuses {
    font-size: 1.25em;
  }
}
@media (min-width: 769px) {
  .why-component {
    --width-percent-for-margin: 60vw;
  }
}
@media (min-width: 1250px) {
  .why-component {
    --width-percent-for-margin: 50vw;
  }
}

</style>
