<template>
  <div class="imp-details-component">
    <div class="super-container">

      <div class="row">
        <div class="col avenir impact">{{ impObj.title }}</div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col colShrink colDivider1"></div>
        <div class="col col1"></div>
        <div class="col colShrink colDivider2"></div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col avenir" style="white-space: pre-wrap">{{ impObj.description }}</div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col colShrink colDivider1"></div>
        <div class="col col1"></div>
        <div class="col colShrink colDivider2"></div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col colShrink avenir more-info">More Info:</div>
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

      <div class="spc2"></div>
      <div class="nfr meta-info">
        <div>IID: {{ $route.params.iid }}</div>
        <div>Created: {{ readableDate }}</div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col colShrink colDivider1"></div>
        <div class="col col1"></div>
        <div class="col colShrink colDivider2"></div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <support></support>

      <div class="spc5"></div>
      <div class="row">
        <div class="col colShrink colDivider1"></div>
        <div class="col col1"></div>
        <div class="col colShrink colDivider2"></div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col avenir">
          <div><strong>Coming Soon...</strong></div>
          <br>
          <div><strong>Future Assesment</strong></div>
          <div>Revisit this issue in ____ years, and report to us if ______ has improved.</div>
          <div>The people who collect this data should be random citizens, selected and paid for by _____.</div>

          <br>
          <div><strong>Laws</strong></div>
          <div>Your lawmakers have proposed/passed the following law(s) to adddress this issue:</div>
          <div>Link to law 1 ...., etc.</div>

          <br>
          <div><strong>"Close" this Improvement</strong></div>
          <div>Vote: Yes, recent laws sufficiently address the improvement and conditions.</div>
          <div>Vote: No, lawmakers need to try again.</div>
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
import { blankImpObj } from '../../helpers'
import Support from '../conditions/Support'

export default {
  name: 'imp-details-component',
  data () {
    return {

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
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  components: {
    Support
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.imp-details-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #262626;
}
a, a:hover, a:focus, a:visited {
  color: #005cb3;
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
.impact {
  font-weight: 600;
}
.more-info {
  font-size: .9em;
  font-weight: 600;
}
.meta-info {
  font-size: .9em;
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
