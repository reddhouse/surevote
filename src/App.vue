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
.avenir {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.center {
  text-align: center;
}

/* Spc */
.spc {
  margin: 0 auto;
  flex: 1000 1000 auto;
}
.spc05 {
  min-height: .5vh;
  max-height: .5vh;
}
.spc1 {
  min-height: 1vh;
  max-height: 1vh;
}
.spc2 {
  min-height: 2vh;
  max-height: 2vh;
}
.spc3 {
  min-height: 3vh;
  max-height: 3vh;
}
.spc4 {
  min-height: 4vh;
  max-height: 4vh;
}
.spc5 {
  min-height: 5vh;
  max-height: 5vh;
}
.spc8 {
  min-height: 8vh;
  max-height: 8vh;
}
.spc10 {
  min-height: 10vh;
  max-height: 10vh;
}
.spc15 {
  min-height: 15vh;
  max-height: 15vh;
}
.spc20 {
  min-height: 20vh;
  max-height: 20vh;
}
.spc25 {
  min-height: 25vh;
  max-height: 25vh;
}

/* Row */
.row {
  margin: 0 auto;
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
}
.rowJustify {
  justify-content: space-between;
}

/* Col */
.col {
  flex: 1 1 auto;
}
.colShrink {
  flex: 0 1000 auto;
}
.colSpc {
  flex: 1000 1000 auto;
}

/* Icc */
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 0 auto;
}

/* Nfr */
.nfr {
  margin: 0 auto;
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
