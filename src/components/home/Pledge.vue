<template>
  <div class="pledge-component">
    <div class="super-container">

      <div class="row">
        <div class="col colShrink">
          <div class="padded">We are {{ fireUsers.length }} SureVote users and counting, representing {{ percentage }}% of the voting age population in the US.</div>
          <div class="padded">There are 468 federal lawmakers up for re-election, of which <strong>467</strong> currently have failing scores.</div>
          <div class="padded">There is still time for lawmakers to act on our priorities, but as things stand today...</div>
          <div>We pledge to remove <strong>467</strong> lawmakers from office on 11/6/18.</div>
        </div>
        <div class="col"></div>
      </div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
import myFirebase from '../../myFirebase'
// import HelloChild from './HelloChild'

export default {
  name: 'pledge-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
    usersRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('users')
    },
    percentage () {
      let result = (this.fireUsers.length / 235248000) * 100
      return _.ceil(result, 7)
    }
  },
  firebase () {
    return {
      fireUsers: {
        source: this.usersRef,
        asObject: false,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      }
    }
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

.pledge-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #262626;
}
.padded {
  padding-bottom: 2vh;
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

</style>
