<template>
  <div class="new-improvement-component">
    <div class="super-container">

      <!-- Standard flex row containing 5 flex columns -->
      <div class="spc5"></div>
      <div class="row">
        <div class="col"></div>
        <div class="col">New Improvement Component</div>
        <div class="col"></div>
      </div>

      <div class="spc5"></div>

    </div>
    <!-- Temp outside of super-container -->
    <div class="nfr">
      <div>
        <div>Local Output: {</div>
        <div>iid: {{ localImp.iid }}</div>
        <div>author: {{ localImp.author }}</div>
        <div>title: {{ localImp.title }}</div>
        <div style="white-space: pre">description: {{ localImp.description }}</div>
        <div>links:</div>
        <div v-for="link in localImp.links">{{ link }}</div>
        <div>}</div>
        <br>
      </div>
      <div>
        <div>Title</div>
        <input type="text" v-model="localImp.title" placeholder="Title/Summary" maxlength="90">
      </div>
      <div>
        <div>Description</div>
        <textarea type="text" v-model="localImp.description" placeholder="Description"></textarea>
      </div>
      <div>
        <div>Supporting Links</div>
        <input type="text" v-model="tempLink" placeholder="Link">
        <button v-on:click="handleAddLink">Add Link</button>
      </div>
      <button v-on:click="handleSubmitImprovement">Submit Improvement</button>
    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import myFirebase from '../../myFirebase'
import uuid from 'uuid/v4'
import { blankImpObj, firstBlankConObj } from '../../helpers'
// import HelloChild from './HelloChild'

export default {
  name: 'new-improvement-component',
  props: ['propsIn'],
  data () {
    return {
      localImp: blankImpObj,
      localCon: firstBlankConObj,
      tempLink: ''
    }
  },
  computed: {
    ...mapGetters(['user']),
    improvementsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('improvements')
    },
    conditionsRef () {
      const rootRef = myFirebase.db.ref()
      return rootRef.child('conditions')
    }
  },
  methods: {
    ...mapActions(['addNewImp', 'getImprovements']),
    handleAddLink () {
      this.localImp.links.push(this.tempLink)
      this.tempLink = ''
    },
    handleSubmitImprovement () {
      let uniqueImpIdentifier = uuid()
      let uniqueConIdentifier = uuid()
      let userAuthor = this.user.uid
      let dateNow = Date.now()
      // Set remaining improvement object properties
      this.localImp.iid = uniqueImpIdentifier
      this.localImp.author = userAuthor
      this.localImp.timestamp = dateNow
      // Set default (unconditional) condition properties
      this.localCon.cid = uniqueConIdentifier
      this.localCon.belongsTo = uniqueImpIdentifier
      this.localCon.author = userAuthor
      this.localCon.timestamp = dateNow
      // Update app state. No need to re-fetch large improvement list data from Firebase :)
      this.addNewImp(this.localImp)
      // Push new data to firebase via websockets.
      this.improvementsRef.child(this.localImp.iid).set(this.localImp)
      this.conditionsRef.child(this.localCon.cid).set(this.localCon)
      // Clear out viewmodel data
      this.localImp = blankImpObj
      this.localCon = firstBlankConObj
      // Send user to back to view improvements in their own account (for now)
      this.$router.push('/account')
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

.new-improvement-component {
  --width-percent-for-margin: 90vw;
  background-color: white;
  color: #262626;
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
  border: 1px solid yellow;
}
.col {
  border: 1px solid #262626;
}
.icr {
  border: 1px solid #262626;
}
.nfr {
  width: var(--width-percent-for-margin);
}

/* Individual col or row styliing */
.col1 {
  max-width: 1vw;
}
.colMargin {
  width: calc((100% - var(--width-percent-for-margin))/2);
}

</style>
