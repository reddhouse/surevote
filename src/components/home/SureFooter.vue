<template>
  <div class="sure-footer-component">
    <div class="super-container">

      <div class="row">
        <div class="col colLogo" v-on:click="handleLogoClick">
          <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
        </div>
        <div class="col"></div>
      </div>

      <div class="row smallerText">
        <div class="col colShrink">
          <div class="icc">
            <div class="icr"><router-link to="/why">Why</router-link></div>
            <div class="icr"><router-link to="/how">How</router-link></div>
            <div class="icr">About</div>
          </div>
        </div>
        <div class="col"></div>
        <div class="col colShrink">
          <div class="icc">
            <div class="icr"><router-link to="/improvements/all">Improvements</router-link></div>
            <div class="icr"><router-link to="/lawmakers">Lawmakers</router-link></div>
            <div class="icr">&nbsp;</div>
          </div>
        </div>
        <div class="col"></div>
        <div class="col colShrink">
          <div class="icc">
            <div class="icr"><router-link to="/login">Sign In</router-link></div>
            <div class="icr">&nbsp;</div>
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
  /*border: 1px solid yellow;*/
}
.row {
  width: var(--width-percent-for-margin);
}
.col {
  /*border: 1px solid white;*/
}
.icr {
  padding: .5vh .5vh .5vh 0vh;
  /*border: 1px solid white;*/
}
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.col0 {
  max-width: 0vw;
}
.colLogo {
  padding-top: 1vh;
  padding-bottom: 1vh;
  cursor: pointer;
}
.colGrow {
  flex: 2 1 auto;
}

</style>
