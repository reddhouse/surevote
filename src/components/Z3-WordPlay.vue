<template>
  <div class="intro-one-component">

    <div class="container">

      <div class="spc spc0"></div>
      <div class="row">
        <div class="col col0"></div>
        <div class="col">
          <div style="font-size: 1.5em;">Frienemies</div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc spc1"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col col1">
          <div id="1st-flex"></div>
          <div id="2nd-flex">{{ this.currentFrienemy }}</div>
        </div>
        <div class="col col2">
          <div id="1st-flex">&nbsp;are not the problem&nbsp;&nbsp;</div>
          <div id="2nd-flex" v-if="playing">
            <a
              v-on:click="togglePlay"
              href="#"
              class="play-pause"
              style="font-size: .7em;">
              <!-- &#9612;&#9612; -->
              [ pause ]
            </a>
          </div>
          <div id="2nd-flex" v-else>
            <a
              v-on:click="togglePlay"
              href="#"
              class="play-pause"
              style="font-size: .7em;">
              <!-- &#9658; -->
              [ play ]
            </a>
          </div>
          <div id="3rd-flex"></div>
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>

      <div class="spc spc2"></div>
      <div class="row">
        <div class="col">
          <div style="text-align: center;">
            <a href="#" v-on:click="emitScrollEvent">What's the Problem?</a>
          </div>
        </div>
      </div>

      <div class="spc spc3"></div>

    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'intro-one-component',
  props: ['propsIn'],
  data () {
    return {
      timer: '',
      frienemies: [
        'Democrats', 'Republicans',
        'Liberals', 'Conservatives',
        'Whites', 'Blacks',
        'Christians', 'Muslims',
        'Russians', 'Mexicans',
        'We', 'They'
      ],
      frienemyIndex: 1,
      currentFrienemy: 'Democrats',
      playing: true
    }
  },
  created () {
    this.timer = setInterval(this.rotateFrienemy, 1500)
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
  methods: {
    // ...mapActions(['setTitle'])
    emitScrollEvent () {
      this.$emit('scroll-two')
    },
    rotateFrienemy () {
      if (this.frienemyIndex >= (this.frienemies.length)) {
        this.frienemyIndex = 0
      }
      this.currentFrienemy = this.frienemies[this.frienemyIndex]
      this.frienemyIndex ++
    },
    togglePlay () {
      if (this.playing) {
        this.playing = false
        clearInterval(this.timer)
      } else {
        this.playing = true
        this.timer = setInterval(this.rotateFrienemy, 1500)
      }
    }
  },
  filters: {

  },
  components: {
    // HelloChild
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.intro-one-component {
  height: 100vh;
  background-color: #262626;
  color: white;
}

a {
  color: #d62929;
}

/* Flex defaults for Justin's custom grid */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.spc {
  width: 95%;
  margin: 0 auto;
  flex: 100 1 auto;
  /*border: 1px solid yellow;*/
}

.row {
  width: 95%;
  margin: 1vh auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
}

.col {
  flex: 1 1 auto;
  /*border: 1px solid white;*/
}

/* Individual spacer sizing */
.spc0 { max-height: 5vh; }
.spc1 { max-height: 25vh; }
.spc3 { max-height: 5vh; }

/* Position divs to keep right one inline and smushed right */
.col0 {
  max-width: 2vw;
}

.col1 {
  width: 6.5em;
  flex: 0 0 auto;
  display: flex;
}

.col1 div:nth-child(1) {
  flex: 1 1 auto;
}

.col1 div:nth-child(2) {
  flex: 0 0 auto;
}

/* Position divs to prevent symbol/entity height from affecting "row" height */
.col2 {
  display: flex;
}

.col2 div:nth-child(1) {
  flex: 0 0 auto;
}

.col2 div:nth-child(2) {
  width: 2.75em;
  flex: 0 0 auto;
}

.col2 div:nth-child(3) {
  flex: 1 1 auto;
}

/* No need for play button to have underline */
a.play-pause:link, a.play-pause:visited, a.play-pause:hover, a.play-pause:active {
  text-decoration: none;
  color: inherit;
}

</style>
