<template>
  <div class="con-item-component">
    <div class="super-container">

      <div class="row">
        <div class="col" v-on:click="addVote"><i class="fa fa-chevron-up"></i></div>
        <div class="col" v-on:click="showingDetails = true">
          <span class="vote" v-bind:class="{ voting: isVoting }">{{ condition ? condition.votes : 0 }}</span>
          <span>
            total&nbsp;|&nbsp;{{ myVotes }}
            <span class="nobr"><i class="fa fa-check vcoin"></i></span>
          </span>
        </div>
        <div class="col" v-on:click="showingDetails = true">{{ condition ? condition.title : 'loading...' }}</div>
        <div class="col"></div>
      </div>

      <div class="row" v-if="showingDetails">
        <div class="col">
          <con-details></con-details>
        </div>
      </div>

      <div class="row" v-if="showingDetails">
        <div class="col" v-on:click="showingDetails = false">
          [-] Hide Details
        </div>
      </div>

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
  props: ['condition', 'topCon'],
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
  --width-percent-for-margin: 95%;
  background-color: white;
  color: #262626;
}
.vote {
  transition:all 0.07s;
  color: #262626;
  line-height: 2em;
}
.voting {
  transform:scale(2.0);
  font-size: 1.5em;
  color: firebrick;
  /*box-shadow: 0 0 10px #ffc600;*/
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
  border: 1px solid yellow;
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
  border: 1px solid #262626;
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  border: 1px solid #262626;
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

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc5 {
  min-height: 5vh;
}

</style>
