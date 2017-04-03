<template>
  <div class="full-page-nav-component">
    <div class="super-container">

      <div class="nfr">
        <sure-header></sure-header>
      </div>

      <div class="spc5"></div>
      <div class="row rowJustify">
        <div class="col colShrink avenir heading">Top 3 Improvements</div>
        <div class="col"></div>
        <div class="col colShrink align-right">
          <router-link to="/improvements/all">View All Improvements</router-link>
        </div>
      </div>

      <div class="spc4"></div>
      <div class="nfr">
        <imp-list v-bind:propsLimit="impListLimit"></imp-list>
      </div>

      <div class="spc5"></div>
      <div class="row rowJustify">
        <div class="col colShrink avenir heading">Pledge</div>
        <div class="col"></div>
        <div class="col colShrink align-right">
          <router-link to="lawmakers">View Lawmakers</router-link>
        </div>
      </div>

      <div class="spc4"></div>
      <pledge></pledge>

      <div class="spc10"></div>
      <div class="spcX"></div>
      <div class="nfr">
        <focus-nav></focus-nav>
      </div>
      <div class="spc2"></div>

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
.align-right {
  text-align: right;
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

/* Media Queries */
@media (min-width: 321px) {

}

@media (min-width: 600px) {
  .full-page-nav-component {
    height: 80vh;
  }
  .super-container {
    height: 80vh;
  }
}

@media (min-width: 769px) {
  .full-page-nav-component {
    height: 80vh;
  }
  .super-container {
    height: 80vh;
  }
}

</style>
