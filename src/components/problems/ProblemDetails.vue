<template>
  <div class="problem-details-component">
    <div class="super-container">

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col">Problem Details</div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col">Title/Summary</div>
        <div class="col"></div>
      </div>  <div class="row">
          <div class="col">Description</div>
          <div class="col"></div>
        </div>

      <div class="spc spc5"></div>
      <solutions-list></solutions-list>

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
import SureFooter from '../SureFooter'
import SolutionsList from './SolutionsList'

export default {
  name: 'problem-details-component',
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
    SolutionsList,
    SureFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.problem-details-component {
  --width-percent-for-margin: 90%;
  background-color: lightskyblue;
  color: #262626;
}
.twoLineMax {
  font-size: .9em;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
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
.col3 {
  min-width: 3vw;
  max-width: 3vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.colShrink {
  flex: 0 1000 auto;
}
.colNavText {
  text-align: right;
  padding-top: 1vh;
  padding-bottom: 1vh;
  cursor: pointer;
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
