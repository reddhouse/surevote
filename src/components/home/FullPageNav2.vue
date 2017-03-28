<template>
  <div class="full-page-nav-component">
    <div class="super-container">

      <div class="nfr">
        <sure-header></sure-header>
      </div>

      <div class="spc spc4"></div>
      <div class="nfr">
        <imp-list v-bind:propsLimit="impListLimit"></imp-list>
      </div>

      <div class="spc"></div>

      <div class="nfr">
        <focus-nav></focus-nav>
      </div>
      <div class="spc spc1"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters } from 'vuex'
import SureHeader from './SureHeader'
import FocusNav from './FocusNav'
import ImpList from '../improvements/ImpList'

export default {
  name: 'full-page-nav-component',
  props: ['propsIn'],
  data () {
    return {
      impListLimit: {
        start: 0,
        through: 3
      }
    }
  },
  computed: {
    // ...mapGetters(['user'])
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    SureHeader,
    FocusNav,
    ImpList
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.full-page-nav-component {
  --width-percent-for-margin: inherit;
  height: 100vh;
  background-color: white;
  color: #262626;
}
.priorities {

  font-weight: 500;
}
/* Flex defaults for SureVote's custom grid template  */
.super-container {
  height: 100vh;
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
  border: 1px solid #262626;
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  border: 1px solid #262626;
}
.nfr {
  width: var(--width-percent-for-margin);
  width: 100%;
  margin: 0 auto;
}
.nfc {
  text-align: center;
}

/* Individual col or row styliing */
.rowNoShrink {
  flex: 1 0 auto;
}
.rowTopNav {
  width: 100%;
  border-top: 1vh solid #001a33;
}
.col1 {
  max-width: 1vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.colShrink {
  flex: 0 1000 auto;
}
.colTab {
  background-color: #001a33;
  color: white;
  text-align: right;
  padding: .5vh 4vw;
  cursor: pointer;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc05 {
  min-height: .5vh;
  max-height: .5vh;
}
.spc1 {
  min-height: 1vh;
  max-height: 1vh;
}
.spc4 {
  min-height: 4vh;
  max-height: 4vh;
}
.spc5 {
  min-height: 5vh;
  max-height: 5vh;
}

</style>
