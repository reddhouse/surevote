<template>
  <div class="improvement-list-component">
    <div class="super-container">

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div v-for="(imp, index) in limitedImprovements">
            <imp-item v-bind:improvement="imp" v-bind:impIndex="index"></imp-item>
          </div>
        </div>
        <div class="col"></div>
      </div>

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
  --width-percent-for-margin: inherit;
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
