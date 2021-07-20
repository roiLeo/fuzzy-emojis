<template>
	<div class="columns is-mobile is-centered is-multiline">
		<div class="column is-flex is-justify-content-center" v-for="emoji of symbolEmojis" :key="emoji.no">
			<BoxEmojiItem :emoji="emoji" />
		</div>
	</div>
</template>

<script>
import emojis from '~/assets/symbols.json'
import BoxEmojiItem from '~/components/BoxEmojiItem'

export default {
	components: {BoxEmojiItem},
	data() {
		return {
			symbolEmojis: []
		}
	},
	async fetch() {
		this.symbolEmojis = emojis
	},
}
</script>

<style>
</style>
