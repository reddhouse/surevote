<template>
  <div class="lawmakers-component">
    <div class="super-container">

      <!-- Standard flex row containing 5 flex columns -->
      <div class="spc spc5"></div>
      <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">This is the Lawmakers component</div>
        <div class="col">4</div>
        <div class="col">5</div>
      </div>

      <!-- Flex row containing 5 flex columns with center column containing 3 inner flex rows -->
      <div class="spc spc5"></div>
      <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="icc">
          <div class="icr">3</div>
          <div class="icr">4</div>
          <div class="icr">5</div>
        </div>
        <div class="col">6</div>
        <div class="col">7</div>
      </div>

      <!-- Non flex row -->
      <div class="spc"></div>
      <div class="nfr">
        <div class="nfc">
          Some Text
        </div>
      </div>

      <div class="spc spc5"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'lawmakers-component',
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

.lawmakers-component {
  --width-percent-for-margin: 95%;
  height: 100vh;
  background-color: #262626;
  color: white;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.spc {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
  flex: 1000 1000 auto;
  border: 1px solid yellow;
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
  border: 1px solid white;
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  border: 1px solid white;
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
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc5 {
  max-height: 5vh;
}

</style>
