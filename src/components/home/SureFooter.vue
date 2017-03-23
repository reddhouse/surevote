<template>
  <div class="sure-footer-component">
    <div class="super-container">

      <div class="row">
        <div class="col colLogo" v-on:click="handleLogoClick">
          <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
        </div>
        <div class="col colGrowMore"></div>
      </div>

      <div class="row smallerText">
        <div class="col col0"></div>
        <div class="col">
          <div class="icc">
            <div class="icr"><router-link to="why">Why</router-link></div>
            <div class="icr"><router-link to="how">How</router-link></div>
            <div class="icr">About Us</div>
          </div>
        </div>
        <div class="col"></div>
        <div class="col">
          <div class="icc">
            <div class="icr"><router-link to="improvements/all">Improvements</router-link></div>
            <div class="icr">Lawmakers</div>
            <div class="icr">My Account</div>
          </div>
        </div>
        <div class="col colGrow"></div>
      </div>

      <div id="footer" class="spc spc1"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'sure-footer-component',
  props: ['propsIn'],
  data () {
    return {

    }
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
  methods: {
    // ...mapActions(['setTitle'])
    handleLogoClick () {
      this.$router.push('/')
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

.sure-footer-component {
  --width-percent-for-margin: inherit;
  background-color: #262626;
  color: white;
}
a {
  color: white;
  /*text-decoration: none;*/
}
.logo-sure {
  color: white;
  font-size: 1.25em;
  font-weight: 500;
}
.logo-vote {
  color: white;
  font-size: 1.25em;
  font-weight: 500;
}
.smallerText {
  font-size: .9em;
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
  /*border: 1px solid white;*/
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  padding: .5vh .5vh .5vh 0vh;
  /*border: 1px solid white;*/
}
.nfr {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
}
.nfc {

}

/* Individual col or row styliing */
.col0 {
  max-width: 0vw;
}
.colGrow {
  flex: 3 1 auto;
}
.colGrowMore {
  flex: 1000 1 auto;
}
.colLogo {
  padding-top: 1vh;
  padding-bottom: 1vh;
  cursor: pointer;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc1 {
  min-height: 1vh;
}

</style>
