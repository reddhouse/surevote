<template>
  <div class="imp-details-component">
    <div class="super-container">

      <div class="row">
        <div class="col avenir impact">{{ impObj.title }}</div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col colShrink colDivider1"></div>
        <div class="col col1"></div>
        <div class="col colShrink colDivider2"></div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col avenir" style="white-space: pre-wrap">{{ impObj.description }}</div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col colShrink colDivider1"></div>
        <div class="col col1"></div>
        <div class="col colShrink colDivider2"></div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>
      <div class="row">
        <div class="col colShrink smaller">More Info:</div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          <div v-for="link in impObj.links">
            <div class="spc spc1"></div>
            <a v-bind:href="link">{{ link }}</a>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>
      <support></support>

      <div class="spc spc25"></div>

    </div>

    <!-- Temp, outside of super-container -->
    <div id="temporary-container" class="nfr">
      <div><strong>Improvement ID:</strong> {{ $route.params.iid }}</div>
      <div><strong>Created:</strong> {{ readableDate }}</div>
      <div>
        <span class="vote" v-bind:class="{ voting: isVoting }">
          {{ fireImpObj.votes }}
        </span>
        <span v-bind:class="{ hidden: isVoting }"><strong>votes</strong></span>
      </div>

      <p>------------------------------</p>
      <div><strong>Support this Improvement</strong></div>
      <p>------------------------------</p>

      <con-item v-bind:condition="topCondition"></con-item>
      <div v-if="remainingConditions" v-for="con in remainingConditions">
        <con-item v-bind:topCon="false" v-bind:condition="con"></con-item>
      </div>

      <p>------------------------------</p>
      <div><strong>Sort by  [votes]  [recently added]</strong></div>
      <br>
      <div class="nfrTemp">
        <div class="col colShrink"><i class="fa fa-chevron-up"></i></div>
        <div class="col colShrink">Votes</div>
        <div class="col col1"></div>
        <div class="col">#1 - 2304 votes</div>
        <div class="col col5"></div>
        <div class="col">Full Support. No Conditions.</div>
      </div>

      <div class="nfrTemp">
        <div class="col colShrink"><i class="fa fa-chevron-up"></i></div>
        <div class="col colShrink">Votes</div>
        <div class="col col1"></div>
        <div class="col">#2 - 1588 votes</div>
        <div class="col col5"></div>
        <div class="col">Only on the condition that ....</div>
      </div>

      <br>
      <div v-on:click="addingNew = true">+ Add New Condition</div>
      <div v-if="addingNew">
        <con-new v-on:finished-submitting="hideNewInput"></con-new>
      </div>

      <br>
      <div><strong>Future Assesment</strong></div>
      <div>Revisit this issue in ____ years, and report to us if ______ has improved</div>
      <div>The people who collect this data should be random citizens selected and paid for by _____</div>

      <br>
      <div><strong>Laws</strong></div>
      <div>Your lawmakers have proposed/passed the following law(s) to adddress this issue:</div>
      <div>Link to law 1 ...., etc.</div>

      <br>
      <div><strong>"Close" this Improvement</strong></div>
      <div>Vote: Yes, recent laws sufficiently address the improvement and conditions</div>
      <div>Vote: No, lawmakers need to try again</div>

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
import Support from '../conditions/Support'

export default {
  name: 'imp-details-component',
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
    },
    topCondition () {
      return this.orderedConditions[0]
    },
    remainingConditions () {
      if (this.orderedConditions.length > 1) {
        return _.drop(this.orderedConditions)
      } else {
        return false
      }
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
    ConNew,
    Support
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.imp-details-component {
  --width-percent-for-margin: 90vw;
  background-color: white;
  color: #262626;
}
a {
  color: dodgerblue;
}
.vote {
  transition:all 0.07s;
  color: #262626;
  line-height: 2em;
}
.voting {
  transform:scale(2.0);
  font-size: 1.5em;
  color: firebrick;
  /*box-shadow: 0 0 10px #ffc600;*/
}
.hidden {
  visibility: hidden;
}
.impact {
  font-weight: 600;
}
.smaller {
  font-size: .9em;
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
  /*border: 1px solid #262626;*/
}
.icr {
  /*border: 1px solid #262626;*/
}
.nfr {
  width: var(--width-percent-for-margin);
}
.nfrTemp {
  display: flex;
  flex-direction: row;
}

/* Individual col or row styliing */
.col1 {
  max-width: 1vw;
}
.col5 {
  max-width: 5vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.colDivider1 {
  height: 1px;
  width: 17vw;
  background-color: firebrick;
}
.colDivider2 {
  height: 1px;
  width: 17vw;
  background-color: #262626;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc5 {
  min-height: 5vh;
}

</style>
