<template>
	<div class="columns is-mobile is-centered is-multiline">
		<div class="column is-flex is-justify-content-center" v-for="emoji of emojis" :key="emoji.no">
			<BoxEmojiItem :emoji="emoji" />
		</div>
	</div>
</template>

<script>
import BoxEmojiItem from '~/components/BoxEmojiItem'

export default {
	props: {
		emojis: {
			type: Array,
			required: true
		}
	},
	components: {BoxEmojiItem},
}
</script>

<style>
</style>
