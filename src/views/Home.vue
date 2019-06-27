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
         <input type='radio' class='form-input' v-bind:id="a['authorId']" v-bind:value="a['authorName']" v-model='selectedAuthor'>
         <Author v-bind:author-name="a['authorName']"></Author>
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
      <button type='button' class='btn btn-dark' v-bind:class="{disabled : (selectedAuthor == null)}" v-bind='currentWindow' v-on:click="nextWindow()">Next</button>
    </div>
  </div>
</div>
</div> <!-- end author selection window -->

<div v-if="currentWindow == 2" class='container window' id='text-input-window'>
  <div style='text-align:center'>
    <h4>Step {{ currentWindow }}: Upload your text</h4>
    <h5>Author model: {{ selectedAuthor }}</h5>
  </div>
  <form name='userUploadForm' id='userUploadForm' enctype='multipart/form-data'>

        <!--
        <textarea class='form-control' v-model='inputText' rows='6' placeholder='Write something'></textarea>
        -->

    <div class='row'>
      <div class='col'>

        <!--
        <input type='file' class='form-control-file' name='file' accept='.txt' v-on:change='newUpload($event.target.files[0])'>
        -->



        <div class='btn-group'>
          <file-upload
            class='btn btn-primary'
            input-id='file-upload'
            :value='uploadedFiles'
            @input='updateFile'
            accept='text/plain'
            extensions='.txt'
            :drop='true'
            ref='upload'
          > Select
          </file-upload>
          <button type='button' v-on:click="resetInputForm" class='btn btn-warning mr-2'>Clear</button>

        </div>

      </div>

    </div>
        <div class='row window-nav'>
          <div class='col'>
            <div class='form-group'>
            <button type='button' v-bind='currentWindow' v-on:click="previousWindow" class='btn btn-light mr-2'>Back</button>
            <button type='button' v-on:click='validateInput' class='btn btn-dark mr-2'>Generate</button>
            </div>
          </div>
        </div>
      </form>
  </div> <!-- end text input window -->

  <div v-if="currentWindow == 3" class='container window' id='result-window'>
    <div style='text-align:center'>
      <h4>Step {{ currentWindow }}: Results </h4>
    </div>
    <div class='row'>
      <div class='col'>
        <markov-result></markov-result>
      </div>
    </div>

    <div class='row window-nav'>
      <div class='col'>
        <div class='form-group'>
        <button type='button' v-bind='currentWindow' v-on:click="previousWindow" class='btn btn-light mr-2'>Back</button>
        <button type='button' class='btn btn-dark mr-2'>Save Generated Text</button>
        </div>
      </div>
    </div>
  </div> <!-- end result window -->

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

  #dropbox {
    /*
    position: relative;
    height: 100px;
    width: 50%;
    margin: 0 auto; */
    height: 100px;
    background-color: white;
    border: 1px dotted black;
    text-align: center;
  }
  #dropbox:hover {
    background-color: aqua;
    /* change bg color based on whether .txt file */
  }
</style>

<script>

import Author from '@/components/Author.vue'
import MarkovResult from '@/components/MarkovResult.vue'

/*
function modelFromFile(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf-8', function(err, data) {
      if (err) {
        reject(err)
      }
      else {
        let newModel = new MarkovText()
        newModel.init({
          text:text
        })
        //export newModel as JSON?
      }

    })
    // resolve(JSON-object)
  })
} */

export default {
  name: "home",
  components: {
    Author,
    //FileUpload,
    MarkovResult
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
      //inputText: "",
      uploadedFiles: [],
    }
  },
  methods: {
    resetInputForm: function() {
      //this.inputText = ""
      this.uploadedFiles = []
    },
    randomAuthor: function() {
      let rand = Math.floor(Math.random() * this.authors.length)
      this.selectedAuthor = this.authors[rand].authorName
    },
    nextWindow: function() {
      if (this.currentWindow == 1 && this.selectedAuthor == null) {
        alert("Please choose an author")
        return
      }
      this.currentWindow += 1
    },
    previousWindow: function() {
      if (this.currentWindow > 1)
        this.currentWindow -= 1
    },
    newUpload: function(fileInput) {
      // regular file input, not for Vue-Upload-Component
      this.uploadedFiles = fileInput
      // a File object wih name, type properties
    },
    updateFile: function(value) {
      this.uploadedFiles = value
    },
    validateInput: function() {

      if (this.uploadedFiles.length == 0) {
        alert("No file received")
        return
      }

      /*
      let formData = new FormData() //JS built-in
      formData.append(name, value, filename);
      formData.append('userpic', myFileInput.files[0], 'chris.jpg');
      */

      let filename = this.uploadedFiles[0].name

      alert("Beginning to generate " + filename)
      this.nextWindow()
    },
    generate: function() {
      //...
    },

  },
}

</script>
