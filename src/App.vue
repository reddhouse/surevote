<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapActions } from 'vuex'
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
        // Send user away from login screen
        if (this.$route.query.redirect) {
          // Admin may have assigned a redirect parameter under SOME conditions
          // If present, send user back to where they came from
          this.$router.push(this.$route.query.redirect.toString())
        } else {
          // If absent, send user home
          this.$router.push('/')
        }
      } else {
        // Reset user property in global app state to empty object
        this.setUser({})
        // Remove the local storage object we created
        localStorage.removeItem('surevote_user')
        console.log('No user data in local storage')
      }
    })
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
  methods: {
    ...mapActions(['setUser'])
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

/* Media Queries */
@media (min-width: 321px) {

  #app {
    font-size: 110%;
  }
}

@media (min-width: 600px) {

  #app {
    font-size: 120%;
  }
}
</style>
