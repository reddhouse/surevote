<template>
  <div class="user-account-component">
    <div class="super-container">

      <div class="nfr">
        <sure-header></sure-header>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col">
          <div>Welcome, {{ this.user.email }}!</div>
          <br>
          <div>Improvements you've authored:</div>
          <div v-if="myImps.length == 0">None, yet...</div>
          <div v-else v-for="imp in myImps">
            <imp-item v-bind:improvement="imp" v-bind:impIndex="'Mine!'"></imp-item>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc25"></div>
      <sure-footer></sure-footer>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import ImpItem from './improvements/ImpItem'
import SureHeader from './home/SureHeader'
import SureFooter from './home/SureFooter'

export default {
  name: 'user-account-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['user', 'improvements']),
    myImps () {
      let myImprovements = _.filter(this.improvements, _.matches({ author: this.user.uid }))
      return myImprovements
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    ImpItem,
    SureHeader,
    SureFooter
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.user-account-component {
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

/* Media Queries */
@media (min-width: 321px) {
  .user-account-component {
    --width-percent-for-margin: 85vw;
  }
}
@media (min-width: 600px) {
  .user-account-component {
    --width-percent-for-margin: 75vw;
  }
}
@media (min-width: 769px) {
  .user-account-component {
    --width-percent-for-margin: 60vw;
  }
}
@media (min-width: 1250px) {
  .user-account-component {
    --width-percent-for-margin: 50vw;
  }
}

</style>
