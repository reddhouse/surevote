<template>
  <div class="full-page-nav-component">
    <div class="super-container">

      <div class="spc spc1"></div>
      <div class="row rowJustify">
        <div class="col colShrink">
          <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
        </div>
        <div class="col"></div>
        <div class="col colShrink">50<span class="nobr"><i class="fa fa-check vcoin"></i></span>, expires in 29 days.</div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col colShrink colRegion">National</div>
        <div class="col colShrink colRegion">State</div>
        <div class="col colShrink colRegion">Local</div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="nfr"><strong>Our Priorities</strong></div>
      <div class="row">
        <div class="col colShrink">#1&nbsp;&nbsp;&nbsp;</div>
        <div class="col wrap-hyphen">This is the title/summary of an improvement, limited to 80 characters in length.</div>
      </div>
      <div class="row">
        <div class="col"><i class="fa fa-chevron-up"></i> numvotes</div>
      </div>
      <div class="row">
        <div class="col colShrink">#2&nbsp;&nbsp;&nbsp;</div>
        <div class="col wrap-hyphen">This is the title/summary of an improvement, limited to 80 characters in length.</div>
      </div>
      <div class="row">
        <div class="col"><i class="fa fa-chevron-up"></i> numvotes</div>
      </div>
      <div class="row">
        <div class="col colShrink">#3&nbsp;&nbsp;&nbsp;</div>
        <div class="col wrap-hyphen">This is the title/summary of an improvement, limited to 80 characters in length.</div>
      </div>
      <div class="row">
        <div class="col"><i class="fa fa-chevron-up"></i> numvotes</div>
        <div class="col">
          <router-link to="/improvements/all">...view all improvements</router-link>
        </div>
      </div>


      <div class="spc spc2"></div>
      <div class="nfr"><strong>Our Pledge</strong></div>
      <div class="row">
        <div class="col">We are 30,506 SureVote users and counting (20% of the voting age population in [region]).</div>
      </div>
      <div class="row">
        <div class="col">
          <br>
          There are 250 [regional] lawmakers are up for re-election, of which 249 of them currently have failing scores</div>
      </div>
      <div class="row">
        <div class="col">
          <br>
          As it stands, we pledge to remove 249 lawmakers from office on 11/6/18.
        </div>
      </div>
      <div class="row rowJustify">
        <div class="col"></div>
        <div class="col colShrink"><router-link to="/lawmakers">...view lawmaker scores</router-link></div>
      </div>

      <div class="spc"></div>

      <div id="footer" class="spc spc5"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'full-page-nav-component',
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

.full-page-nav-component {
  --width-percent-for-margin: inherit;
  height: 100vh;
  background-color: white;
  color: #262626;
}
a {
  color: dodgerblue;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  border: 1px solid #262626;
}
.nfr {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
}
.nfc {
  text-align: center;
}

/* Individual col or row styliing */
.rowFlip {
  flex-direction: row-reverse;
}
.rowJustify {
  justify-content: space-between;
}
.col1 {
  max-width: 1vw;
}
.col5 {
  min-width: 5vw;
  max-width: 5vw;
}
.colShrink {
  flex: 0 1000 auto;
}
.colNavText {
  text-align: right;
  font-size: .9em;
  cursor: pointer;
}
.colRegion {
  padding: 1vh 6vw 1vh 6vw;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc1 {
  max-height: 1vh;
}
.spc2 {
  max-height: 2vh;
}
.spc4 {
  max-height: 4vh;
}
.spc5 {
  max-height: 5vh;
}
.spc25 {
  max-height: 25vh;
}

</style>
