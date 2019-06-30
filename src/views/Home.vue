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
       <label v-bind:for="a" class='form-check-label'>
         <input type='radio' class='form-input' v-bind:value="a" :id="a" v-model='selectedAuthor'>
         <Author v-bind:author-name="a"></Author>
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
    <h4>Step {{ currentWindow }}: Add your text</h4>
    <h5>Author model: {{ selectedAuthor }}</h5>
  </div>
  <form name='userUploadForm' id='userUploadForm' enctype='multipart/form-data'>

    <div class='row'>
      <div class='col'>
        <textarea class='form-control' v-model='inputText' rows='6' placeholder='Write something'></textarea>
      </div>
    </div>

<!--
    <div class='row'>
      <div class='col'>
        <input type='file' class='form-control-file' name='file' accept='.txt' v-on:change='newUpload($event.target.files[0])'>
      </div>
    </div>
-->

    <div class='row'><div class='col'>
      <span id='privacy-toggle' onmouseover="this.childNodes[1].style.display = 'inline';"  onmouseleave="this.childNodes[1].style.display = 'none';">
        <em>Is this secure?</em>
        <span>
          This program runs entirely in your brower. We&rsquo;re cool.
        </span>
      </span>
    </div></div>

    <div class='row window-nav'>
      <div class='col'>
        <div class='form-group'>
          <button type='button' v-bind='currentWindow' v-on:click="previousWindow" class='btn btn-light mr-2'>Back</button>
          <button type='button' v-on:click="resetInputForm" class='btn btn-warning mr-2'>Clear</button>
          <button type='button' v-on:click='validateInput' class='btn btn-dark mr-2'>Next</button>
        </div>
      </div>
    </div>

    </form>
  </div> <!-- end text input window -->

  <div v-if="currentWindow == 3" class='container window' id='result-window'>
    <div style='text-align:center'>
      <h4>Step {{ currentWindow }}: Results </h4>
      <h5>Author model: {{ selectedAuthor }}</h5>
    </div>

    <div class='row'>
      <div class='col'>
        <markov-model :author='selectedAuthor' :inputText='inputText'></markov-model>
      </div>
    </div>

    <div class='row window-nav'>
      <div class='col'>
        <div class='form-group'>
        <button type='button' v-bind='currentWindow' v-on:click="previousWindow" class='btn btn-light mr-2'>Back</button>
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

  #privacy-toggle {
    font-size: 0.9rem;
  }

  @media screen and (min-width:577px) {
    #privacy-toggle em {
      text-decoration: underline;
      text-decoration-style: dotted;
    }
    #privacy-toggle em:hover {
      text-decoration: none;
    }
    #privacy-toggle span {
      display: none;
    }
  }

</style>

<script>

import Author from '@/components/Author.vue'
import MarkovModel from '@/components/MarkovModel.vue'

export default {
  name: "home",
  components: {
    Author,
    MarkovModel,
  },
  data() {
    return {
      currentWindow: 1,
      authors: [
        'Henry James',
        'Frank Norris',
        'Edgar Allan Poe',
        'Gertrude Stein',
      ],
      selectedAuthor: null,
      inputText: "",
      uploadedFiles: [],
    }
  },
  methods: {
    resetInputForm: function() {
      this.inputText = ""
      this.uploadedFiles = []
    },
    randomAuthor: function() {
      let rand = Math.floor(Math.random() * this.authors.length)
      this.selectedAuthor = this.authors[rand]
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
    /*
    newUpload: function(fileInput) {
      // regular file input, not for Vue-Upload-Component
      this.uploadedFiles = fileInput
      // a File object wih name, type properties
    },
    updateFile: function(value) {
      this.uploadedFiles = value
    },
    */
    validateInput: function() {
      if (this.inputText == "" && this.uploadedFiles.length == 0) {
        alert("No input received")
        return
      }
      this.nextWindow()
    },
  },
}

</script>
