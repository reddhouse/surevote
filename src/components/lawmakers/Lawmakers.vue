<template>
  <div class="lawmakers-component">
    <div class="super-container">

      <div class="spc5"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          Coming Soon...&nbsp;&nbsp;:)
          <br><br>
          Thanks for taking a look at SureVote, and for your patience while I continue to add features.
          <br><br>
          If you're the imaginative type, take a second to picture how this page will work...
          <br><br>
          <i class="fa fa-user-circle fa-5x"></i>
          <br><br>
          Your Representative, Larry Lawmaker
          <br>
          2nd District
          <br><br>
          <strong><span style="color: firebrick;">23</span></strong> / 100 pts
          <br>
          Current Score: <span style="color: firebrick;"><strong>Failing</strong></span>
          <br><br>
          Number of times Larry has supported legislation which address the #1 SureVote Improvement:
          <br>
          0 (- 60 pts)
          <br><br>
          Number of times Larry has supported legislation which address a Top Ten SureVote Improvement:
          <br>
          0 (- 30 pts)
          <br><br>
          Number of times Larry has drafted his own unique solution to ANY SureVote Improvement:
          <br>
          1 (+ 5 pts)
          <br><br>
          Number of direct messages Larry has sent you explaining why his priorities differ from yours:
          <br>
          10 (+ 10 pts)
          <br><br><br>
          There are <strong>479,220</strong> SureVote users who live in District 2.
          <br>
          Due to the fact that Larry's score is failing, we expect <strong>479,220</strong> votes to be cast on 11/6/18 to <span style="color: firebrick;"><strong>remove</strong></span> Larry from office.
        </div>
        <div class="col"></div>
      </div>

      <div class="spc25"></div>
      <div class="row rowFlip">
        <div class="col colNavText colShrink" v-on:click="handleBack">&lt;&lt; Back</div>
      </div>

      <div class="nfr nfrDivider"></div>

      <sure-footer></sure-footer>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
import SureFooter from '../home/SureFooter'

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
    handleBack () {
      this.$router.go(-1)
    }
  },
  filters: {

  },
  components: {
    SureFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.lawmakers-component {
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
.rowFlip {
  flex-direction: row-reverse;
}
.colNavText {
  text-align: right;
  padding-top: 1vh;
  padding-bottom: 1vh;
  cursor: pointer;
}
.nfrDivider {
  height: 1px;
  background-color: white;
}

/* Media Queries */
@media (min-width: 321px) {
  .lawmakers-component {
    --width-percent-for-margin: 85vw;
  }
}
@media (min-width: 600px) {
  .lawmakers-component {
    --width-percent-for-margin: 75vw;
  }
}
@media (min-width: 769px) {
  .lawmakers-component {
    --width-percent-for-margin: 60vw;
  }
}
@media (min-width: 1250px) {
  .lawmakers-component {
    --width-percent-for-margin: 50vw;
  }
}

</style>
