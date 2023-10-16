<template>
	<section class="hero is-fullheight">
		<!-- Hero head: will stick at the top -->
		<div class="hero-head">
			<header class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<a class="navbar-item"> 🦁 </a>
						<span
							class="navbar-burger"
							data-target="navbarMenuHeroC"
						>
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
				</div>
			</header>
		</div>

		<!-- Hero content: will be in the middle -->
		<div class="hero-body">
			<div class="container has-text-centered">
				<p class="subtitle">
					Having trouble finding what you are looking for?
				</p>
				<div class="columns">
					<div class="column is-4 is-offset-4">
						<SearchBar @input="handleSearch" />
					</div>
				</div>
			</div>
		</div>

		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot">
			<div class="container">
				<b-tabs type="is-toggle has-background-white" expanded v-if="emojis">
					<b-tab-item label="All">
						<FullEmojisList :emojis="filteredEmojis" />
					</b-tab-item>
					<b-tab-item label="Activities">
						<EmojisList :emojis="emojisActivities" />
					</b-tab-item>
					<b-tab-item label="People">
						<EmojisList :emojis="emojisPeople" />
					</b-tab-item>
					<b-tab-item label="Nature">
						<EmojisList :emojis="emojisNature" />
					</b-tab-item>
					<b-tab-item label="Objects">
						<EmojisList :emojis="emojisObjects" />
					</b-tab-item>
					<b-tab-item label="Places">
						<EmojisList :emojis="emojisPlaces" />
					</b-tab-item>
					<b-tab-item label="Symbols">
						<EmojisList :emojis="emojisSymbols" />
					</b-tab-item>
					<b-tab-item label="Flags">
						<EmojisList :emojis="emojisFlags" />
					</b-tab-item>
				</b-tabs>
			</div>
		</div>

		<ScrollTop />
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from '~/components/SearchBar'
import ScrollTop from '~/components/ScrollTop'
import EmojisList from '~/components/EmojisList'
import FullEmojisList from '~/components/FullEmojisList'

export default {
	components: {
		SearchBar,
		ScrollTop,
		EmojisList,
		FullEmojisList,
	},
	computed: {
		...mapGetters({
			'emojis': 'getEmojis',
			'emojisActivities': 'getEmojisActivities',
			'emojisPeople': 'getEmojisPeople',
			'emojisNature': 'getEmojisNature',
			'emojisObjects': 'getEmojisObjects',
			'emojisPlaces': 'getEmojisPlaces',
			'emojisSymbols': 'getEmojisSymbols',
			'emojisFlags': 'getEmojisFlags',
			'filteredEmojis': 'getFilteredEmojis',
		})
	},
	async fetch({ store }) {
		await store.dispatch('loadEmojis')
	},
	mounted() {
		if (!this.emojis.length) {
			console.log('empty emojis in index -> fetch in progress')
			this.$store.dispatch('loadEmojis')
		}
	},
	methods: {
		handleSearch(value) {
			this.$store.dispatch('filterSearch', value)
		}
	}
}
</script>

<style scoped>
.hero {
	background-color: #f8f8f8;
}
</style>
