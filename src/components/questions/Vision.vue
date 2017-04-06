<template>
  <div class="vision-component">
    <div class="super-container">

      <div class="spc5"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col center">Coming Soon...&nbsp;&nbsp;:)</div>
        <div class="col"></div>
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
  name: 'vision-component',
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

.vision-component {
  --width-percent-for-margin: 90vw;
  background-color: white;
  color: #262626;
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

/* Media Queries */
@media (min-width: 321px) {
  .vision-component {
    --width-percent-for-margin: 85vw;
  }
}
@media (min-width: 600px) {
  .vision-component {
    --width-percent-for-margin: 75vw;
  }
}
@media (min-width: 769px) {
  .vision-component {
    --width-percent-for-margin: 60vw;
  }
}
@media (min-width: 1250px) {
  .vision-component {
    --width-percent-for-margin: 50vw;
  }
}

</style>
