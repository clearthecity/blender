<template>
  <div class="home">

  <div class='container-fluid'>

    <div class='row'>
  <div class='col-sm-4'>
    <p> Blend your writing style with the style of a famous author using a Markov model </p>
  </div>

  <div class='col'>
   <div id='author-radio' class='form-group'>
     <div v-bind:key='a' v-for='a in authors' class='form-check'>
       <label v-bind:for="a['authorId']" class='form-check-label'>
         <input type='radio' class='form-input' v-bind:id="a['authorId']" v-bind:value="a['authorId']" v-model='selectedAuthor'>
         <Author v-bind:author-name="a['authorName']" v-bind:author-id="a['authorId']"></Author>
       </label>
     </div>
    </div>
  </div>

</div>
<div class='row'>
  <div class='col-lg-6 col-md-8'>
    <textarea class='form-control' v-model='inputText' rows='6' placeholder='Write something'></textarea>
    <input type='file' class='form-control-file' name='file'>

    <div class='row'><div class='col'>
      <button type='button' v-on:click='generateFromInput' class='btn btn-dark'>Generate</button>
      <button type='button' v-on:click="resetInputForm" class='btn btn-light'>Reset</button>
    </div></div>
  </div>

</div>


  </div> <!-- end container -->
  </div> <!-- end home -->
</template>

<style scoped>
</style>

<script>
// @ is an alias to /src
import Author from '@/components/Author.vue'

export default {
  name: "home",
  components: {
    Author
  },
  data() {
    return {
      authors: [
        { authorName: 'Henry James', authorId: 'HenryJames' },
        { authorName: 'Frank Norris', authorId: 'FrankNorris' },
        { authorName: 'Edgar Allan Poe', authorId: 'EdgarAllanPoe' },
        { authorName: 'Gertrude Stein', authorId: 'GertrudeStein' },
        { authorName: 'Virginia Woolf', authorId: 'VirginiaWoolf' },
      ],
      selectedAuthor: null,
      inputText: ""
    }
  },
  methods: {
    generateFromInput: function() {
      alert('Coming soon!')
    },
    resetInputForm: function() {
      this.selectedAuthor = null
      this.inputText = ""
    }
  },

}

</script>
