<template>
	<span class='author' onmouseover="this.childNodes[1].style.display = 'block';"  onmouseleave="this.childNodes[1].style.display = 'none';">
		{{ authorName }}
			<div class='author-sample' v-bind:id=authorName>
				<p> {{ getSampleText(authorName) }} </p>
			</div>
	</span>
</template>

<style scoped>

.author {
	text-decoration: underline;
	text-decoration-style: dotted;
}
.author:hover {
	text-decoration: none;
}

.author-sample {
  display: none;
  background-color: white;
  position: absolute;
  top: 0;
  max-width: 350px;
  padding: 0.3rem;
  box-shadow: -3px 3px 8px #888;
  z-index: 1;
}

@media screen and (min-width:576px) {
  .author-sample {
    margin-left: 150px;
  }
}

@media screen and (max-width:575px) {
  .author-sample {
    top: 200%;
  }
}

.author-sample p {
  font-family: serif;
  font-size: 0.9rem;
}

</style>

<script>
export default {

	name: 'Author',
	props: {
		authorName: String,
	},
	methods: {
		getSampleText: function(authorName) {
			switch(authorName) {
				case 'Henry James':
					this.sampleText = `It had occurred to her early that in her position--that of a young person spending, in framed and wired confinement, the life of a guinea-pig or a magpie--she should know a great many persons without their recognising the acquaintance.`;
					break;
				case 'Edgar Allan Poe':
					this.sampleText = `During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens, I had been passing alone, on horseback, through a singularly dreary tract of country; and at length found myself, as the shades of the evening drew on, within view of the melancholy House of Usher. I know not how it was--but, with the first glimpse of the building, a sense of insufferable gloom pervaded my spirit. `
					break;
				case 'Frank Norris':
					this.sampleText = `McTeague's mind was as his body, heavy, slow to act, sluggish. Yet there was nothing vicious about the man. Altogether he suggested the draught horse, immensely strong, stupid, docile, obedient.`
					break;
				case 'Gertrude Stein':
					this.sampleText = `A kind in glass and a cousin, a spectacle and nothing strange a single hurt color and an arrangement in a system to pointing. All this and not ordinary, not unordered in not resembling. The difference is spreading.`
					break;
				default:
					this.sampleText = 'No sample text available';
				}
				return this.sampleText;
		}
	},

}
</script>
