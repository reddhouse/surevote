<template>
  <div class="sure-footer-component">
    <div class="super-container">

      <div class="row">
        <div class="col colLogo" v-on:click="handleLogoClick">
          <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc1"></div>
      <div class="row smallerText">
        <div class="col colShrink">
          <div class="icc">
            <div class="icr"><router-link to="/why">Why</router-link></div>
            <div class="icr"><router-link to="/how">How</router-link></div>
            <div class="icr">About</div>
          </div>
        </div>
        <div class="col colSpc"></div>
        <div class="col colShrink">
          <div class="icc">
            <div class="icr"><router-link to="/improvements/all">Improvements</router-link></div>
            <div class="icr"><router-link to="/lawmakers">Lawmakers</router-link></div>
            <div class="icr">&nbsp;</div>
          </div>
        </div>
        <div class="col colSpc"></div>
        <div class="col colShrink">
          <div class="icc">
            <div class="icr" v-if="user.uid"><router-link to="/login">Log Out</router-link></div>
            <div class="icr" v-else><router-link to="/login">Login</router-link></div>
            <div class="icr" v-if="!user.uid"><router-link to="/login">Sign Up</router-link></div>
            <div class="icr" v-else>&nbsp;</div>
            <div class="icr" v-if="user.uid"><router-link to="/account">MyAccount</router-link></div>
            <div class="icr" v-else>&nbsp;</div>
          </div>
        </div>
        <div class="col colSpc"></div>
      </div>

      <div id="footer" class="spc1"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'sure-footer-component',
  props: ['propsIn'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['user'])
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
  /*color: #da3e3e;*/
  color: #ffbf00;
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
.row {
  width: var(--width-percent-for-margin);
}
div[class^="spc"] {
  width: var(--width-percent-for-margin);
  /*border: 1px solid yellow;*/
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
.colLogo {
  padding-top: 1vh;
  padding-bottom: 1vh;
  cursor: pointer;
}

/* Media Queries */
@media (min-width: 321px) {
  .sure-footer-component {
    height: 20vh;
  }
}

@media (min-width: 600px) {
  .sure-footer-component {
    height: 20vh;
  }
}

@media (min-width: 769px) {
  .sure-footer-component {
    height: 20vh;
  }
}

</style>
