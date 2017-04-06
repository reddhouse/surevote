<template>
  <div class="intro-component">
    <div class="super-container">

      <div class="spcTop"></div>
      <div class="nfr align title1">
        <div>
          Why do we elect lawmakers based on what they say they <strong>"will&nbsp;do"</strong>?
        </div>
      </div>

      <div class="spc3"></div>
      <div class="nfr align title2">
        <div>
          Wouldn't it be better to reward lawmakers who <strong>"have&nbsp;done"</strong> by
          electing them to serve another term?
        </div>
      </div>

      <div class="spc5"></div>
      <div class="nfr center">
        <div>
          <i class="fa fa-check-square-o fa-3x"></i>
        </div>
      </div>

      <div class="spc5"></div>
      <div class="nfr align title3 avenir">
        <div>
          Until very recently, this simple idea was not possible. There was no
          trustworthy, democratic authority to maintain the list of the things
          we actually want to see accomplished.
        </div>
      </div>

      <div class="spc10"></div>
      <div class="nfr align title2">
        <div>
          Blockchain technology has solved the trust issue.
        </div>
      </div>

      <div class="spc3"></div>
      <div class="nfr align title2">
        <div>
          <a href="#" v-on:click="emitScrollEvent">We are solving everything else.</a>
        </div>
      </div>

      <div class="spcX"></div>

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
  --width-percent-for-margin: inherit;
  height: 100vh;
  background-color: #262626;
  color: white;
}
a {
  color: white;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.spcTop {
  margin: 0 auto;
  flex: 1 1000 10vh;
}
.align {

}
.title1 {
  font-size: 1.1em;
}
.title2 {

}
.title3 {

}

/* Media Queries */
@media (min-width: 375px) {
  .spcTop {
    margin: 0 auto;
    flex: 1 1000 15vh;
  }
  .align {
    text-align: center;
  }
  .title1 {
    font-size: 1.25em;
  }
  .title2 {

  }
  .title3 {

  }
}
@media (min-width: 600px) {

}
@media (min-width: 768px) {
  .align {

  }
  .title1 {
    font-size: 1.5em;
  }
  .title2 {
    font-size: 1.1em;
  }
  .title3 {
    font-size: 1.1em;
  }
}
@media (min-width: 1250px) {

}

</style>
