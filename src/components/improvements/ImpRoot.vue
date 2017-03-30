<template>
  <div class="improvements-root-component">
    <div class="super-container">

      <sure-header></sure-header>

      <div class="spc spc5"></div>
      <div class="row" v-if="$route.path == '/improvements/all'">
        <div class="col"></div>
        <div class="col colShrink"><router-link to="/improvements/new">+ Add New Improvement</router-link></div>
      </div>

      <div class="spc spc4"></div>
      <router-view v-bind:propsLimit="impListLimit"></router-view>

      <div class="spc spc25"></div>
      <sure-footer></sure-footer>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import SureHeader from '../home/SureHeader'
import SureFooter from '../home/SureFooter'

export default {
  name: 'improvements-root-component',
  props: ['propsIn'],
  data () {
    return {
      impListLimit: {
        start: 0,
        through: 100
      }
    }
  },
  computed: {
    ...mapGetters(['improvements'])
  },
  methods: {
    // ...mapActions(['getImprovements'])
  },
  filters: {

  },
  components: {
    SureHeader,
    SureFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.improvements-root-component {
  --width-percent-for-margin: 90vw;
  background-color: white;
  color: #262626;
}
a {
  color: dodgerblue;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
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
  /*border: 1px solid white;*/
}
.icr {
  /*border: 1px solid white;*/
}
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.rowFlip {
  flex-direction: row-reverse;
}
.col1 {
  max-width: 1vw;
}
.colRegion {
  padding: 1vh 6vw 1vh 6vw;
}

</style>
