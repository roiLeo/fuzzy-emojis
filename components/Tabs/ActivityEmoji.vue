<template>
	<div class="columns is-mobile is-centered is-multiline">
		<div class="column is-flex is-justify-content-center" v-for="emoji of activityEmojis" :key="emoji.no">
			<BoxEmojiItem :emoji="emoji" />
		</div>
	</div>
</template>

<script>
import emojis from '~/assets/activities.json'
import BoxEmojiItem from '~/components/BoxEmojiItem'

export default {
	components: {BoxEmojiItem},
	data() {
		return {
			activityEmojis: []
		}
	},
	async fetch() {
		this.activityEmojis = emojis
	},
}
</script>

<style>
</style>
