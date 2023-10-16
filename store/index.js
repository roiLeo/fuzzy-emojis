import emojis from '~/assets/full-emoji.json'

export const state = () => ({
	emojis: {},
	filteredEmojis: {},
	filter: {
		search: ''
	}
})

export const getters = {
	getEmojis(state) { return state.emojis },
	getEmojisActivities(state) { return state.filteredEmojis['Activities'] },
	getEmojisPeople(state) { return state.filteredEmojis['Smileys & People'] },
	getEmojisNature(state) { return state.filteredEmojis['Animals & Nature'] },
	getEmojisObjects(state) { return state.filteredEmojis['Objects'] },
	getEmojisPlaces(state) { return state.filteredEmojis['Travel & Places'] },
	getEmojisSymbols(state) { return state.filteredEmojis['Symbols'] },
	getEmojisFlags(state) { return state.filteredEmojis['Flags'] },
	getFilteredEmojis(state) { return state.filteredEmojis },
}

export const mutations = {
	SET_EMOJIS(state, emojis) { state.emojis = emojis },
	SET_FILTER_SEARCH(state, search) { state.filter.search = search },
	SET_FILTERED_EMOJIS(state, emojis) { state.filteredEmojis = emojis },
	FILTER_EMOJIS(state) {
		let filteredEmojis = state.emojis
		// state.filteredEmojis = state.emojis

		if (state.filter.search !== '' && state.filter.search.length > 2) {
			const searchList = {}
			const searchTerm = state.filter.search.toLowerCase()
			console.log(state.filter.search)

			for (const key in filteredEmojis) {
			// Object.keys(filteredEmojis).forEach((key) => {
				// console.log(key)

				let arrLength = filteredEmojis[key].length
				let foundEmojis = []

				for (let i = 0; i < arrLength; i++) {
					if (filteredEmojis[key][i].keywords.searchFor(searchTerm) !== -1) {
						foundEmojis.push(filteredEmojis[key][i])
					}
				}
				if (foundEmojis.length) {
					searchList[key] = foundEmojis
				}
			}

			console.log(searchList)
			// filteredEmojis = searchList
			state.filteredEmojis = searchList
		} else {
			console.log('empty search -> fetch in progress')
			// TODO: DO SOMETHING
			// state.filteredEmojis = emojis
			console.log('DOM IS BACK')
		}

		// state.filteredEmojis = filteredEmojis
	},
}

export const actions = {
	async loadEmojis({ commit }) {
		const response = await Object.freeze(emojis)
		await commit('SET_EMOJIS', response)
		await commit('SET_FILTERED_EMOJIS', response)
	},
	async filterSearch({ commit, dispatch }, search) {
		await commit('SET_FILTER_SEARCH', search)
		dispatch('filterEmojis')
	},
	async filterEmojis({ commit }) {
		await commit('FILTER_EMOJIS')
	},
}

/**
 * Extend the Array object
 * @param candid The string to search for
 * @returns Returns the index of the first match or -1 if not found
*/
Array.prototype.searchFor = function (candid) {
	for (var i = 0; i < this.length; i++) {
		if (this[i].indexOf(candid) == 0) {
			return i;
		}
	}
	return -1;
}
