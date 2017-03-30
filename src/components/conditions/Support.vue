<template>
  <div class="support-component">
    <div class="super-container">

      <div class="row">
        <div class="icc">
          <div class="icr heading">Support</div>
          <div class="icr icr1"></div>
          <div class="icr support-sub-text">
            Use the
            <span class="arrow-box"><i class="fa fa-chevron-up"></i></span>
            's to conditionally, or unconditionally support this improvement. </div>
          <div class="icr"></div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row rowVoteMax">
        <div class="col col2"></div>
        <div class="col colShrink vote" v-bind:class="{ voting: isVoting }">{{ fireImpObj.votes }}</div>
        <div class="col col1"></div>
        <div class="col" v-bind:class="{ hidden: isVoting }">&nbsp;&nbsp;Sum total of conditional votes</div>
      </div>

      <div class="spc spc4"></div>
      <div class="nfr">
        <div v-for="con in orderedConditions">
          <con-item v-bind:condition="con"></con-item>
        </div>
      </div>

      <div class="spc spc10"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col colShrink">
          <div class="faux-link" v-on:click="addingNew = true">+ Add New Condition</div>
        </div>
      </div>

      <div class="row" v-if="addingNew">
        <div class="col">
          <con-new v-on:finished-submitting="hideNewInput"></con-new>
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
import moment from 'moment'
import myFirebase from '../../myFirebase'
import { blankImpObj } from '../../helpers'
import ConItem from '../conditions/ConItem'
import ConNew from '../conditions/ConNew'

export default {
  name: 'support-component',
  props: ['propsIn'],
  data () {
    return {
      // Vuefire properties are added to the Vue instance after the watchers are
      // created, so to make the watcher work, we purposely add the following
      // (empty) data property with the same key as our Vuefire property.
      fireImpObj: {},
      isVoting: false,
      addingNew: false
    }
  },
  watch: {
    fireImpObj: {
      handler: function (newObj, oldObj) {
        this.isVoting = true
        this.revertIsVoting()
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(['improvements']),
    impObj () {
      if (this.improvements.length !== 0) {
        let urlID = this.$route.params.iid
        let target = _.find(this.improvements, { 'iid': urlID })
        return target
      } else {
        return blankImpObj
      }
    },
    readableDate () {
      let date = moment(this.impObj.timestamp).format('llll')
      return date
    },
    improvementsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('improvements')
    },
    conditionsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('conditions')
    },
    orderedConditions () {
      let orderedByVotes = _.orderBy(this.fireConsList, ['votes'], ['desc'])
      return orderedByVotes
    }
  },
  firebase () {
    return {
      fireImpObj: {
        source: this.improvementsRef.child(`${this.$route.params.iid}`),
        asObject: true,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      },
      fireConsList: {
        source: this.conditionsRef.orderByChild('belongsTo').equalTo(`${this.$route.params.iid}`),
        asObject: false,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      }
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
    hideNewInput () {
      this.addingNew = false
    },
    revertIsVoting: _.debounce(
      function () {
        this.isVoting = false
      },
      2000 // Delay before execution
    )
  },
  filters: {

  },
  components: {
    ConItem,
    ConNew
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.support-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #001a33;
}
.heading {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 600;
}
.support-sub-text {
  margin-bottom: 4px;
  font-size: .9em;
}
.vote {
  transition:all 0.07s;
  color: firebrick;
}
.voting {
  transform:scale(1.2);
  font-size: 1.5em;
  color: firebrick;
}
.hidden {
  visibility: hidden;
}
.faux-link {
  color: dodgerblue;
  text-decoration: underline;
  cursor: pointer;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /*border: 1px solid #001a33;*/
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
.rowVoteMax {
  max-height: 18px;
}
.col1 {
  min-width: 1vw;
  max-width: 1vw;
}
.col2 {
  min-width: 2vw;
  max-width: 2vw;
}
.col5 {
  min-width: 5vw;
  max-width: 5vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.icr1 {
  min-height: 1vh;
}

</style>
