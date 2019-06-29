<template>
  <div class="about">
  <div class='container-fluid'>

  <div class='container'>

  <div class='row'><div class='col'>
    <p>This program was written in <a href='https://vuejs.org/'>VueJS</a> and uses a bit of <a href='http://getbootstrap.com/'>Bootstrap</a> for mobile-responsive design. It makes use of Shuan Wang&rsquo;s open-source <a href='https://github.com/swang/markovchain'>markovchain</a> in JavaScript.</p>
  </div></div>

  <div class='row'><div class='col'>
    <h5>What is the purpose of this program?</h5>
    <p>There is none. I do have a serious educational app called <a href='https://litcrit.herokuapp.com/'>Exploring Literary Criticism</a>.</p>
  </div></div>

  <div class='row'><div class='col'>
    <h5>Why those authors?</h5>
    <p>I made this program for my own amusement while developing a class on American literature. All of the source texts are in the public domain.</p>
  </div></div>

  <div class='row'><div class='col'>
    <h5>Will this program write my paper for me?</h5>
    <p>Nope.</p>
  </div></div>

  <div class='row'><div class='col'>
    <h5>What&rsquo;s a Markov chain?</h5>
    <p>A Markov chain represents the probability of transitioning to a state (a word, in this case) given the current state. If I say <em>Have a nice</em>, a Markov chain can determine, based on input, what the likeliest next word will be (<em>day</em>? <em>time</em>? <em>banana</em>?). Markov chains are used in predictive text and any number of Twitter bots, and they&rsquo;re a simple but effective way of capturing a writer&rsquo;s style.</p>
    <p><em>Why a Markov chain and not a neural network?</em> Who&rsquo;s asking these questions, anyway? Training a neural network is computationally intensive. Too intensive for an app with no backend and no purpose.</p>
  </div></div>

  <div class='row'><div class='col'>
    <h5>Can I see the source code for this program?</h5>
    <p><a href='https://github.com/clearthecity/blender'>Sure</a>.</p>
  </div></div>


  </div>
  </div>
  </div>
</template>
