<template>
  <div class="how-component">
    <div class="super-container">

      <div class="row rowTopNav">
        <div class="col colGrow"></div>
        <div class="col colTab colShrink" v-on:click="handleBack">How?</div>
        <!-- <div class="col colMargin"></div> -->
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="icc iccShrinkWidth">
          <div class="icr"></div>
          <div class="icr icrShrinkHeight icrNumber heading mono">3</div>
          <div class="icr"></div>
        </div>
        <div class="icc">
          <div class="icr"></div>
          <div class="icr icrShrinkHeight icrPadded heading">Basic Steps</div>
          <div class="icr"></div>
        </div>
      </div>

      <div class="spc spc1"></div>
      <div class="row">
        <div class="col colPadded">
          - Agree on the <strong>#1 Improvement</strong> we'd like our lawmakers to make <strong>right now</strong> to fix a common problem.
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col colPadded">
          - Remind lawmakers that we're keeping score, and remove them from office if they refuse to take our priorities seriously.
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          - Move on to <strong>Improvement #2</strong> and repeat. Often, the next highest ranked Improvement is idealogically dissimilar to its predecessor.
        </div>
        <div class="col"></div>
      </div>

      <!-- End 3 Basic Steps -->
      <div class="spc spc5"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col colDivider"></div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="icc iccShrinkWidth">
          <div class="icr"></div>
          <div class="icr icrShrinkHeight icrNumber heading mono">50</div>
          <div class="icr"></div>
        </div>
        <div class="icc">
          <div class="icr"></div>
          <div class="icr icrShrinkHeight icrPadded heading">Ways to Voice Your Opinion</div>
          <div class="icr"></div>
        </div>
      </div>

      <div class="spc spc1"></div>
      <div class="row">
        <div class="col colPadded">
          Each month SureVote users get an allowance of <span class="mono">50</span>
          <span class="nobr"><i class="fa fa-check vcoin"></i>otes.</span>
          A <span class="nobr"><i class="fa fa-check vcoin"></i>ote</span>
          is like a coin or token that you can use to up-vote the things that are important to you.
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col colPadded">
          Improvements are not the only places to spend
          <span class="nobr"><i class="fa fa-check vcoin"></i>otes.</span>
          <strong>Virtually all information on SureVote is democratically stack-ranked</strong>, including pro/con arguments, and links to supporting data, etc.
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          Most importantly, users who disagree with a "top" Improvement can:
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col colIndent colPadded">
          - Identify a better solution to the particular problem at hand,<br>
          - Elevate entirely different Improvements to the top of the priority list, or,<br>
          - Spend their √otes at the state or local level.<br>
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          To encourage participation, <span class="nobr"><i class="fa fa-check vcoin"></i>otes</span> you don't use by the end of the month will be divided equally among active users.
        </div>
        <div class="col"></div>
      </div>

      <!-- End 50 Ways to voice your opinion -->

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col colDivider"></div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="icc iccShrinkWidth">
          <div class="icr"></div>
          <div class="icr icrShrinkHeight icrNumber heading mono">{{ daysTogo }}</div>
          <div class="icr"></div>
        </div>
        <div class="icc">
          <div class="icr"></div>
          <div class="icr icrShrinkHeight icrPadded heading">Days Until Midterm Elections</div>
          <div class="icr"></div>
        </div>
      </div>

      <div class="spc spc1"></div>
      <div class="row">
        <div class="col colPadded">
          SureVote sends weekly reports to every lawmaker in every federal, state, and local jurisdiction in the country to help them understand their constituents' priorities.
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          Likewise, SureVote users can view a "score" of their representative's performance at any time during the lead-up to an election.
        </div>
        <div class="col"></div>
      </div>

      <!-- End Days until elections-->

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col colDivider"></div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col">
          <div>Want to learn more?</div>
          <div>- <router-link to="faqs">Frequently asked questions</router-link></div>
          <div>- <router-link to="vision">Long term vision</router-link></div>
        </div>
        <div class="col"></div>
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
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import SureFooter from '../SureFooter'

export default {
  name: 'how-component',
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
    newHomeView.Intro2How = false
    this.setHomeView(newHomeView)
  },
  computed: {
    ...mapGetters(['homeView']),
    daysTogo () {
      let now = moment()
      let votingDay = moment('2018-11-06')
      let untilThen = votingDay.diff(now, 'days')
      return untilThen
    }
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

.how-component {
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
.center {
  text-align: center;
}
.heading {
  color: #262626;
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
.rowFlip {
  flex-direction: row-reverse;
}
.rowTopNav {
  width: 100%;
  border-top: 1vh solid #001a33;
}
.colShrink {
  flex: 0 1000 auto;
}
.colGrow {
  flex: 1000 1 auto;
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
.colPadded {
  padding-bottom: 2vh;
}
.colDivider {
  height: 1px;
  width: 50vw;
  background-color: #001a33;
}
.colIndent {
  margin-left: 2vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.nfrDivider {
  height: 1px;
  background-color: white;
}
.iccShrinkWidth {
  flex: 0 1000 auto;
}
.icrShrinkHeight {
  flex: 0 1000 auto;
}
.icrNumber {
  font-size: 2.5em;
  font-weight: 700;
  padding: 1vw;
}
.icrPadded {
  padding-left: 1vw;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers*/
.spc1 {
  min-height: 1vw;
}
.spc2 {
  min-height: 2vh;
}
.spc4 {
  min-height: 4vh;
}
.spc5 {
  min-height: 5vh;
}
.spc10 {
  min-height: 10vh;
}
.spc15 {
  min-height: 15vh;
}
.spc25 {
  min-height: 25vh;
}

</style>
