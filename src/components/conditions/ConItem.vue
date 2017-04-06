<template>
  <div class="con-item-component">
    <div class="super-container">

      <div class="row">
        <div class="col col1"></div>
        <div class="icc iccVoteBox" v-on:click="addVote">
          <div class="icr icrMax"></div>
          <div class="icr chevron-box"><i class="fa fa-chevron-up"></i></div>
          <div class="icr"></div>
        </div>
        <div class="col col3"></div>

        <div class="icc" v-on:click="showingDetails = true">
          <div class="icr">{{ condition ? condition.title : 'loading...' }}</div>
          <div class="icr icrDetails" v-if="!showingDetails">View Details [+]</div>
          <div class="icr icr05" v-else></div>
          <div class="icr icr05"></div>
          <div class="icr">
            <span class="vote" v-bind:class="{ voting: isVoting }">
              <span class="mono">{{ condition ? condition.votes : 0 }}</span><span class="nobr"><i class="fa fa-check vcoin"></i></span>
            </span>
            <span>
              &nbsp;|&nbsp;
            </span>
            <span class="vote" v-bind:class="{ voting: isVoting }">
              Your Votes: <span class="mono">{{ myVotes }}</span><span class="nobr"><i class="fa fa-check vcoin"></i></span>
            </span>

          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc1" v-if="showingDetails"></div>
      <div class="row" v-if="showingDetails">
        <div class="col">
          <con-details v-bind:condition="condition"></con-details>
        </div>
      </div>

      <div class="spc1"></div>
      <div class="row" v-if="showingDetails">
        <div class="col icrDetails" v-on:click="showingDetails = false">
          [&ndash;] Hide Details
        </div>
      </div>

      <div class="spc8" v-if="showingDetails"></div>
      <div class="spc2"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import myFirebase from '../../myFirebase'
import ConDetails from './ConDetails'

export default {
  name: 'con-item-component',
  props: ['condition'],
  data () {
    return {
      showingDetails: false,
      isVoting: false
    }
  },
  computed: {
    ...mapGetters(['user']),
    improvementsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('improvements')
    },
    conditionsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('conditions')
    },
    userRef () {
      const rootRef = myFirebase.db.ref()
      const allUsersRef = rootRef.child('users')
      return allUsersRef.child(`${this.user.uid}`)
    },
    allVotes () {
      // The number of improvement votes is the sum total of all its conditions votes
      let sumVotes = _.reduce(this.fireConsList, function (sum, obj) {
        return sum + obj.votes
      }, 0)
      return sumVotes
    },
    myVotes () {
      // Returns number of times this user has voted on this condition
      if (this.condition) {
        let target = _.find(this.fireVotesList, { '.key': this.condition.cid })
        if (target) {
          return target['.value']
        } else return 0
      } else return 0
    }
  },
  firebase () {
    return {
      fireBank: {
        source: this.userRef.child('numVotes'),
        asObject: true,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      },
      fireVotesList: {
        source: this.userRef.child('votedOn'),
        asObject: false,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      },
      fireConsList: {
        source: this.conditionsRef.orderByChild('belongsTo').equalTo(`${this.$route.params.iid}`),
        asObject: false,
        cancelCallback () { console.log('Error getting stuff from firebase') }
      }
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
    addVote () {
      if (!this.user.uid) {
        this.$router.push({ path: '/login', query: { redirect: this.$route.fullPath } })
      }
      // Users with 0 votes in the bank cannot upvote improvements, etc.
      if (this.fireBank['.value'] > 0) {
        // Lots of client side data-syncing needed here because, well, firebase
        this.improvementsRef.child(`${this.$route.params.iid}` + '/votes').set(this.allVotes + 1)
        this.conditionsRef.child(this.condition.cid + '/votes').set(this.condition.votes + 1)
        this.userRef.child('votedOn/' + `${this.condition.cid}`).set(this.myVotes + 1)
        this.userRef.child('numVotes').set(this.fireBank['.value'] - 1)
        // Adjust some style settings
        this.isVoting = true
        this.revertIsVoting()
      }
    },
    revertIsVoting: _.debounce(
      function () {
        this.isVoting = false
      },
      2000 // Delay before execution
    )
  },
  filters: {

  },
  components: {
    ConDetails
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.con-item-component {
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #001a33;
}
.vote {
  transition:all 0.07s;
  color: #001a33;
}
.voting {
  color: firebrick;
}
.chevron-box {
  max-height: 20px;
  text-align: center;
  background-color: firebrick;
  color: white;
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
.col1 {
  min-width: 1vw;
  max-width: 1vw;
}
.col3 {
  min-width: 3vw;
  max-width: 3vw;
}
.iccVoteBox {
  min-width: 40px;
  max-width: 40px;
  cursor: pointer;
}
.icrMax {
  max-height: 3px;
}
.icrDetails {
  padding-top: .5vh;
  font-size: .9em;
  color: dodgerblue;
  cursor: pointer;
}
.icr05 {
  min-height: .5vh;
}

</style>
