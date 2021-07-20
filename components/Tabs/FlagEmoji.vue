<template>
	<div class="columns is-mobile is-centered is-multiline">
		<div class="column is-flex is-justify-content-center" v-for="emoji of flagEmojis" :key="emoji.no">
			<BoxEmojiItem :emoji="emoji" />
		</div>
	</div>
</template>

<script>
import emojis from '~/assets/flags.json'
import BoxEmojiItem from '~/components/BoxEmojiItem'

export default {
	components: {BoxEmojiItem},
	data() {
		return {
			flagEmojis: []
		}
	},
	async fetch() {
		this.flagEmojis = emojis
	},
}
</script>

<style>
</style>
