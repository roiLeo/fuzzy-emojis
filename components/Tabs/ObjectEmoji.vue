<template>
	<div class="columns is-mobile is-centered is-multiline">
		<div class="column is-flex is-justify-content-center" v-for="emoji of objectEmojis" :key="emoji.no">
			<BoxEmojiItem :emoji="emoji" />
		</div>
	</div>
</template>

<script>
import emojis from '~/assets/objects.json'
import BoxEmojiItem from '~/components/BoxEmojiItem'

export default {
	components: {BoxEmojiItem},
	data() {
		return {
			objectEmojis: []
		}
	},
	async fetch() {
		this.objectEmojis = emojis
	},
}
</script>

<style>
</style>
