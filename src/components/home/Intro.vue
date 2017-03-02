<template>
  <div class="intro-component">

    <div class="container">

      <div class="row row1">
        <div class="col col1">
          <div>Go to the middle...</div>
          <a href="#" v-on:click="emitScrollEvent">Yalla!</a>
        </div>
        <div class="col col2">2</div>
        <div class="col col3">3</div>
        <div class="col col4">4</div>
        <div class="col col5">5</div>
      </div>

      <div class="row row2">
        <div class="col col6">6</div>
        <div class="col col7">7</div>
        <div class="col col8">8</div>
        <div class="col col9">9</div>
        <div class="col col10">10</div>
      </div>

      <div class="row row3">
        <div class="col col11">11</div>
        <div class="col col12">12</div>
        <div class="col col13">13</div>
        <div class="col col14">14</div>
        <div class="col col15">15</div>
      </div>

      <div class="row row4">
        <div class="col col16">16</div>
        <div class="col col17">17</div>
        <div class="col col18">18</div>
        <div class="col col19">19</div>
        <div class="col col20">20</div>
      </div>

    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
// import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'intro-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
  methods: {
    // ...mapActions(['setTitle'])
    emitScrollEvent () {
      this.$emit('scroll-middle')
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
.intro-component {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #262626;
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.row {
  display: flex;
  flex-direction: row;
  height: 25vh;
}

.col {
  flex: 1 1 auto;
  /*border: 1px solid white;*/
}

a {
  color: lime;
}

</style>
