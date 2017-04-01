<template>
  <div class="sure-header-component">
    <div class="super-container">

      <div class="spc2"></div>
      <div class="row">
        <div class="col"></div>
        <div class="icc iccShrink">
          <div class="icr icrRight icrPointer" v-on:click="handleGoHome">
            <span class="logo-sure">Sure</span><span class="logo-vote">Vote</span>
          </div>
          <div class="icr icrTopPad">
            {{ coinCount }}<span class="nobr"><i class="fa fa-check vcoin"></i></span>
            <span class="mini"> {{ glassHalf }} in {{ daysUntilExpire + 1 }} days</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import myFirebase from '../../myFirebase'
// import HelloChild from './HelloChild'

export default {
  name: 'sure-header-component',
  props: ['propsIn'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['user']),
    userRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('users')
    },
    daysUntilExpire () {
      let now = moment()
      let endOfMonth = moment().endOf('month')
      let untilThen = endOfMonth.diff(now, 'days')
      return untilThen
    },
    coinCount () {
      if (this.user.uid) {
        return this.fireBank.numVotes
      } else {
        return 50
      }
    },
    glassHalf () {
      return this.fireBank.numVotes > 0 || this.coinCount === 50 ? 'expire' : 'refill'
    }
  },
  firebase () {
    return {
      fireBank: {
        source: this.userRef.child(`${this.user.uid}`),
        asObject: true,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      }
    }
  },
  methods: {
    // ...mapActions(['changeFocus']),
    handleGoHome () {
      this.$router.push('/')
    }
  },
  filters: {

  },
  components: {
    // HelloChild
  },
  watch: {
    user () {
      // Could not fix binding/timing issue with VueFire, so needed this
      // work-around: Re-bind fireBank after user is authenticated
      this.$bindAsObject('fireBank', this.userRef.child(`${this.user.uid}`))
    }
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
.mini {
  font-size: .8em;
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
.iccShrink {
  flex: 0 1000 auto;
}
.icrTopPad {
  padding-top: 3px;
}
.icrPointer {
  cursor: pointer;
}
.icrRight {
  text-align: right;
}

</style>
