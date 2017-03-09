<template>
  <div class="intro-component">
    <div class="super-container">

      <div class="spc spc25"></div>
      <div class="nfr title">
        <div class="nfc">"I think they just figured out how to fix everything"</div>
        <div class="nfc"></div>
        <div class="nfc"></div>
      </div>

      <div class="spc"></div>
      <div class="nfr">
        <div class="nfc">
          <a href="#" v-on:click="emitScrollEvent">No, Seriously</a>
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
  name: 'intro-component',
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
    emitScrollEvent () {
      this.$emit('scroll-two')
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

.intro-component {
  height: 100vh;
  background-color: #262626;
  color: white;
}
a {
  color: yellow;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.spc {
  width: 95%;
  margin: 0 auto;
  /* Spacers prefer to fill empty space 1000 to 1 */
  flex: 1000 1000 auto;
  /*border: 1px solid yellow;*/
}
.row {
  width: 95%;
  margin: 0 auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
}
.col {
  flex: 1 1 auto;
  border: 1px solid white;
}
.nfr {
  width: 95%;
  margin: 0 auto;
}
.nfc {
  text-align: center;
}

/* Individual col or row styliing */
.nfr.title {
  width: 90%;
  font-size: 2em;
}

/* Individual spacer sizing */
.spc5 {
  max-height: 5vh;
}
.spc25 {
  max-height: 25vh;
}

</style>
