<template>
  <div class="home">

  <div class='container-fluid'>

    <div class='container'>
      <p> Blend your writing style with the style of a famous author using a Markov model </p>
    </div>

  <div v-if="currentWindow == 1" id='author-selection-window' class='container window'>
    <div style='text-align:center'>
      <h4>Step {{ currentWindow }}: Choose an author</h4>
    </div>
  <div class='row'>
  <div class='col'>
   <div id='author-radio' class='form-group'>
     <div v-bind:key='a' v-for='a in authors' class='form-check'>
       <label v-bind:for="a['authorId']" class='form-check-label'>
         <input type='radio' class='form-input' v-bind:id="a['authorId']" v-bind:value="a['authorId']" v-model='selectedAuthor'>
         <Author v-bind:author-name="a['authorName']" v-bind:author-id="a['authorId']"></Author>
       </label>
     </div>
     <div class='form-check' style='margin-top:0.5rem'>
       <button type='button' v-bind='selectedAuthor' v-on:click='randomAuthor()'>Surprise me</button>
    </div>
    </div>
  </div>
</div>
<div class='row window-nav'>
  <div class='col'>
    <div class='form-group'>
      <button type='button' v-bind:class="{disabled : (selectedAuthor == null)}" v-bind='currentWindow' v-on:click="nextWindow()" class='btn btn-dark' >Next</button>
    </div>
  </div>
</div>
</div> <!-- end author selection window -->

<div v-if="currentWindow == 2" class='container window' id='text-input-window'>
  <div style='text-align:center'>
    <h4>Step {{ currentWindow }}: Upload your text</h4>
    <h5>Author model: {{ selectedAuthor }}</h5>
  </div>
    <div class='row'>
      <div class='col'>
        <textarea class='form-control' v-model='inputText' rows='6' placeholder='Write something'></textarea>
        <input type='file' class='form-control-file' name='file'>
      </div>
    </div>
        <div class='row window-nav'>
          <div class='col'>
            <div class='form-group'>
            <button type='button' v-bind='currentWindow' v-on:click="previousWindow" class='btn btn-light mr-2'>Back</button>
            <button type='button' v-on:click='generateFromInput' class='btn btn-dark mr-2'>Generate</button>
            <button type='button' v-on:click="resetInputForm" class='btn btn-light mr-2'>Clear</button>
            </div>
          </div>
        </div>
  </div> <!-- end text input window -->

  </div> <!-- end container-fluid -->
  </div> <!-- end home -->
</template>

<style scoped>

  .window {
      border: 1px solid #2c3e50;
      border-radius: 10px;
      background-color: lavender;
      padding: 1rem;
  }


  button.disabled:hover {
    cursor: not-allowed;
  }
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
      currentWindow: 1,
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
      this.inputText = ""
    },
    randomAuthor: function() {
      let rand = Math.floor(Math.random() * this.authors.length)
      this.selectedAuthor = this.authors[rand].authorId
    },
    nextWindow: function() {
      this.currentWindow += 1
    },
    previousWindow: function() {
      if (this.currentWindow > 1)
        this.currentWindow -= 1
    },
  },
}

</script>
