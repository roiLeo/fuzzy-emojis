<template>
	<div class="columns is-mobile is-centered is-multiline">
		<div class="column is-flex is-justify-content-center" v-for="emoji of peopleEmojis" :key="emoji.no">
			<BoxEmojiItem :emoji="emoji" />
		</div>
	</div>
</template>

<script>
import emojis from '~/assets/smileys&people.json'
import BoxEmojiItem from '~/components/BoxEmojiItem'

export default {
	components: {BoxEmojiItem},
	data() {
		return {
			peopleEmojis: []
		}
	},
	async fetch() {
		this.peopleEmojis = emojis
	},
}
</script>

<style>
</style>
