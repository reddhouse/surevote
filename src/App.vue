<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
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
        // Adjust homepage layout based on whether you're a returning user
        this.setViewForRegulars()
        // Save the user object in local storage
        localStorage.setItem('surevote_user', JSON.stringify(user))
        console.log('User ' + user.email + ' is authenticated')
        // Send user away from login screen
        if (this.$route.query.redirect) {
          // Admin may have assigned a redirect parameter under SOME conditions
          // If present, send user back to where they came from
          this.$router.push(this.$route.query.redirect.toString())
        } else if (this.$route.path === '/login') {
          // Send user to root route
          this.$router.push('/')
        }
      } else {
        // Remove the local storage object we created
        localStorage.removeItem('surevote_user')
        console.log('No user data in local storage')
      }
    })
    // Get ALL improvements via Firebase REST API. NO need for real-time here.
    this.getImprovements()
  },
  computed: {
    ...mapGetters(['homeView'])
  },
  methods: {
    ...mapActions(['setUser', 'getImprovements', 'setHomeView']),
    setViewForRegulars () {
      // Basically skips why/how intro for returning (registered) users
      let newHomeView = this.homeView
      newHomeView.intro2How = false
      newHomeView.intro2Why = false
      this.setHomeView(newHomeView)
    }
  },
  watch: {
    // Example of how to watch when the route changes
    // '$route' (to, from) {
    //   console.log('Route is changing', to, from)
    // },
  }
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
.mono {
  font-family: 'Cousine', Courier, monospace;
}
.wrap-hyphen {
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
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
