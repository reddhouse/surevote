<template>
  <div class="artist-search-component">
    <h4>Our Artist Search component will let us query Spotify</h4>
    <div class="subText">
      Data returned from Spotify will update the Artists property on our app's state object.
    </div>
    <br>
    <input type='text' v-model='name' />
    <button v-on:click='search(name)'>Search></button>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
export default {
  name: 'artist-search-component',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    search (name) {
      if (name.length <= 0) return
      this.$store.dispatch('searchByArtistName', {name})
    }
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.artist-search-component {
  max-width: 500px;
  width: 95%;
  margin: 0 auto;
}

.subText {
  max-width: 400px;
  width: 95%;
  margin: 0 auto;
}

</style>
