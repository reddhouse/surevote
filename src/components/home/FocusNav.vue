<template>
  <div class="focus-nav-component">
    <div class="super-container">

      <div class="row">
        <div class="col"></div>
        <div class="col colShrink focus-tab2" v-bind:class="{ 'active-tab': isNation }" v-on:click="selectFocus('nation')">National</div>
        <div class="col"></div>
        <div class="col colShrink focus-tab" v-bind:class="{ 'active-tab': isState }" v-on:click="selectFocus('state')">State</div>
        <div class="col"></div>
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
.focus-tab2 {
  padding-left: 4px;
  padding-right: 8px;
  text-align: center;
  width: 66px;
}
.active-tab {
  color: firebrick;
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

</style>
