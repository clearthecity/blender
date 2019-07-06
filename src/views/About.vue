<template>
  <div class="about">
  <div class='container-fluid'>

  <div class='container'>

    <p>This program was written in <a href='https://vuejs.org/'>VueJS</a> and uses a bit of <a href='http://getbootstrap.com/'>Bootstrap</a> for mobile-responsive design. It makes use of Shuan Wang&rsquo;s open-source <a href='https://github.com/swang/markovchain'>markovchain</a> in JavaScript. You can see the source code for the program <a href='https://github.com/clearthecity/blender'>on GitHub</a>.</p>

    <h5>What is the purpose of this program?</h5>
    <p>There is none. I do have a serious educational app called <a href='https://litcrit.herokuapp.com/'>Exploring Literary Criticism</a>.</p>

    <h5>Why those authors?</h5>
    <p>I made this program for my own amusement while developing a class on American literature. All of the source texts are in the public domain.</p>

    <h5>Will this program write my paper for me?</h5>
    <p>Nope.</p>

    <h5>What&rsquo;s a Markov chain?</h5>
    <p>A Markov chain represents the probability of transitioning to a state (a word, in this case) given the current state. If I say <em>Have a nice</em>, a Markov chain can determine, based on previous input, what the likeliest next word will be (<em>day</em>? <em>time</em>? <em>banana</em>?). Markov chains are used in predictive text and any number of Twitter bots, and they&rsquo;re a simple but effective way of capturing a writer&rsquo;s style.</p>

    <h5>Why a Markov chain and not a neural network?</h5>
    <p>Who&rsquo;s asking these questions, anyway? Training a neural network is computationally intensive. Too intensive for an app with no backend and no purpose.</p>

    <h5>I got some weird or dazzlingly poetic results. Can I share them with you?</h5>
    <p>Please do! I can be reached via <a href='https://twitter.com/clearthecity'>Twitter</a> or at <em>clearthecity</em> at [the Google email domain]. If you find a bug or have any difficulty using the site, please tell me about it or open an issue on <a href='https://github.com/clearthecity/blender'>GitHub</a>. </p>

  </div>
  </div>
  </div>
</template>

<style scoped>

  h5 + p {
    margin-bottom: 2rem;
  }

</style>
