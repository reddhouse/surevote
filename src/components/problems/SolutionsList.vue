<template>
  <div class="solutions-list-component">
    <div class="super-container">

      <!-- Standard flex row containing 5 flex columns -->
      <div class="spc spc5"></div>
      <div class="row">
        <div class="col">Solutions List</div>
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
      <solution></solution>

      <div class="spc spc5"></div>
      <solution-input></solution-input>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
import Solution from './Solution'
import SolutionInput from './SolutionInput'
import SureFooter from '../SureFooter'

export default {
  name: 'solutions-list-component',
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
    Solution,
    SolutionInput,
    SureFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.solutions-list-component {
  --width-percent-for-margin: 90%;
  background-color: mediumaquamarine;
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
