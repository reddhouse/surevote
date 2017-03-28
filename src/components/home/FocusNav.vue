<template>
  <div class="focus-nav-component">
    <div class="super-container">

      <div class="row">
        <div class="col"></div>
        <div class="col colShrink focus-tab" v-bind:class="{ 'active-tab': isNation }" v-on:click="selectFocus('nation')">National</div>
        <div class="col colShrink">-</div>
        <div class="col colShrink focus-tab" v-bind:class="{ 'active-tab': isState }" v-on:click="selectFocus('state')">State</div>
        <div class="col colShrink">-</div>
        <div class="col colShrink focus-tab" v-bind:class="{ 'active-tab': isLocal }" v-on:click="selectFocus('local')">Local</div>
        <div class="col"></div>
      </div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'focus-nav-component',
  props: ['propsIn'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['focus']),
    isNation () { return this.focus === 'nation' },
    isState () { return this.focus === 'state' },
    isLocal () { return this.focus === 'local' }
  },
  methods: {
    ...mapActions(['changeFocus']),
    selectFocus (focus) {
      this.changeFocus(focus)
    }
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

.focus-nav-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #262626;
}
.focus-tab {
  padding-left: 4px;
  padding-right: 4px;
  text-align: center;
  width: 60px;
}
.active-tab {
  color: blue;
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
.col5 {
  max-width: 5vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.colShrink {
  flex: 0 1000 auto;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc1 {
  min-height: 1vh;
}
.spc2 {
  min-height: 2vh;
}
.spc5 {
  min-height: 5vh;
}

</style>
