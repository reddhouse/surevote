<template>
  <div class="con-details-component">
    <div class="super-container">

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col">{{ condition.description }}</div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col">
          <div v-for="link in condition.links">
            <a v-bind:href="link">{{ link }}</a>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>

    </div>

    <!-- Temp, outside of super-container -->
    <!-- <div id="temporary-container" class="nfr">
      <div><strong>Condition ID:</strong> {{ $route.params.iid }}</div>
      <div><strong>Title:</strong> {{ conObj.title }}</div>
      <div style="white-space: pre">
        <strong>Description:</strong>
        <div>{{ conObj.description }}</div>
      </div>
      <div style="white-space: pre">
        <strong>Problem:</strong>
        <div>{{ conObj.problem }}</div>
      </div>
      <div style="white-space: pre">
        <strong>Intended Result:</strong>
        <div>{{ conObj.result }}</div>
      </div>
      <div>
        <strong>Supporting Links</strong>
        <br>
        <div v-for="link in conObj.links">
          <a v-bind:href="link">{{ link }}</a>
        </div>
      </div>
      <div><strong>Created:</strong> {{ readableDate }}</div>
      <div>
        <span class="vote" v-bind:class="{ voting: isVoting }">
          {{ fireImpObj.votes }}
        </span>
        <span v-bind:class="{ hidden: isVoting }"><strong>votes</strong></span>
      </div>

      <p>------------------------------</p>
      <div><strong>Support this Condition</strong></div>
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
      <div><strong>Future Assesment</strong></div>
      <div>Revisit this issue in ____ years, and report to us if ______ has conroved</div>
      <div>The people who collect this data should be random citizens selected and paid for by _____</div>

      <br>
      <div><strong>Laws</strong></div>
      <div>Your lawmakers have proposed/passed the following law(s) to adddress this issue:</div>
      <div>Link to law 1 ...., etc.</div>

      <br>
      <div><strong>"Close" this Condition</strong></div>
      <div>Vote: Yes, recent laws sufficiently address the condition and conditions</div>
      <div>Vote: No, lawmakers need to try again</div>

    </div> -->


  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters } from 'vuex'
// import _ from 'lodash'
// import moment from 'moment'
// import myFirebase from '../../myFirebase'
// import { blankImpObj } from '../../helpers'
// import HelloChild from './HelloChild'

export default {
  name: 'con-details-component',
  props: ['condition'],
  data () {
    return {

    }
  },
  watch: {
    // fireImpObj: {
    //   handler: function (newObj, oldObj) {
    //     this.isVoting = true
    //     setTimeout(() => { this.isVoting = false }, 2000)
    //   },
    //   deep: true
    // }
  },
  computed: {
    // ...mapGetters(['conditions']),
    // conObj () {
    //   if (this.conditions.length !== 0) {
    //     let urlID = this.$route.params.iid
    //     let target = _.find(this.conditions, { 'iid': urlID })
    //     return target
    //   } else {
    //     return blankImpObj
    //   }
    // },
    // readableDate () {
    //   let date = moment(this.conObj.timestamp).format('llll')
    //   return date
    // },
    // conditionsRef () {
    //   const rootRef = myFirebase.db.ref()
    //   return rootRef.child('conditions')
    // }
  },
  // firebase () {
  //   return {
  //     fireImpObj: {
  //       source: this.conditionsRef.child(`${this.$route.params.iid}`),
  //       asObject: true,
  //       cancelCallback () { console.log('Error getting stuff from firebase') }
  //     }
  //   }
  // },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    // HelloChild
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.con-details-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #001a33;
}

a, a:hover, a:focus, a:visited {
  color: #005cb3;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
}
.spc {
  width: calc(var(--width-percent-for-margin) - 5vw);
  /*border: 1px solid yellow;*/
}
.row {
  width: calc(var(--width-percent-for-margin) - 5vw);
}
.col {
  /*border: 1px solid #262626;*/
}
.icr {
  /*border: 1px solid #262626;*/
}
.nfr {
  width: calc(var(--width-percent-for-margin) - 5vw);
}

/* Individual col or row styliing */
.colMargin {
  width: calc((100% - (var(--width-percent-for-margin) - 5vw))/2);
}

</style>
