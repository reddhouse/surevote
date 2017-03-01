<template>
  <div class="hello-component">
    <!-- This component tests if Vuex and Axios are wired-up correctly -->
    <p>Hello/Sandbox Component</p>

    <counter></counter>

    <artist-search></artist-search>
    <br>
      <div
        v-if="!isBusy">
        <div
          v-for="artist in artists">
          {{ artist.name }}
        </div>
      </div>
      <div
        v-else>Loading ...
      </div>

      <hr>
      <div style="margin-top: 10px;"><router-link to="/account">My Account (Protected Route)</router-link></div>

      <hr>
      <button v-on:click="handleLogout">Log Out</button>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import myFirebase from '../myFirebase'
import Counter from './Counter'
import ArtistSearch from './ArtistSearch'

export default {
  name: 'hello-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['artists', 'isBusy'])
  },
  methods: {
    // ...mapActions(['setTitle'])
    handleLogout () {
      myFirebase.firebase.auth().signOut()
        .then(() => {
          console.log('Log Out was successful')
          this.$router.push('/')
        })
    }
  },
  filters: {

  },
  components: {
    Counter,
    ArtistSearch
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

</style>
