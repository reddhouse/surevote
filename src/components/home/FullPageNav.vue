<template>
  <div class="full-page-nav-component">

    <div class="ribbon rb1">
      <div class="header-container">
        <div>
          <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
        </div>
      </div>
    </div>

    <div class="ribbon rb2">
      <div class="middle-container">
        <div class="gradient-1"></div>
        <div class="section-title-right">MyAccount</div>
        <div>Common Cents Balance:</div>
        <div>50&#162;</div>
      </div>
    </div>

    <div class="ribbon rb3">3</div>
    <div class="ribbon rb4">4</div>

    <div class="ribbon rb5">
      <div class="footer-container">
        <div><router-link to="/login">Login</router-link></div>
        <div><router-link to="/sandbox">Sandbox</router-link></div>
      </div>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.logo-sure {
  color: firebrick;
  font-size: 1.25em;
  font-weight: 500;
}

.logo-vote {
  color: darkslategray;
  font-size: 1.25em;
  font-weight: 500;
}

.header-container {
  width: 95%;
  margin: 1vh auto;
}

.middle-container {
  width: 95%;
  margin: 1vh auto;
}

.footer-container {
  width: 95%;
  margin: 1vh auto;
}

.ribbon {
  width: 100vw;
}

.rb1 {
  height: 10vh;
}

.rb2 {
  height: 30vh;
}

.rb3 {
  height: 20vh;
}

.rb4 {
  height: 30vh;
}

.rb5 {
  height: 10vh;
}

.gradient-1 {
  height: 1vh;
  background: linear-gradient(to right, #fceabb , #f8b500);
}

.section-title-right {
  text-align: right;
  font-size: .9em;
}
</style>
