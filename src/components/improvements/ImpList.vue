<template>
  <div class="improvement-list-component">
    <div class="super-container">

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col">Improvements List</div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div v-for="imp in limitedImprovements">
        <imp-item v-bind:improvement="imp"></imp-item>
      </div>

      <div class="spc spc5"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import ImpItem from './ImpItem'

export default {
  name: 'improvement-list-component',
  props: ['propsLimit'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['improvements']),
    orderedByVotes () {
      let orderedImprovements = _.orderBy(this.improvements, ['votes'], ['desc'])
      return orderedImprovements
    },
    limitedImprovements () {
      let limitedList = _.slice(this.orderedByVotes, this.propsLimit.start, this.propsLimit.through)
      return limitedList
    }
  },
  methods: {
    // ...mapActions(['getImprovements'])
  },
  filters: {

  },
  components: {
    ImpItem
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.improvement-list-component {
  --width-percent-for-margin: 90%;
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
.col1 {
  max-width: 1vw;
}
.colShrink {
  flex: 0 1000 auto;
}
.colRegion {
  padding: 1vh 6vw 1vh 6vw;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc2 {
  min-height: 2vh;
}
.spc5 {
  min-height: 5vh;
}

</style>
