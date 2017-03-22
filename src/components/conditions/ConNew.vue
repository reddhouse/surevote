<template>
  <div class="new-condition-component">
    <div class="super-container">

      <!-- Standard flex row containing 5 flex columns -->
      <div class="spc spc5"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col">New Condition Component</div>
        <div class="col"></div>
      </div>

      <div class="spc spc5"></div>

    </div>
    <!-- Temp outside of super-container -->
    <div class="nfr">
      <div>
        <div>Local Output: {</div>
        <div>title: {{ localCon.title }}</div>
        <div style="white-space: pre">description: {{ localCon.description }}</div>
        <div>links:</div>
        <div v-for="link in localCon.links">{{ link }}</div>
        <div>}</div>
        <br>
      </div>
      <div>
        <div>Title</div>
        <input type="text" v-model="localCon.title" placeholder="Title/Summary">
      </div>
      <div>
        <div>Description</div>
        <textarea type="text" v-model="localCon.description" placeholder="Description"></textarea>
      </div>
      <div>
        <div>Supporting Links</div>
        <input type="text" v-model="tempLink" placeholder="Link">
        <button v-on:click="handleAddLink">Add Link</button>
      </div>
      <button v-on:click="handleSubmitCondition">Submit Condition</button>
    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters } from 'vuex'
import myFirebase from '../../myFirebase'
import uuid from 'uuid/v4'
import { secondaryBlankConObj } from '../../helpers'
// import HelloChild from './HelloChild'

export default {
  name: 'new-condition-component',
  props: ['propsIn'],
  data () {
    return {
      localCon: secondaryBlankConObj,
      tempLink: ''
    }
  },
  computed: {
    ...mapGetters(['user']),
    conditionsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('conditions')
    }
  },
  methods: {
    // ...mapActions(['addNewCon']),
    handleAddLink () {
      this.localCon.links.push(this.tempLink)
      this.tempLink = ''
    },
    handleSubmitCondition () {
      this.localCon.cid = uuid()
      this.localCon.belongsTo = this.$route.params.iid
      this.localCon.author = this.user.uid
      this.localCon.timestamp = Date.now()
      // Push new data to firebase via websockets.
      this.conditionsRef.child(this.localCon.cid).set(this.localCon)
      // Clear out viewmodel data
      this.localCon = secondaryBlankConObj
      // Close (hide) ConNew component in parent
      this.$emit('finished-submitting')
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

.new-condition-component {
  --width-percent-for-margin: 90%;
  background-color: white;
  color: #262626;
}

/* Flex defaults for SureVote's custom grid template  */
.super-container {
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

/* Individual spacer sizing */
/* If height is NOT set in super-container use min-height in spacers */
.spc5 {
  min-height: 5vh;
}

</style>
