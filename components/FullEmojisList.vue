<template>
	<div>
		<div class="content" v-for="(emoji, key) of emojis" :key="emoji.no">
			<h3 class="title">{{key}}</h3>
			<EmojisList :emojis="emoji" />
		</div>
	</div>
</template>

<script>
import EmojisList from '~/components/EmojisList'

export default {
	props: {
		emojis: {
			type: Object,
			required: true
		}
	},
	components: {EmojisList},
}
</script>

<style>
</style>
