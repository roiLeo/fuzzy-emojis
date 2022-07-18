<template>
	<b-field>
		<b-input placeholder="Search emoji..."
		rounded
		expanded
		type="search"
		icon-right="search"
		size="is-medium"
		v-bind:value="value"
		v-on:input="$emit('input', $event)"
		></b-input>
	</b-field>
</template>

<script>
export default {
	props: ['value']
}
</script>

<style scoped>
input.input {
	box-shadow: inherit;
	-webkit-box-shadow: inherit;
}
</style>
