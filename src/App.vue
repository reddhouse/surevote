<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
import myFirebase from './myFirebase'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  created () {
    myFirebase.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Update user property in global app state
        this.setUser(user)
        // Save the user object in local storage
        localStorage.setItem('surevote_user', JSON.stringify(user))
        console.log('User ' + user.email + ' is authenticated')
        // Save new user info to firebase database
        this.setFireUser()
        // Send user away from login screen
        if (this.$route.query.redirect) {
          // Admin may have assigned a redirect parameter under SOME conditions
          // If present, send user back to where they came from
          this.$router.push(this.$route.query.redirect.toString())
        } else {
          // If absent, send user home
          // this.$router.push('/')
        }
      } else {
        // Reset user property in global app state to empty object
        this.setUser({})
        // Remove the local storage object we created
        localStorage.removeItem('surevote_user')
        console.log('No user data in local storage')
      }
    })
    // Get ALL improvements via Firebase REST API. NO need for real-time here.
    this.getImprovements()
  },
  computed: {
    ...mapGetters(['user']),
    usersRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('users')
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
    ...mapActions(['setUser', 'getImprovements']),
    setFireUser () {
      let isRecord = _.some(this.fireUsers, { '.key': this.user.uid })
      // If brand new user, add to firebase. First condition ensures that
      // logging-out users don't accidentally reset votes (as was previously happening)
      if (this.user === {} && !isRecord) {
        this.usersRef.child(`${this.user.uid}`).set({
          'numVotes': 50,
          'refreshedVotes': Date.now(),
          'votedOn': 'empty'
        })
      } else {
        // Call function to check date and give new coins
      }
    }
  }
  // watch: {
  //   '$route' (to, from) {
  //     console.log('Route is changing', to, from)
  //   }
  // }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Arimo', Helvetica, Arial, sans-serif;
  /*font-family: 'Cousine', Courier, monospace;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
  color: #262626;
}
.logo-sure {
  color: firebrick;
  font-size: 1.25em;
  font-weight: 500;
}
.logo-vote {
  color: #262626;
  font-size: 1.25em;
  font-weight: 500;
}
span.nobr {
  white-space: nowrap;
}
i.vcoin {
  border-radius: 50%;
  background-color: #ffbf00;
  color: black;
}
/* Media Queries */
@media (min-width: 321px) {

  #app {
    font-size: 100%;
  }
}

@media (min-width: 600px) {

  #app {
    font-size: 100%;
  }
}
</style>
