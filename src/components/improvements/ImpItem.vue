<template>
  <div class="imp-item-component">
    <div class="super-container">

      <div class="row" v-on:click="sendToDetails">
        <div class="icc iccFixed">
          <div class="icr icrShrink icrRank mono">#{{ impIndex + 1}}</div>
          <div class="icr"></div>
        </div>
        <div class="icc">
          <div class="icr">
            <div class="wrap-hyphen">{{ improvement.title }}</div>
          </div>
          <div class="icr icrVotes mono">{{ fireImpObj.votes }}</div>
        </div>
      </div>

      <div class="spc spc1"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
import myFirebase from '../../myFirebase'
// import HelloChild from './HelloChild'

export default {
  name: 'imp-item-component',
  props: ['improvement', 'impIndex'],
  data () {
    return {

    }
  },
  computed: {
    // ...mapGetters(['titleState'])
    improvementsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('improvements')
    }
  },
  firebase () {
    return {
      fireImpObj: {
        source: this.improvementsRef.child(`${this.improvement.iid}`),
        asObject: true,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      }
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
    sendToDetails () {
      this.$router.push(`/improvements/${this.improvement.iid}`)
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

.imp-item-component {
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
.col1 {
  max-width: 1vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.iccFixed {
  border-right: 1px solid #262626;
  margin-right: 4px;
  text-align: center;
}
.icrShrink {
  flex: 0 1000 auto;
}
.icrRank {
  padding: 8px;
  border-bottom: 1px solid #262626;
  font-weight: 600;
}
.icrVotes {
  color: firebrick;
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
