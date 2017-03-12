<template>
  <div class="problem-component">
    <div class="super-container">

      <div class="row">
        <div class="col">Individual Problem</div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"><i class="fa fa-chevron-up"></i></div>
        <div class="col3"></div>
        <div class="col twoLineMax">Problem foobar, this is the title/summary and should be 70 characters.</div>
      </div>
      <div class="row">
        <div class="col">numVotes</div>
        <div class="col"><i class="fa fa-check vcoin"></i>myVotes</div>
      </div>
      <div class="row">
        <div class="col">activity (#votes/day)</div>
        <div class="col"></div>
      </div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'problem-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
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

.problem-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #262626;
}
.twoLineMax {
  font-size: .9em;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
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
  /*border: 1px solid #262626;*/
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  /*border: 1px solid #262626;*/
}
.nfr {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
}
.nfc {
  text-align: center;
}

/* Individual col or row styliing */
.col1 {
  max-width: 1vw;
}
.col3 {
  min-width: 3vw;
  max-width: 3vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc5 {
  min-height: 5vh;
}
.spc25 {
  min-height: 25vh;
}

</style>
