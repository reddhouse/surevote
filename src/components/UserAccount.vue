<template>
  <div class="user-account-component">
    <div>UserAccount Component</div>
    <div>Welcome, {{ this.user.email }}!</div>

    <div>Your Improvements:</div>
    <div v-for="imp in myImps">
      <imp-item v-bind:improvement="imp"></imp-item>
    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import ImpItem from './improvements/ImpItem'

export default {
  name: 'user-account-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['user', 'improvements']),
    myImps () {
      let myImprovements = _.filter(this.improvements, _.matches({ author: this.user.uid }))
      return myImprovements
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    ImpItem
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

</style>
