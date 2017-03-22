<template>
  <div class="problems-list-component">
    <div class="super-container">

      <!-- Standard flex row containing 5 flex columns -->
      <div class="spc spc5"></div>
      <div class="row">
        <div class="col">Problems List</div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col colShrink colRegion">National</div>
        <div class="col colShrink colRegion">State</div>
        <div class="col colShrink colRegion">Local</div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col colShrink colRegion">Top</div>
        <div class="col colShrink colRegion">Trending</div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>
      <problem></problem>

      <div class="spc spc5"></div>
      <problem-input></problem-input>

      <div class="spc spc25"></div>
      <div class="nfr">
        <div class="nfc">
          End
        </div>
      </div>

      <div class="spc spc5"></div>
      <!-- Sure Footer and Friends -->
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
// import { mapGetters, mapActions } from 'vuex'
import Problem from './Problem'
import ProblemInput from './ProblemInput'
import SureFooter from '../SureFooter'

export default {
  name: 'problems-list-component',
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
    handleBack () {
      this.$router.go(-1)
    }
  },
  filters: {

  },
  components: {
    Problem,
    ProblemInput,
    SureFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.problems-list-component {
  --width-percent-for-margin: 85%;
  background-color: white;
  color: #262626;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
}
.spc {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
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
  /*border: 1px solid #262626;*/
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  /*border: 1px solid #262626;*/
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
.col1 {
  max-width: 1vw;
}
.colShrink {
  flex: 0 1000 auto;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.colNavText {
  text-align: right;
  padding-top: 1vh;
  padding-bottom: 1vh;
  cursor: pointer;
}
.colRegion {
  padding: 1vh 6vw 1vh 6vw;
}
.nfrDivider {
  height: 1px;
  background-color: white;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc5 {
  min-height: 5vh;
}
.spc25 {
  min-height: 25vh;
}

</style>
