<template>
	<section class="hero is-fullheight">
		<!-- Hero head: will stick at the top -->
		<div class="hero-head">
			<header class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<a class="navbar-item">
							Yeet!
						</a>
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
				<p class="subtitle">Having trouble finding what you are looking for?</p>
				<div class="columns">
					<div class="column is-4 is-offset-4">
						<SearchBar />
					</div>
				</div>
			</div>
		</div>

		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot">
			<div class="container">
				<b-tabs type="is-toggle has-background-white" expanded>
					<b-tab-item label="All">
						<FullEmojisList :emojis="$store.state.emojis" />
					</b-tab-item>
					<b-tab-item label="Activities">
						<EmojisList :emojis="$store.state.emojis['Activities']" />
					</b-tab-item>
					<b-tab-item label="People">
						<EmojisList :emojis="$store.state.emojis['Smileys & People']" />
					</b-tab-item>
					<b-tab-item label="Nature">
						<EmojisList :emojis="$store.state.emojis['Animals & Nature']" />
					</b-tab-item>
					<b-tab-item label="Objects">
						<EmojisList :emojis="$store.state.emojis['Objects']" />
					</b-tab-item>
					<b-tab-item label="Places">
						<EmojisList :emojis="$store.state.emojis['Travel & Places']" />
					</b-tab-item>
					<b-tab-item label="Symbols">
						<EmojisList :emojis="$store.state.emojis['Symbols']" />
					</b-tab-item>
					<b-tab-item label="Flags">
						<EmojisList :emojis="$store.state.emojis['Flags']" />
					</b-tab-item>
				</b-tabs>
			</div>
		</div>
	</section>
</template>

<script>
import SearchBar from '~/components/SearchBar'
import EmojisList from '~/components/EmojisList'
import FullEmojisList from '~/components/FullEmojisList'

export default {
	components: {
		SearchBar,
		EmojisList,
		FullEmojisList,
	}
}
</script>

<style scoped>
.hero {
	background-color: #f8f8f8;
}
</style>
