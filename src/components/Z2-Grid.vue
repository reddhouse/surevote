<template>
  <div class="grid-template-component">
    <div class="super-container">

      <!-- Standard flex row containing 5 flex columns -->
      <div class="spc5"></div>
      <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
        <div class="col">4</div>
        <div class="col">5</div>
      </div>

      <!-- Flex row containing 5 flex columns with center column containing 3 inner flex rows -->
      <div class="spc5"></div>
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
      <div class="spcX"></div>
      <div class="nfr">
        <div class="nfc">
          Some Text
        </div>
      </div>

      <div class="spc5"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'grid-template-component',
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

.grid-template-component {
  --width-percent-for-margin: 90%;
  height: 100vh;
  background-color: white;
  color: #262626;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  height: 100vh;
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

/* Media Queries */
@media (min-width: 321px) {
  .grid-template-component {
    --width-percent-for-margin: 85vw;
  }
}
@media (min-width: 600px) {
  .grid-template-component {
    --width-percent-for-margin: 75vw;
  }
}
@media (min-width: 769px) {
  .grid-template-component {
    --width-percent-for-margin: 60vw;
  }
}
@media (min-width: 1250px) {
  .grid-template-component {
    --width-percent-for-margin: 50vw;
  }
}

</style>
