<template>
  <div class="login-component">

    <div class="title">Login</div>
    <form v-on:submit.prevent="handleLogin">
      <div class="alert" v-if="loginError">{{ loginError }}</div>
      <div class="flex1">
        <div class="flex1a">Email </div>
        <div class="flex1b"><input type="email" placeholder="Email" autofocus v-model="loginEmail"></div>
      </div>
      <div class="flex1">
        <div class="flex1a">Password </div>
        <div class="flex1b"><input type="password" placeholder="Password" autofocus v-model="loginPassword"></div>
      </div>
      <div class="flex1">
        <div class="flex1a"></div>
        <div class="flex1b"><button>Log In</button><div>
      </div>
    </form>

    <div class="spacer">New <span class="logo-sure-reg">Sure</span><span class="logo-vote-reg">Vote</span> user?<br>Sign up below to create an account.</div>

    <div class="title">Signup</div>
    <form v-on:submit.prevent="handleRegister">
      <div class="alert" v-if="signUpError">{{ signUpError }}</div>
      <div class="flex1">
        <div class="flex1a">Email </div>
        <div class="flex1b"><input type="email" placeholder="Email" autofocus v-model="signUpEmail"></div>
      </div>
      <div class="flex1">
        <div class="flex1a">Password </div>
        <div class="flex1b"><input type="password" placeholder="Password" autofocus v-model="signUpPassword"></div>
      </div>
      <div class="flex1">
        <div class="flex1a"></div>
        <div class="flex1b"><button>Sign Up</button><div>
      </div>
    </form>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import myFirebase from '../myFirebase'
import _ from 'lodash'
// import HelloChild from './HelloChild'

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
    // ...mapActions(['setTitle'])
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
    // HelloChild
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.login-component {
  text-align: center;
}

.title {
  font-size: 1.5em;
  text-align: left;
  margin: 1rem;
}

.alert {
  color: red;
}

.flex1 {
  max-width: 320px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  background-color: lightsteelblue;
}

.flex1a {
  width: 120px;
  text-align: right;
  padding: 4px;
  background-color: gainsboro;
}

.flex1b {
  width: 200px;
  text-align: left;
  padding: 2px;
}

input {
  border: 1px solid #2c3e50;
  padding: 2px 4px;
  margin: 1px 2px;
}

button {
  background-color: #2c3e50;
  color: white;
  border: 1px solid #2c3e50;
  padding: 2px 8px;
  text-align: center;
  text-decoration: none;
  font-size: .7em;
  font-weight: 500;
  margin: 1px 2px;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  cursor: pointer;
}

.spacer {
  padding: 80px 0px 20px 0px;
}

@media (min-width: 321px) {

  .title {
    text-align:inherit;
  }
}

@media (min-width: 600px) {

  .title {
    text-align:inherit;
  }
}
</style>
