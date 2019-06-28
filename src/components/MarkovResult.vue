<template>
  <div id='markov-result'>
    <div v-if='status == -1'>
      An error occurred
    </div>
    <div v-if='status == 0'>
      Coming soon: an imitation of {{ selectedAuthor }}
    </div>

    <div v-if='status == 2'>
      Blending in progress
    </div>

    <div v-if='status == 3'>
      {{ generatedText }}
    </div>

  </div>
</template>

<style scoped>
</style>

<script>

export default {
  name: 'MarkovResult',
  props: {
    selectedAuthor: String,
    status: [Number, String],
    generatedText: String
  },
  data() {
    return {
    }
  },
  methods: {

  },
}

</script>
