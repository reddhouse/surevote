<template>
  <div class="sure-header-component">
    <div class="super-container">

      <div class="spc spc1"></div>
      <div class="row rowJustify">
        <div class="col colShrink">
          <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
        </div>
        <div class="col"></div>
        <div class="col colShrink">{{ fireBank['.value'] }}<span class="nobr"><i class="fa fa-check vcoin"></i></span>, expires in 29 days.</div>
      </div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import myFirebase from '../myFirebase'
// import HelloChild from './HelloChild'

export default {
  name: 'sure-header-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['user']),
    userRef () {
      const rootRef = myFirebase.db.ref()
      const allUsersRef = rootRef.child('users')
      return allUsersRef.child(`${this.user.uid}`)
    }
  },
  firebase () {
    return {
      fireBank: {
        source: this.userRef.child('numVotes'),
        asObject: true,
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

.sure-header-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #262626;
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
  /*border: 1px solid #262626;*/
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  /*border: 1px solid #262626;*/
}
.nfr {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
}
.nfc {
  text-align: center;
}

/* Individual col or row styliing */
.rowJustify {
  justify-content: space-between;
}
.col1 {
  max-width: 1vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.colShrink {
  flex: 0 1000 auto;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc1 {
  min-height: 1vh;
}
.spc5 {
  min-height: 5vh;
}

</style>
