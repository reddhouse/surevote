<template>
  <div class="imp-item-component">
    <div class="super-container">

      <div class="spc spc1"></div>
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
        <div class="col colSpc"></div>
      </div>

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
  /*border: 1px solid yellow;*/
}
.row {
  width: var(--width-percent-for-margin);
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

</style>
