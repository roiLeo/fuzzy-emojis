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
					<b-tab-item label="Activities">
						<ActivityEmoji />
					</b-tab-item>
					<b-tab-item label="People">
						<PeopleEmoji />
					</b-tab-item>
					<b-tab-item label="Nature">
						<NatureEmoji />
					</b-tab-item>
					<b-tab-item label="Objects">
						<ObjectEmoji />
					</b-tab-item>
					<b-tab-item label="Places">
						<PlaceEmoji />
					</b-tab-item>
					<b-tab-item label="Symbols">
						<SymbolEmoji />
					</b-tab-item>
					<b-tab-item label="Flags">
						<FlagEmoji />
					</b-tab-item>
				</b-tabs>
			</div>
		</div>
	</section>
</template>

<script>
import SearchBar from '~/components/SearchBar'
import ActivityEmoji from '~/components/Tabs/ActivityEmoji'
import PeopleEmoji from '~/components/Tabs/PeopleEmoji'
import NatureEmoji from '~/components/Tabs/NatureEmoji'
import ObjectEmoji from '~/components/Tabs/ObjectEmoji'
import PlaceEmoji from '~/components/Tabs/PlaceEmoji'
import SymbolEmoji from '~/components/Tabs/SymbolEmoji'
import FlagEmoji from '~/components/Tabs/FlagEmoji'

export default {
	components: {
		SearchBar,
		ActivityEmoji,
		PeopleEmoji,
		NatureEmoji,
		ObjectEmoji,
		PlaceEmoji,
		SymbolEmoji,
		FlagEmoji
	}
}
</script>

<style scoped>
.hero {
	background-color: #f8f8f8;
}
</style>
