<template>
  <div class="full-page-nav-component">
    <div class="super-container">

      <sure-header></sure-header>
      <div class="spc spc1"></div>
      <focus-nav></focus-nav>

      <div class="spc spc1"></div>
      <imp-list v-bind:propsLimit="impListLimit"></imp-list>

      <div class="spc"></div>

    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import SureHeader from './SureHeader'
import FocusNav from './FocusNav'
import ImpList from '../improvements/ImpList'

export default {
  name: 'full-page-nav-component',
  props: ['propsIn'],
  data () {
    return {
      impListLimit: {
        start: 0,
        through: 3
      }
    }
  },
  computed: {
    ...mapGetters(['user']),
    localUser () {
      console.log(localStorage.surevote_user.uid)
      return localStorage.surevote_user.uid
    }
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    SureHeader,
    FocusNav,
    ImpList
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.full-page-nav-component {
  --width-percent-for-margin: 95%;
  height: 100vh;
  background-color: white;
  color: #262626;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.spc {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
  flex: 1000 1000 auto;
  border: 1px solid yellow;
}
.row {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
}
.col {
  flex: 1 1 auto;
  border: 1px solid #262626;
}
.icc {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.icr {
  flex: 1 1 auto;
  border: 1px solid #262626;
}
.nfr {
  width: var(--width-percent-for-margin);
  margin: 0 auto;
}
.nfc {
  text-align: center;
}

/* Individual col or row styliing */
.col1 {
  max-width: 1vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}
.colShrink {
  flex: 0 1000 auto;
}

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc1 {
  max-height: 1vh;
}
.spc5 {
  max-height: 5vh;
}

</style>
