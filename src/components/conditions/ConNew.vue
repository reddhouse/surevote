<template>
  <div class="new-condition-component">
    <div class="super-container">

      <div class="spc1"></div>
      <div class="row">
        <div class="col col2"></div>
        <div class="col">
          <div class="heading">Add a New Condition</div>
          <div class="sub-heading">You would support this Improvement if only...</div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc2"></div>
      <div class="row rowBlue rowTopPad">
        <div class="col col2"></div>
        <div class="col">
          <div class="input-heading">Title: {{ localCon.title }}</div>
          <input type="text" v-model="localCon.title" placeholder="Title/Summary" maxlength="90">
          <div class="input-instructions">Please, limit 90 characters.</div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc3 rowBlue"></div>
      <div class="row rowBlue">
        <div class="col col2"></div>
        <div class="col">
          <div class="input-heading" style="white-space: pre-wrap">Details: {{ localCon.description }}</div>
          <textarea type="text" v-model="localCon.description" placeholder="Details"></textarea>
          <div class="input-instructions">In this field, you can use Enter for line breaks.</div>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc3 rowBlue"></div>
      <div class="row rowBlue">
        <div class="col col2"></div>
        <div class="col">
          <div class="input-heading">Supporting Links:</div>
          <div class="input-heading" v-for="link in localCon.links">{{ link }}</div>
          <input type="text" v-model="tempLink" placeholder="URL">
          <div class="input-instructions">Copy/Paste links one at a time, clicking the "Add Link" button after each one.</div>
          <button class="green" v-on:click="handleAddLink">Add Link</button>
        </div>
        <div class="col"></div>
      </div>

      <div class="spc5 rowBlue"></div>
      <div class="row rowBlue rowBottomPad">
        <div class="col col2"></div>
        <div class="col">
          <div class="input-heading">Everything look good?</div>
          <button class="red" v-on:click="handleSubmitCondition">Submit Condition</button>
        </div>
        <div class="col"></div>
      </div>

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
  --width-percent-for-margin: inherit;
  background-color: white;
  color: #001a33;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.heading {
  font-weight: 500;
}
.sub-heading {
  font-size: .9em;
  font-style: italic;
}
input, textarea {
  width: 200px;
}
.input-heading {
  font-size: .9em;
  padding-bottom: 1vh;
}
.input-instructions {
  font-size: .8em;
  font-style: italic;
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
.rowBlue {
  background-color: #001a33;
  color: white;
}
.rowTopPad {
  padding-top: 1vh;
}
.rowBottomPad {
  padding-bottom: 1vh;
}
.col2 {
  min-width: 2vw;
  max-width: 2vw;
}

</style>
