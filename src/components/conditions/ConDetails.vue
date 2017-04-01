<template>
  <div class="con-details-component">
    <div class="super-container">

      <div class="spc2"></div>
      <div class="row">
        <div class="col">{{ condition.description }}</div>
        <div class="col"></div>
      </div>

      <div class="spc2"></div>
      <div class="row">
        <div class="col">
          <div v-for="link in condition.links">
            <a v-bind:href="link" target="_blank">{{ link }}</a>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc2"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
export default {
  name: 'con-details-component',
  props: ['condition'],
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    // ...mapActions(['setTitle'])
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
  /*-moz-box-shadow: inset 0 0 10px #808080;
  -webkit-box-shadow: inset 0 0 10px #808080;
  box-shadow: inset 0 0 10px #808080;*/
  background-color: #e6e6e6;
}
.row {
  width: calc(var(--width-percent-for-margin) - 5vw);
}
div[class^="spc"] {
  width: calc(var(--width-percent-for-margin) - 5vw);
  /*border: 1px solid yellow;*/
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
