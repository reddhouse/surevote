<template>
  <div class="sandbox-component">
    <!-- This component tests if Vuex and Axios are wired-up correctly -->
    <p>Sandbox Component</p>

    <counter></counter>

    <artist-search></artist-search>
    <br>
      <div
        v-if="!isBusy">
        <div
          v-for="artist in artists">
          {{ artist.name }}
        </div>
      </div>
      <div
        v-else>Loading ...
      </div>

      <hr>
      <div style="margin-top: 10px;"><router-link to="/account">My Account (Protected Route)</router-link></div>

      <hr>
      <button v-on:click="handleLogout">Log Out</button>

      <hr>
      <div>√ote, or</div>
      <div>
        <span class="nobr"><i class="fa fa-check vcoin"></i>ote</span>
      </div>

      <hr>
      <div>Super Container between horizontal rules in this section only.</div>
      <div class="super-container">
        <div class="spc4"></div>
        <div class="row">
          <div class="col gradient1"></div>
        </div>
        <div class="row rowFlip">
          <div class="col colNavText colShrink">Problems</div>
        </div>

        <div class="spc4"></div>
        <div class="row">
          <div class="col gradient2"></div>
        </div>
        <div class="row rowFlip">
          <div class="col colNavText colShrink">Solutions</div>
        </div>

        <div class="spc4"></div>
        <div class="row">
          <div class="col gradient3"></div>
        </div>
        <div class="row rowFlip">
          <div class="col colNavText colShrink">Representation</div>
        </div>

        <div class="spc4"></div>
        <div class="nfr" style="font-size: 1em;">
          <span class="nobr"><i class="fa fa-check vcoin"></i>ote</span>
        </div>
      </div>
      <hr>

      <div>Add another section here</div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import myFirebase from '../../myFirebase'
import Counter from './Counter'
import ArtistSearch from './ArtistSearch'

export default {
  name: 'sandbox-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['artists', 'isBusy'])
  },
  methods: {
    ...mapActions(['setUser']),
    handleLogout () {
      myFirebase.firebase.auth().signOut()
        .then(() => {
          console.log('Log Out was successful')
          // Reset user property in global app state to empty object
          this.setUser({})
          this.$router.push('/')
        })
    }
  },
  filters: {

  },
  components: {
    Counter,
    ArtistSearch
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.sandbox-component {
  --width-percent-for-margin: 95%;
}
.gradient1 {
  height: .5vh;
  background: linear-gradient(to right, #0069cc, #001a33);
  /* Enter #001a33 on html color picker. Range is 10 to 30 on lightness scale */
}
.gradient2 {
  height: .5vh;
  background: linear-gradient(to right, #cc0000, #660000);
  /* Shifted hue from #001a33. Light range is 20 to 40 */
}
.gradient3 {
  height: .5vh;
  background: linear-gradient(to right, #009973, #003326);
  /* Shifted hue from #001a33, Light range is 20 to 40 */
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  display: flex;
  flex-direction: column;
  /*height: 100vh;*/
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
  border: 1px solid #262626;
}
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.rowFlip {
  flex-direction: row-reverse;
}
.col0 {
  max-width: 0vw;
}
.col1 {
  max-width: 1vw;
}
.colNavText {
  text-align: right;
  font-size: .9em;
  cursor: pointer;
}
.colFocus {
  padding: 2vh 6vw 2vh 6vw;
}

</style>
