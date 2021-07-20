<template>
	<div class="box is-clickable has-text-centered" @click="copyToClipboard(emoji.emoji)">
		<b-tooltip :label="emoji.description"
			type="is-primary is-light"
			position="is-bottom">
			<div class="title">{{ emoji.emoji }}</div>
			<div class="has-text-weight-light">{{ emoji.code }}</div>
		</b-tooltip>
	</div>
</template>

<script>
export default {
	name: "box-emoji-item",
	props: {
		emoji: {
			type: Object
		},
	},
	methods: {
		copyToClipboard(emoji) {
			let el = document.createElement('textarea');
			el.value = emoji;
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);

			this.$buefy.toast.open({
				message: 'Emoji Copied!',
				type: 'is-success'
			})
		}
	}
}
</script>

<style>
</style>
