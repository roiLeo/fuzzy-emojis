<template>
	<b-button type="is-dark" v-show="visible" id="ScrollBtn" @click="backtoTop">TOP</b-button>
</template>

<script>
export default {
	name: 'ScrollTop',
	props: {
		visibleoffset: {
			type: [String, Number],
			default: 72
		},
		visibleoffsetbottom: {
			type: [String, Number],
			default: 0,
		},
		right: {
			type: String,
			default: '30px'
		},
		bottom: {
			type: String,
			default: '72px'
		}
	},
	data () {
		return {
			visible: false,
		}
	},
	mounted () {
		window.addEventListener('scroll', this.catchScroll)
		document.getElementById('ScrollBtn').style.bottom = this.bottom
		document.getElementById('ScrollBtn').style.right = this.right
	},
	destroyed () {
		window.removeEventListener('scroll', this.catchScroll)
	},
	methods: {
		catchScroll () {
			const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
			const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
			this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
		},
		backtoTop () {
			window.scrollTo(0, 0);
		}
	}
}
</script>

<style scoped>
#ScrollBtn {
	position: fixed;
}
</style>
