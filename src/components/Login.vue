<template>
  <div class="login-component">
    <div id="conditional-container" class="super-container" v-if="!user.uid">

      <div class="nfr">
        <sure-header></sure-header>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col avenir impact">Login</div>
        <div class="col"></div>
      </div>

      <div class="spc1"></div>
      <div class="row">
        <div class="icc iccShrink iccGrey">
          <div class="icr icrField1">Email</div>
          <div class="icr icrField2">Password</div>
          <div class="icr icrButton"></div>
        </div>
        <div class="icc iccBlue">
        <form v-on:submit.prevent="handleLogin">
          <div class="icr icrInput1"><input type="email" placeholder="Email" autofocus v-model="loginEmail"></div>
          <div class="icr icrInput2"><input type="password" placeholder="Password" autofocus v-model="loginPassword"></div>
          <div class="icr icrButton"><button class="green">Log In</button></div>
        </form>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col">
          <div class="alert" v-if="signUpError">{{ signUpError }}</div>
          <div class="alert" v-else-if="loginError">{{ loginError }}</div>
          <div class="avenir" v-else>New <span class="logo-sure-reg">Sure</span><span class="logo-vote-reg">Vote</span> user?<br>Sign up below to create an account.</div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col avenir impact">Signup</div>
        <div class="col"></div>
      </div>

      <div class="spc1"></div>
      <div class="row">
        <div class="icc iccShrink iccGrey">
          <div class="icr icrField1">Email</div>
          <div class="icr icrField2">Password</div>
          <div class="icr icrButton"></div>
        </div>
        <div class="icc iccBlue">
        <form v-on:submit.prevent="handleRegister">
          <div class="icr icrInput1"><input type="email" placeholder="Email" autofocus v-model="signUpEmail"></div>
          <div class="icr icrInput2"><input type="password" placeholder="Password" autofocus v-model="signUpPassword"></div>
          <div class="icr icrButton"><button class="green">Sign Up</button></div>
        </form>
        </div>
        <div class="col"></div>
      </div>

    <!-- Close Conditional Container. If logged in, only show logout button. -->
    </div>
    <div class="super-container" v-else>
      <div class="nfr">
        <sure-header></sure-header>
      </div>

      <div class="spc5"></div>
      <div class="row">
        <div class="col">
          <div>Later Gator!</div>
          <br>
          <button class="red" v-on:click="handleLogout">Log Out</button>
        </div>
        <div class="col"></div>
      </div>
    </div>

    <div class="spc5"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import myFirebase from '../myFirebase'
import _ from 'lodash'
import SureHeader from './home/SureHeader'

export default {
  name: 'login-component',
  props: ['propsIn'],
  data () {
    return {
      signUpEmail: '',
      signUpPassword: '',
      signUpError: null,
      loginEmail: '',
      loginPassword: '',
      loginError: null
    }
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
    ...mapActions(['setUser']),
    handleRegister () {
      this.signUpError = null
      myFirebase.firebase.auth().createUserWithEmailAndPassword(this.signUpEmail, this.signUpPassword)
        .then(() => {
          console.log('Signup was successful')
          setTimeout(() => (this.setNewFireUser()), 500)
        })
        .catch(error => {
          console.log(error.code)
          this.signUpError = error.message
        })
    },
    handleLogin () {
      this.loginError = null
      myFirebase.firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then(() => {
          console.log('Login was successful')
        })
        .catch(error => {
          console.log(error.code)
          this.loginError = error.message
        })
    },
    handleLogout () {
      myFirebase.firebase.auth().signOut()
        .then(() => {
          console.log('Log Out was successful')
          // Reset user property in global app state to empty object
          this.setUser({})
          this.$router.push('/')
        })
    },
    setNewFireUser () {
      let isRecord = _.some(this.fireUsers, { '.key': this.user.uid })
      if (!isRecord) {
        this.usersRef.child(`${this.user.uid}`).set({
          'numVotes': 50,
          'refreshedVotes': Date.now(),
          'votedOn': 'empty'
        })
      }
    }
  },
  filters: {

  },
  components: {
    SureHeader
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.login-component {
  --width-percent-for-margin: 90vw;
  background-color: white;
  color: #001a33;
}
.alert {
  color: red;
}
.impact {
  font-size: 1.2em;
  font-weight: 600;
}
button.green {
  background-color: white;
  color: #001a33;
  border: 1px solid #4CAF50;
  border-radius: 3px;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: .7em;
  font-weight: 600;
  margin: 4px 0px;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  cursor: pointer;
}
button.green:hover {
  background-color: #4CAF50;
  color: white;
}
button.red {
  background-color: white;
  color: #001a33;
  border: 1px solid firebrick;
  border-radius: 3px;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: .7em;
  font-weight: 600;
  margin: 4px 0px;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  cursor: pointer;
}
button.red:hover {
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
.iccShrink {
  flex: 0 1000 auto;
}
.iccGrey{
  background-color: #e6e6e6;
  color: white;
}
.iccBlue {
  background-color: #001a33;
  color: white;
}
.icrField1 {
  text-align: right;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: #001a33;
}
.icrField2 {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: #001a33;
}
.icrInput1 {
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.icrInput2 {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.icrButton {
  min-height: 50px;
  max-height: 50px;
  padding-left: 20px;
}

/* Media Queries */
@media (min-width: 321px) {
  .login-component {
    --width-percent-for-margin: 85vw;
  }
}
@media (min-width: 600px) {
  .login-component {
    --width-percent-for-margin: 75vw;
  }
}
@media (min-width: 769px) {
  .login-component {
    --width-percent-for-margin: 60vw;
  }
}
@media (min-width: 1250px) {
  .login-component {
    --width-percent-for-margin: 50vw;
  }
}

</style>
