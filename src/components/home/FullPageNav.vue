<template>
  <div class="full-page-nav-component">
    <div class="super-container">

      <div class="nfr">
        <sure-header></sure-header>
      </div>

      <div class="spc spc3"></div>
      <div class="row rowJustify">
        <div class="col colShrink heading">Priorities</div>
        <div class="col"></div>
        <div class="col colShrink">
          <router-link to="/improvements/all">View All Improvements</router-link>
        </div>
      </div>

      <div class="spc spc1"></div>
      <div class="nfr">
        <imp-list v-bind:propsLimit="impListLimit"></imp-list>
      </div>

      <div class="spc spc3"></div>
      <div class="row rowJustify">
        <div class="col colShrink heading">Our Pledge</div>
        <div class="col"></div>
        <div class="col colShrink">
          <router-link to="lawmakers">View Lawmakers</router-link>
        </div>
      </div>

      <div class="spc spc2"></div>
      <pledge></pledge>

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
import Pledge from './Pledge'

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
    ImpList,
    Pledge
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
a {
  font-size: .9em;
  color: dodgerblue;
}
.heading {
  font-weight: 600;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.spc {
  width: var(--width-percent-for-margin);
  /*border: 1px solid yellow;*/
}
.row {
  width: var(--width-percent-for-margin);
}
.col {
  /*border: 1px solid #262626;*/
}
.icr {
  /*border: 1px solid #262626;*/
}
.nfr {
  width: var(--width-percent-for-margin);
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
.colTab {
  background-color: #001a33;
  color: white;
  text-align: right;
  padding: .5vh 4vw;
  cursor: pointer;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */


</style>
